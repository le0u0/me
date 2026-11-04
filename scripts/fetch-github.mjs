import { existsSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'

const USER = 'le0u0'
const TOPIC = 'showcase'
const OUT = new URL('../src/data/github.json', import.meta.url)

const headers = { Accept: 'application/vnd.github+json' }
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`

async function get(path) {
  const res = await fetch(`https://api.github.com${path}`, { headers })
  if (!res.ok) throw new Error(`${path}: ${res.status}`)
  return res.json()
}

try {
  const [user, repos] = await Promise.all([
    get(`/users/${USER}`),
    get(`/users/${USER}/repos?per_page=100&sort=pushed`),
  ])
  const data = {
    profile: { login: user.login, name: user.name, bio: user.bio, avatar: user.avatar_url, url: user.html_url },
    repos: repos
      .filter(repo => !repo.fork && !repo.archived && repo.topics?.includes(TOPIC))
      .map(repo => ({ name: repo.name, href: repo.html_url, description: repo.description }))
  }
  await writeFile(OUT, `${JSON.stringify(data, null, 2)}\n`)
} catch (error) {
  if (!existsSync(OUT)) await writeFile(OUT, JSON.stringify({ profile: null, repos: [] }))
  console.warn(`fetch-github: ${error.message}; using ${existsSync(OUT) ? 'existing' : 'empty'} data`)
}
