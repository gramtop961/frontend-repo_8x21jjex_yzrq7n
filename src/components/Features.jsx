import { BedDouble, Bath, Mountain, Coffee, Waves, ShieldCheck } from 'lucide-react'

const items = [
  { icon: BedDouble, title: 'Designer suites', desc: 'Minimal Nordic lines, geothermal-heated floors, panoramic glacier or ocean views.' },
  { icon: Bath, title: 'Geothermal spa', desc: 'Outdoor hot pools and private saunas powered by Iceland’s natural energy.' },
  { icon: Coffee, title: 'Michelin-level dining', desc: 'Seasonal tasting menus showcasing Arctic char, langoustine and foraged herbs.' },
  { icon: Waves, title: 'Minutes from KEF', desc: 'Seamless airport transfers. Land, unwind, and be in your suite in under 20 minutes.' },
  { icon: Mountain, title: 'Curated adventures', desc: 'Northern Lights chases, glacier hikes and super-jeep explorations tailored to you.' },
  { icon: ShieldCheck, title: 'Concierge, 24/7', desc: 'Private guides, helicopter charters, wardrobe steam, anything—handled.' },
]

export default function Features() {
  return (
    <section className="py-20 bg-white" id="suites">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Effortless luxury, grounded in nature</h2>
          <p className="mt-4 text-gray-700">A sanctuary of calm textures and Icelandic craftsmanship—designed for deep rest between adventures.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(({icon:Icon, title, desc}) => (
            <div key={title} className="p-6 rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-gray-900 text-white grid place-items-center mb-4">
                <Icon className="h-6 w-6"/>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-700 leading-7">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}