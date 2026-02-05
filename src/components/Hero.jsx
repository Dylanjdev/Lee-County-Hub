// src/components/Hero.jsx
import { useMission } from './Mission'

export default function Hero() {
  const { setIsOpen } = useMission()

  return (
    <section id="about" className="relative">
      {/* glowing gradient background */}
      <div
        className="absolute inset-0 -z-10 opacity-40 blur-2xl"
        aria-hidden="true"
      >
        <div className="mx-auto h-48 w-3/4 bg-[radial-gradient(circle_at_20%_20%,rgba(75,123,236,0.35),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(75,123,236,0.2),transparent_60%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 pt-10 pb-6">
        <div className="glass rounded-2xl border border-white/10 p-6 md:p-10 shadow-soft animate-slideIn">
          {/* Top bar with links */}
          <div className="flex items-center gap-4 text-sm pb-6 border-b border-white/10">
            <a href="#about" className="text-primary hover:text-primary/80">
              About
            </a>
            <button onClick={() => setIsOpen(true)} className="text-white/60 hover:text-white">
              Mission
            </button>
            <span className="ml-auto text-xs text-white/50">
              Lee Co •{" "}
              <a
                className="underline hover:no-underline"
                href="mailto:dylanjsmith.dev@gmail.com"
              >
                Email
              </a>
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] mt-6">
            Lee County, Virginia <br className="hidden md:block" /> Local Business Directory
          </h1>
          <p className="text-white/70 mt-4 md:text-lg max-w-2xl">
            Your trusted directory for local businesses in Lee County, VA. Discover services, shops, and professionals supporting our community with quality work and modern digital presence.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="#directory"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10"
            >
              Explore Local Businesses
            </a>
            <a
              href="https://smithdigitals.com/#/contact"
              target="_blank"
              rel="noopener"
              className="px-4 py-2 rounded-xl bg-primary text-white hover:bg-primary/90"
            >
              Get Your Business Online
            </a>
          </div>

          {/* Owner info */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
            <img
              src={`${import.meta.env.BASE_URL}Dylan.jpg`}
              alt="Dylan Smith"
              className="h-14 w-14 rounded-full ring-2 ring-white/10 object-cover"
            />
            <div>
              <p className="font-medium">I'm Dylan Smith</p>
              <p className="text-white/60 text-sm max-w-2xl">
                My goal is to help Lee County businesses look as good online as
                they do in person. If I built and manage your site, you'll automatically be featured. 
                If I didn't build your site, you can still get featured for just $25/month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
