export default function Footer() {
return (
<footer id="contact" role="contentinfo" className="border-t border-white/10 mt-8">
<div className="max-w-7xl mx-auto px-4 py-8">
<div className="grid md:grid-cols-3 gap-8 mb-6">
<div>
<h3 className="font-semibold text-white mb-2">Lee County Business Hub</h3>
<p className="text-sm text-white/70">Your local directory for businesses serving Lee County, Virginia. Connecting residents with quality local services.</p>
</div>
<nav aria-label="Footer navigation">
<h3 className="font-semibold text-white mb-2">Quick Links</h3>
<div className="flex flex-col gap-2 text-sm text-white/70">
<a href="#directory" className="hover:text-white transition-colors">Browse Directory</a>
<a href="#how" className="hover:text-white transition-colors">How It Works</a>
<a href="https://smithdigitals.com/#/contact" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">List Your Business</a>
</div>
</nav>
<div>
<h3 className="font-semibold text-white mb-2">Contact</h3>
<div className="flex flex-col gap-2 text-sm text-white/70">
<a href="mailto:dylanjsmith.dev@gmail.com" className="hover:text-white transition-colors" aria-label="Email Dylan Smith">dylanjsmith.dev@gmail.com</a>
<a href="tel:+14239231909" className="hover:text-white transition-colors" aria-label="Call (423) 923-1909">(423) 923-1909</a>
<p>Serving Lee County, VA</p>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-6 text-sm text-white/70 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
<p>© {new Date().getFullYear()} Smith Digitals — Lee County Business Hub. All rights reserved.</p>
<p className="text-xs">Built with ❤️ for Lee County, Virginia</p>
</div>
</div>
</footer>
)
}