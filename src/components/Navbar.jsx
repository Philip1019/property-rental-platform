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
    <nav className="flex justify-between items-center p-4 shadow-md bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold">
        StayEase
      </h1>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        

        <Link
          to="/bookings"
          className="hover:text-blue-500 transition"
        >

          Bookings

        </Link>

        

        <Link
          to="/favorites"
          className="hover:text-blue-500 transition"
        >

          Favorites

        </Link>

        

  <Link
    to="/admin"
    className="hover:text-blue-500 transition"
  >

    Admin

  </Link>






      </div>

      <div className="flex gap-4">

  {currentUser ? (

    <>

      <button className="bg-blue-500 text-white px-5 py-2 rounded-lg">

        {currentUser.name}

      </button>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-5 py-2 rounded-lg"
      >

        Logout

      </button>

    </>

  ) : (

    <>

      <Link to="/login">

        <button className="px-5 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition">

          Login

        </button>

      </Link>

      <Link to="/register">

        <button className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">

          Register

        </button>

      </Link>

    </>

  )}

</div>
    </nav>
  );
}

export default Navbar;