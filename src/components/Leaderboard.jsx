import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Leaderboard() {
  const [period, setPeriod] = useState('weekly')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${BACKEND}/api/leaderboard?period=${period}`).then(r=>r.json()).then(setItems).catch(()=>{})
  }, [period])

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-2xl font-bold">Leaderboard</h2>
        <select value={period} onChange={(e)=>setPeriod(e.target.value)} className="bg-white/5 text-white rounded-md px-3 py-2 border border-white/10">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="all-time">All-time</option>
        </select>
      </div>

      <div className="mt-6 bg-white/5 border border-white/10 rounded-xl divide-y divide-white/10">
        {items.map((u, idx) => (
          <div key={u.id || idx} className="flex items-center gap-4 p-4">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-white font-bold">{idx+1}</div>
            <div className="flex-1">
              <p className="text-white font-semibold">{u.username}</p>
              <p className="text-blue-200 text-sm">Bonuses claimed: {u.bonuses_claimed || 0}</p>
            </div>
            <div className="text-white font-semibold">${u.winnings?.toLocaleString?.() || 0}</div>
          </div>
        ))}
        {items.length === 0 && (
          <div className="p-6 text-blue-200">No entries yet. Check back soon.</div>
        )}
      </div>
    </section>
  )
}
