export default function Footer(){
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-blue-100">
        <div>
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="logo" className="h-8 w-8" />
            <span className="text-white font-bold text-lg">iGaming Deals</span>
          </div>
          <p className="mt-3 text-sm">The best place to find verified bonus codes from trusted partners. Play responsibly. 18+ only.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a className="hover:text-white" href="/bonuses">Bonuses</a></li>
            <li><a className="hover:text-white" href="/leaderboard">Leaderboard</a></li>
            <li><a className="hover:text-white" href="/articles">Articles</a></li>
            <li><a className="hover:text-white" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-sm">
            <li><a className="hover:text-white" href="/privacy">Privacy</a></li>
            <li><a className="hover:text-white" href="/terms">Terms</a></li>
            <li><a className="hover:text-white" href="/cookie">Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-blue-200">© {new Date().getFullYear()} iGaming Deals. All rights reserved.</div>
    </footer>
  )
}
