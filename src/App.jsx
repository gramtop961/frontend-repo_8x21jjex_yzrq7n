import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="dining" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop" alt="Dining at KEF" className="rounded-2xl shadow-xl w-full object-cover h-80"/>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Arctic produce. Fire and ice.</h2>
                <p className="mt-4 text-gray-700 leading-8">From langoustine and Arctic char to geothermal-baked rye, our kitchen celebrates the wild North—in a dining room washed with Atlantic light.</p>
                <div className="mt-6 flex gap-3">
                  <a href="#book" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md shadow hover:shadow-lg hover:-translate-y-0.5 transition-all">Reserve a table</a>
                  <a href="#" className="px-6 py-3 rounded-md border border-gray-300 bg-white text-gray-900 hover:bg-gray-50">View menu</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="spa" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Geothermal spa ritual</h2>
                <p className="mt-4 text-gray-700 leading-8">Steam, soak, and reset in mineral-rich waters under open skies. Contrast therapy moves from cedar sauna to cold plunge to private hot pool—restoring deep balance.</p>
                <a href="#book" className="inline-block mt-6 px-6 py-3 rounded-md bg-gray-900 text-white hover:shadow-lg hover:-translate-y-0.5 transition-all">Spa appointments</a>
              </div>
              <div className="order-1 lg:order-2">
                <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2000&auto=format&fit=crop" alt="Spa at KEF" className="rounded-2xl shadow-xl w-full object-cover h-80"/>
              </div>
            </div>
          </div>
        </section>
        <Showcase />
        <section id="book" className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-semibold">Arrive, exhale, and begin.</h3>
                <p className="mt-4 text-gray-300">Tell us when you land at KEF, and we’ll align transfers, dining, and spa to your rhythm.</p>
              </div>
              <form className="bg-white/10 backdrop-blur rounded-xl p-4 sm:p-6 grid sm:grid-cols-3 gap-3">
                <input type="date" className="w-full px-3 py-2 rounded-md bg-white text-gray-900" placeholder="Check-in"/>
                <input type="date" className="w-full px-3 py-2 rounded-md bg-white text-gray-900" placeholder="Check-out"/>
                <select className="w-full px-3 py-2 rounded-md bg-white text-gray-900">
                  <option>2 Guests</option>
                  <option>1 Guest</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
                <button type="button" className="sm:col-span-3 bg-white text-gray-900 font-semibold px-4 py-2 rounded-md hover:bg-gray-100">Check availability</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
