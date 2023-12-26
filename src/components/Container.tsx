import Link from 'next/link'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <header className="header">
        <span className="header__title">
          <span> Jennifer Chinabu</span>
          <span>Data Scientist</span>
        </span>
      </header>
      <main>{children}</main>
      {/* <footer className="footer"></footer> */}
    </div>
  )
}
