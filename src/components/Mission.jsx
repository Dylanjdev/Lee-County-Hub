// src/components/Mission.jsx
import { useState, createContext, useContext } from 'react'

const MissionContext = createContext()

export function useMission() {
  return useContext(MissionContext)
}

export function MissionProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MissionContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MissionContext.Provider>
  )
}

export default function Mission() {
  const { isOpen, setIsOpen } = useMission()

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-8 text-center border-t border-white/10">
        <button 
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 transition"
        >
          View Our Mission
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setIsOpen(false)}>
          <div className="bg-[#0b0f19] border border-white/10 rounded-2xl p-8 max-w-2xl w-full shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-semibold text-primary">Our Mission</h2>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white text-2xl">&times;</button>
            </div>
            <p className="text-white/70 leading-relaxed">
              Our mission is to bring every Lee County business online — beautifully,
              affordably, and locally. <br /><br /> Each site we build is designed to help
              your customers find you faster, connect easier, and grow your presence
              in the digital world.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
