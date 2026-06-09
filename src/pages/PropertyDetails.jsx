import {
  useParams,
  useNavigate
} from "react-router-dom"

import { useState } from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import properties from "../data/properties"

import propertiesData from "../data/properties"

function PropertyDetails() {

    // GET URL PARAMETER
    const { id } = useParams()

    const navigate = useNavigate()

    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")

    const adminProperties =
  JSON.parse(localStorage.getItem("properties")) || []

const properties = [
  ...propertiesData,
  ...adminProperties
]

    // FIND PROPERTY
    const property = properties.find(
        (property) => property.id === Number(id)
    )

    const handleBooking = () => {

  // CHECK LOGIN
  const currentUser =
    JSON.parse(localStorage.getItem("currentUser"))

  if (!currentUser) {

    alert("Please login first!")

    navigate("/login")

    return

  }

  // VALIDATE DATES
  if (!checkIn || !checkOut) {

    alert("Please select dates!")

    return

  }

  // GET EXISTING BOOKINGS
  const existingBookings =
    JSON.parse(localStorage.getItem("bookings")) || []

  // CREATE BOOKING OBJECT
  const newBooking = {

    title: property.title,

    location: property.location,

    price: property.price,

    image: property.image,

    checkIn,

    checkOut,

    user: currentUser.email,

  }

  // SAVE BOOKINGS
  localStorage.setItem(

    "bookings",

    JSON.stringify([
      ...existingBookings,
      newBooking
    ])

  )

  alert("Booking Successful!")

  navigate("/bookings")

}

    if (!property) {

        return (

            <div className="min-h-screen flex items-center justify-center">

                <h1 className="text-4xl font-bold">
                    Property Not Found
                </h1>

            </div>

        )

    }

    return (

        <>

            <Navbar />

            <section className="min-h-screen bg-gray-100 py-16 px-6">

                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

                    {/* PROPERTY IMAGE */}
                    <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
                    />

                    {/* PROPERTY DETAILS */}
                    <div className="p-10">

                        <h1 className="text-5xl font-bold">
                            {property.title}
                        </h1>

                        <p className="text-gray-500 text-xl mt-4">
                            {property.location}
                        </p>

                        <p className="text-blue-500 text-3xl font-bold mt-6">
                            {property.price}
                        </p>

                        <p className="mt-8 text-gray-700 leading-relaxed text-lg">

                            This beautiful rental property offers
                            modern architecture, spacious rooms,
                            luxury finishing and a comfortable
                            living experience perfect for families,
                            professionals and travelers.

                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mt-10">

  <div>

    <label className="font-bold block mb-2">

      Check In Date

    </label>

    <input
      type="date"
      value={checkIn}
      onChange={(e) =>
        setCheckIn(e.target.value)
      }
      className="w-full border p-4 rounded-lg"
    />

  </div>

  <div>

    <label className="font-bold block mb-2">

      Check Out Date

    </label>

    <input
      type="date"
      value={checkOut}
      onChange={(e) =>
        setCheckOut(e.target.value)
      }
      className="w-full border p-4 rounded-lg"
    />

  </div>

</div>
                        {/* BUTTONS */}
                        <div className="flex gap-6 mt-10">

                            <button onClick={handleBooking} className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition">

                                Book Now

                            </button>

                            <button className="border border-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition">

                                Contact Owner

                            </button>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </>

    )

}

export default PropertyDetails