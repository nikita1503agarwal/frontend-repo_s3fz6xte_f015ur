import { useEffect, useMemo, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Tag({ children, onClick, active }) {
  return (
    <button onClick={onClick} className={`text-xs px-2 py-1 rounded border ${active? 'bg-blue-500 text-white border-blue-500':'border-white/20 text-blue-100 hover:bg-white/10'}`}>
      {children}
    </button>
  )
}

function BonusCard({ item }) {
  const handleClick = async () => {
    try {
      await fetch(`${BACKEND}/api/offers/${item.id}/click`, { method: 'POST' })
    } catch (e) {}
    window.open(item.url, '_blank')
  }

  const copyCode = async () => {
    if (item.code) {
      await navigator.clipboard.writeText(item.code)
      alert('Code copied: ' + item.code)
    }
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <img src={item.logo_url || '/placeholder-partner.svg'} alt={item.partner_slug} className="h-10 w-10 rounded"/>
        <div className="flex-1">
          <p className="text-white font-semibold">{item.title}</p>
          <p className="text-blue-200 text-xs">{item.terms || 'See terms on site'}</p>
        </div>
        {item.code && (
          <button onClick={copyCode} className="text-xs bg-white/10 hover:bg-white/20 text-white rounded px-2 py-1 border border-white/10">Copy Code</button>
        )}
      </div>
      <div className="flex items-center gap-2">
        {item.categories?.slice(0,3).map((c)=>(<span key={c} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-blue-100">{c}</span>))}
        <span className="ml-auto text-blue-200 text-xs">{item.expires_at ? 'Ends soon' : 'Limited time'}</span>
      </div>
      <button onClick={handleClick} className="mt-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 font-semibold">Claim Bonus</button>
    </div>
  )
}

export default function BonusesPage() {
  const [items, setItems] = useState([])
  const [q, setQ] = useState('')
  const [category, setCategory] = useState('')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    const params = new URLSearchParams()
    if (q) params.set('q', q)
    if (category) params.set('category', category)
    if (sort) params.set('sort', sort)
    fetch(`${BACKEND}/api/offers?${params.toString()}`)
      .then(r=>r.json()).then(setItems).catch(()=>{})
  }, [q, category, sort])

  const categories = useMemo(()=>{
    const all = new Set()
    items.forEach(i => (i.categories||[]).forEach(c=>all.add(c)))
    return Array.from(all)
  }, [items])

  return (
    <section id="bonuses" className="relative mx-auto max-w-7xl px-4 py-12">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search bonuses" className="flex-1 min-w-[220px] bg-white/5 text-white placeholder:text-blue-200/60 rounded-md px-3 py-2 border border-white/10" />
        <select value={sort} onChange={e=>setSort(e.target.value)} className="bg-white/5 text-white rounded-md px-3 py-2 border border-white/10">
          <option value="featured">Featured</option>
          <option value="amount_desc">Amount (High to Low)</option>
          <option value="amount_asc">Amount (Low to High)</option>
          <option value="latest">Latest</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Tag onClick={()=>setCategory('')} active={!category}>All</Tag>
        {categories.map(c => (
          <Tag key={c} onClick={()=>setCategory(c)} active={category===c}>{c}</Tag>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(i => (
          <BonusCard key={i.id} item={i} />
        ))}
      </div>
    </section>
  )
}
