import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const handleLogout = () => {

    localStorage.removeItem("currentUser")

    window.location.href = "/"

  }
  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/">

          <h1 className="text-3xl font-extrabold tracking-wide">

            Stay<span className="text-yellow-400">Ease</span>

          </h1>

        </Link>

        <div className="hidden md:flex gap-8 font-medium">
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-300">
            Home
          </Link>



          <Link
            to="/properties"
            className="hover:text-yellow-300 transition duration-300"
          >
            Properties
          </Link>


          <Link
            to="/about"
            className="hover:text-yellow-300 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-yellow-300 transition duration-300"
          >
            Contact
          </Link>


          <Link
            to="/bookings"
            className="hover:text-yellow-300 transition duration-300"
          >
            Bookings
          </Link>



          <Link
            to="/favorites"
            className="hover:text-yellow-300 transition duration-300"
          >
            Favorites
          </Link>



          {

            currentUser?.email ===

            "admin@stayease.com"

            &&

            (

              <Link

                to="/admin"

                className="hover:text-yellow-300"

              >

                Admin

              </Link>

            )

          }






        </div>

        <div className="flex items-center gap-4">

          {currentUser ? (

            <>

              <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold">

                {currentUser.name}

              </button>

              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded-lg"
              >

                Logout

              </button>

            </>

          ) : (

            <>

              <Link to="/login">

                <button className="px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-900 transition">

                  Login

                </button>

              </Link>

              <Link to="/register">

                <button className="px-5 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition font-semibold">

                  Register

                </button>

              </Link>

            </>

          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;