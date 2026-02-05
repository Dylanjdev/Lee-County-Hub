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
<div className="flex flex-col md:flex-row gap-3 md:items-center">
<input value={q} onChange={e => setQ(e.target.value)} placeholder="Search Lee County businesses..." className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none" aria-label="Search businesses"/>
<div className="flex flex-wrap gap-2">
{cats.map(c => (
<button key={c} onClick={() => setCat(c)} className={`px-3 py-1.5 rounded-xl border ${cat===c? 'bg-primary text-white border-primary/60' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>{c}</button>
))}
</div>
</div>


<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
{items.map(b => <BusinessCard key={b.id} biz={b} />)}
</div>
</section>
)
}