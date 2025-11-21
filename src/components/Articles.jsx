import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ArticleCard({ a }) {
  return (
    <Link to={`/articles/${a.slug}`} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-colors">
      <img src={a.cover_image || '/placeholder-article.jpg'} alt={a.title} className="h-40 w-full object-cover"/>
      <div className="p-4">
        <div className="flex gap-2 mb-2">
          {(a.tags||[]).slice(0,3).map(t => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-blue-100">{t}</span>
          ))}
        </div>
        <h3 className="text-white font-semibold">{a.title}</h3>
        <p className="text-blue-200 text-sm line-clamp-2">{a.excerpt}</p>
      </div>
    </Link>
  )
}

export function ArticlesGrid() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch(`${BACKEND}/api/articles`).then(r=>r.json()).then(setItems).catch(()=>{})
  }, [])

  return (
    <section id="articles" className="relative mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-white text-2xl font-bold mb-4">Latest Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((a)=> <ArticleCard key={a.id} a={a} />)}
      </div>
    </section>
  )
}

export function ArticlePage({ slug }) {
  const [article, setArticle] = useState(null)
  useEffect(() => {
    fetch(`${BACKEND}/api/articles/${slug}`).then(r=>r.json()).then(setArticle).catch(()=>{})
  }, [slug])

  if (!article) return (
    <div className="mx-auto max-w-3xl px-4 py-12 text-blue-100">Loading...</div>
  )

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <img src={article.cover_image || '/placeholder-article.jpg'} alt={article.title} className="w-full h-64 object-cover rounded-xl border border-white/10" />
      <h1 className="mt-6 text-3xl text-white font-extrabold">{article.title}</h1>
      <div className="mt-2 flex gap-2">
        {(article.tags||[]).map(t => (
          <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-blue-100">{t}</span>
        ))}
      </div>
      <article className="prose prose-invert mt-6 max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  )
}
