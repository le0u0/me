function Section({ id, labelledBy, className, contentClassName, children }) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={contentClassName ? className : `wrap ${className}`}
    >
      {contentClassName ? (
        <div className={`wrap ${contentClassName}`}>{children}</div>
      ) : children}
    </section>
  )
}

export default Section
