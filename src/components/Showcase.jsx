export default function Showcase() {
  return (
    <section id="experiences" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Northern nights. Ocean mornings.</h2>
            <p className="text-gray-700 leading-8">Wake to Atlantic light over black-sand shores. Spend afternoons between glacier lagoons and steaming valleys. Return to fireside tastings and a private geothermal soak beneath the stars.</p>
            <ul className="space-y-3 text-gray-800">
              <li className="flex gap-3"><span className="text-gray-400">—</span> Private super-jeep tours to volcano fields</li>
              <li className="flex gap-3"><span className="text-gray-400">—</span> Chef’s table with wine pairings</li>
              <li className="flex gap-3"><span className="text-gray-400">—</span> In-suite spa rituals and cold plunges</li>
            </ul>
            <a href="#book" className="inline-block mt-4 px-6 py-3 rounded-md bg-gray-900 text-white hover:shadow-lg hover:-translate-y-0.5 transition-all">Plan your itinerary</a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="rounded-xl object-cover h-56 sm:h-72 w-full" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop" alt="Aurora"/>
            <img className="rounded-xl object-cover h-56 sm:h-72 w-full" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop" alt="Spa"/>
            <img className="rounded-xl object-cover h-56 sm:h-72 w-full" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEaW5pbmd8ZW58MHwwfHx8MTc2MzM2OTcxNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Dining"/>
            <img className="rounded-xl object-cover h-56 sm:h-72 w-full" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop" alt="Coast"/>
          </div>
        </div>
      </div>
    </section>
  )
}