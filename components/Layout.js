import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/" className="site-logo">
          <h1>
            <span>The</span>
            <span>Recipe Journal</span>
          </h1>
        </Link>
      </header>

      <main className="page-content">
        {children}
      </main>

      <footer>
        <p>Copyright © {new Date().getFullYear()} The Recipe Journal</p>
      </footer>
    </div>
  )
}