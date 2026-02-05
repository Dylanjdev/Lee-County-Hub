import { businesses } from '../data/businesses'
import { BusinessCard } from './BusinessCard'


export default function Featured() {
const featured = businesses.filter(b => b.featured)
return (
<section id="featured" className="max-w-7xl mx-auto px-4 py-10">
<h2 className="text-2xl font-semibold mb-4">Featured Lee County Businesses</h2>
<div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
{featured.map(b => <BusinessCard key={b.id} biz={b} />)}
</div>
</section>
)
}