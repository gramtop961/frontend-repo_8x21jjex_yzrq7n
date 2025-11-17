import { ChevronRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute -z-10 inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.15)_0%,rgba(99,102,241,0.15)_45%,rgba(255,255,255,0)_100%)]" />
        <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1980&auto=format&fit=crop" alt="Icelandic landscape" className="w-full h-[90vh] object-cover opacity-80"/>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-1 text-amber-500 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-500"/>) }
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
            KEF — Iceland's Premier Five-Star Hideaway
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-8">
            Snow-dusted horizons, geothermal warmth, and effortless luxury. Arrive minutes from KEF airport and step into a world of calm Scandinavian design and world-class service.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#book" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md shadow hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all">
              Book your stay <ChevronRight className="h-5 w-5"/>
            </a>
            <a href="#suites" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-gray-300 bg-white text-gray-900 hover:bg-gray-50">
              Explore suites
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}