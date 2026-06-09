function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-bold">
            Stay<span className="text-yellow-400">Ease</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Find your perfect home with ease and comfort.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">
            Company
          </h3>

          <ul className="space-y-2 text-gray-400">

            <li>About Us</li>
            <li>Properties</li>
            <li>Contact</li>
            <li>Careers</li>

          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">
            Policies
          </h3>

          <ul className="space-y-2 text-gray-400">

            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
            <li>Cookie Policy</li>

          </ul>
        </div>

        <div>

          <h3 className="font-bold text-xl mb-4">
            Contact
          </h3>

          <ul className="space-y-2 text-gray-400">

            <li>support@stayease.com</li>
            <li>+234 901 234 5678</li>
            <li>Lagos, Nigeria</li>

          </ul>

        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-6 text-gray-500">

        © 2026 StayEase. All Rights Reserved.

      </div>

    </footer>
  )
}

export default Footer