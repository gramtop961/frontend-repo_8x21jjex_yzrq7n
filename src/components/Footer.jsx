export default function Footer() {
  return (
    <footer id="location" className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900">KEF</h4>
            <p className="mt-3 text-gray-700">Vatnsnesvegur, 230 Reykjanesbær, Iceland</p>
            <p className="mt-1 text-gray-700">+354 000 0000</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900">Hotel</h5>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>Suites & Residences</li>
              <li>Dining</li>
              <li>Spa & Wellness</li>
              <li>Offers</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900">Experiences</h5>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>Northern Lights</li>
              <li>Glacier Adventures</li>
              <li>Helicopter Tours</li>
              <li>Blue Lagoon</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900">Stay in touch</h5>
            <form className="mt-3 flex gap-2">
              <input type="email" placeholder="Email address" className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"/>
              <button className="px-4 py-2 rounded-md bg-gray-900 text-white">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} KEF Hotel. All rights reserved.</p>
          <div className="flex gap-4">
            <a>Privacy</a>
            <a>Terms</a>
            <a>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}