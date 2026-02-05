export function BusinessCard({ biz }) {
return (
<div className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition p-5 shadow-soft">
<div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl mb-3">{biz.icon}</div>
<h3 className="font-semibold">{biz.name}</h3>
<p className="text-white/60 text-sm">{biz.short}</p>

{(biz.phone || biz.email || biz.mission) && (
<div className="mt-4 pt-4 border-t border-white/10 space-y-2">
{biz.phone && <p className="text-sm"><span className="text-white/60">Phone:</span> <a href={`tel:${biz.phone}`} className="hover:text-primary">{biz.phone}</a></p>}
{biz.email && <p className="text-sm"><span className="text-white/60">Email:</span> <a href={`mailto:${biz.email}`} className="hover:text-primary">{biz.email}</a></p>}
{biz.mission && <p className="text-sm text-white/80 mt-3">{biz.mission}</p>}
</div>
)}

{biz.url && <a href={biz.url} target="_blank" className="mt-4 inline-flex px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-sm">Visit Site</a>}
</div>
)
}