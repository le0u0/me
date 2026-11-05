import { execSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'

const USER = 'le0u0'
const OUT = new URL('../src/data/github.json', import.meta.url)

function token() {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN
  try {
    return execSync('gh auth token', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim()
  } catch {
    return null
  }
}

const query = `query($login: String!) {
  user(login: $login) {
    login
    name
    bio
    avatarUrl
    url
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes { ... on Repository { name url description primaryLanguage { name } } }
    }
  }
}`

try {
  const auth = token()
  if (!auth) throw new Error('no GITHUB_TOKEN and no gh login')
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${auth}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { login: USER } }),
  })
  const { data, errors } = await res.json()
  if (!res.ok || errors) throw new Error(errors?.[0]?.message ?? `graphql: ${res.status}`)
  const user = data.user
  const out = {
    profile: { login: user.login, name: user.name, bio: user.bio, avatar: user.avatarUrl, url: user.url },
    repos: user.pinnedItems.nodes.map(repo => ({
      name: repo.name,
      href: repo.url,
      description: repo.description,
      language: repo.primaryLanguage?.name ?? null,
    })),
  }
  await writeFile(OUT, `${JSON.stringify(out, null, 2)}\n`)
} catch (error) {
  if (!existsSync(OUT)) await writeFile(OUT, JSON.stringify({ profile: null, repos: [] }))
  console.warn(`fetch-github: ${error.message}; using ${existsSync(OUT) ? 'existing' : 'empty'} data`)
}
