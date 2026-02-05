// src/components/HowItWorks.jsx
export default function HowItWorks() {
  return (
    <section id="how" className="max-w-5xl mx-auto px-4 py-16">
      <div className="glass rounded-2xl border border-white/10 p-6 md:p-10">
        <h2 className="text-3xl font-semibold mb-6 text-primary">How It Works</h2>
        
        <div className="space-y-6 text-white/70">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Get Found on Google</h3>
            <p className="leading-relaxed">
              When someone searches for services in Lee County, our directory ranks high in search results. 
              Being listed here means your business gets discovered by potential customers who are actively 
              looking for what you offer.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Build Your Online Presence</h3>
            <p className="leading-relaxed">
              Quality backlinks from a trusted local directory boost your business's credibility with search engines. 
              This helps your own website rank higher in search results and establishes your business as a 
              legitimate local provider.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Local SEO Power</h3>
            <p className="leading-relaxed">
              Our directory is optimized for Lee County searches. When locals search for businesses near them, 
              they find you here. It's like having a prime spot in the digital main street of Lee County, without 
              the overhead.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Featured Listings Stand Out</h3>
            <p className="leading-relaxed">
              Upgrade to a featured listing for just $25/month to appear at the top of the directory with 
              enhanced visibility. Get noticed first by potential customers browsing our hub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
