import { useState } from 'react'
import { Menu, X, Phone, Calendar, MapPin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 shadow-inner" />
            <span className="text-xl font-semibold tracking-wide">KEF</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#suites" className="hover:text-gray-900 transition-colors">Suites</a>
            <a href="#dining" className="hover:text-gray-900 transition-colors">Dining</a>
            <a href="#spa" className="hover:text-gray-900 transition-colors">Spa</a>
            <a href="#experiences" className="hover:text-gray-900 transition-colors">Experiences</a>
            <a href="#location" className="hover:text-gray-900 transition-colors flex items-center gap-1"><MapPin className="h-4 w-4"/>Location</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+3540000000" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900"><Phone className="h-4 w-4"/> +354 000 0000</a>
            <a href="#book" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md shadow hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all"><Calendar className="h-4 w-4"/> Book now</a>
          </div>

          <button aria-label="Toggle menu" className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-3 text-gray-700">
            <a href="#suites" className="block">Suites</a>
            <a href="#dining" className="block">Dining</a>
            <a href="#spa" className="block">Spa</a>
            <a href="#experiences" className="block">Experiences</a>
            <a href="#location" className="block">Location</a>
            <a href="#book" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md"><Calendar className="h-4 w-4"/> Book now</a>
          </div>
        </div>
      )}
    </header>
  )
}
