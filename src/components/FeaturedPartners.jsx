import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function PartnerCard({ p }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
      <img src={p.logo_url || '/placeholder-partner.svg'} alt={p.name} className="h-12 w-12 rounded"/>
      <div className="flex-1">
        <p className="text-white font-semibold">{p.name}</p>
        <p className="text-blue-200 text-sm">Rating {p.rating?.toFixed?.(1) || '—'} / 5</p>
      </div>
      <a href={`/bonuses?partner=${p.slug}`} className="text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md px-3 py-2">View Offers</a>
    </div>
  )
}

export default function FeaturedPartners() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch(`${BACKEND}/api/partners?featured=true`).then(r=>r.json()).then(setItems).catch(()=>{})
  }, [])

  if (!items.length) return null

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-white text-2xl font-bold mb-4">Featured Partners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((p)=> <PartnerCard key={p.id} p={p} />)}
      </div>
    </section>
  )
}
