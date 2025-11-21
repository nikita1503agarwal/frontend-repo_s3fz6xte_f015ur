import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedPartners from './components/FeaturedPartners'
import BonusesPage from './components/Bonuses'
import Leaderboard from './components/Leaderboard'
import { ArticlesGrid } from './components/Articles'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <Hero />
      <FeaturedPartners />
      <BonusesPage />
      <Leaderboard />
      <ArticlesGrid />
      <Footer />
    </div>
  )
}

export default App
