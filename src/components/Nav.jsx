import { useState } from 'react'


export default function Nav() {
const [open, setOpen] = useState(false)

const closeMenu = () => setOpen(false)

return (
<header className="sticky top-0 z-50 bg-dark/95 backdrop-blur-lg border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
<a href="#" className="flex items-center gap-3 group">
<span className="inline-flex h-9 w-9 rounded-2xl bg-primary/20 items-center justify-center ring-1 ring-primary/40 group-hover:scale-105 transition">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
<path d="M12 2l2.39 6.57L21 11l-6.1 2.43L12 20l-2.9-6.57L3 11l6.61-2.43L12 2z" />
</svg>
</span>
<div>
<p className="font-semibold leading-tight">Lee County Hub</p>
<p className="text-xs text-white/60 -mt-0.5">by Smith Digitals</p>
</div>
</a>


<button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 hover:border-primary/50 transition">
<span className="text-sm">Menu</span>
<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
</button>


<nav className="hidden md:flex items-center gap-1">
<a href="#directory" className="px-4 py-2 rounded-xl hover:bg-white/5">Directory</a>
<a href="#resources" className="px-4 py-2 rounded-xl hover:bg-white/5">Resources</a>
<a href="#how" className="px-4 py-2 rounded-xl hover:bg-white/5">How it works</a>
<a href="https://smithdigitals.com/#/contact" target="_blank" rel="noopener" className="px-4 py-2 rounded-xl hover:bg-white/5">Add your business</a>
<a href="https://smithdigitals.com/#/contact" target="_blank" rel="noopener" className="px-4 py-2 rounded-xl bg-primary/10 text-primary border border-primary/30">Contact</a>
</nav>
</div>


{open && (
<div className="md:hidden border-t border-white/10 bg-dark/95">
<div className="max-w-7xl mx-auto px-4 py-3 grid gap-2">
<a href="#directory" onClick={closeMenu} className="px-4 py-2 rounded-xl hover:bg-white/5">Directory</a>
<a href="#resources" onClick={closeMenu} className="px-4 py-2 rounded-xl hover:bg-white/5">Resources</a>
<a href="#how" onClick={closeMenu} className="px-4 py-2 rounded-xl hover:bg-white/5">How it works</a>
<a href="https://smithdigitals.com/#/contact" onClick={closeMenu} target="_blank" rel="noopener" className="px-4 py-2 rounded-xl hover:bg-white/5">Add your business</a>
<a href="https://smithdigitals.com/#/contact" onClick={closeMenu} target="_blank" rel="noopener" className="px-4 py-2 rounded-xl bg-primary/10 text-primary border border-primary/30">Contact</a>
</div>
</div>
)}
</header>
)
}