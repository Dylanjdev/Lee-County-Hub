import { useMemo, useState } from 'react'
import { businesses } from '../data/businesses'
import { BusinessCard } from './BusinessCard'


export default function Directory() {
const [q, setQ] = useState('')
const [cat, setCat] = useState('All')
const cats = useMemo(() => ['All', ...new Set(businesses.map(b => b.category))], [])


const items = businesses.filter(b => {
const matchQ = `${b.name} ${b.short} ${b.category}`.toLowerCase().includes(q.toLowerCase())
const matchC = cat === 'All' || b.category === cat
return matchQ && matchC
})


return (
<section id="directory" className="max-w-7xl mx-auto px-4 py-10">
<h2 className="text-3xl font-semibold mb-6 text-center">Browse All Local Lee County Businesses</h2>
<div className="flex flex-col md:flex-row gap-3 md:items-center" role="search">
<input 
  value={q} 
  onChange={e => setQ(e.target.value)} 
  placeholder="Search Lee County businesses..." 
  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20" 
  aria-label="Search businesses by name, description, or category"
  type="search"
/>
<div className="flex flex-wrap gap-2" role="group" aria-label="Filter businesses by category">
{cats.map(c => (
<button 
  key={c} 
  onClick={() => setCat(c)} 
  className={`px-3 py-1.5 rounded-xl border transition-colors ${cat===c? 'bg-primary text-white border-primary/60' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
  aria-pressed={cat === c}
  aria-label={`Filter by ${c} category`}
>{c}</button>
))}
</div>
</div>

<p className="sr-only" aria-live="polite" aria-atomic="true">
  {items.length} {items.length === 1 ? 'business' : 'businesses'} found
</p>

<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
{items.map(b => <BusinessCard key={b.id} biz={b} />)}
</div>
</section>
)
}