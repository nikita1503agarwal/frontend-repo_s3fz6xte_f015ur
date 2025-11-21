import { Link, NavLink } from 'react-router-dom'

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive ? 'text-white bg-white/10' : 'text-blue-100 hover:text-white hover:bg-white/10'
      }`
    }
  >
    {label}
  </NavLink>
)

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="logo" className="h-8 w-8" />
          <span className="text-white font-bold text-lg">iGaming Deals</span>
        </Link>
        <nav className="flex items-center gap-1">
          <NavItem to="/" label="Home" />
          <NavItem to="/bonuses" label="Bonuses" />
          <NavItem to="/leaderboard" label="Leaderboard" />
          <NavItem to="/articles" label="Articles" />
        </nav>
        <a
          href="#bonuses"
          className="hidden md:inline-flex bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 text-sm font-semibold shadow"
        >
          Claim a Bonus
        </a>
      </div>
    </header>
  )
}
