import { useState } from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Admin() {

  // FORM STATES
  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  // GET PROPERTIES
  const savedProperties =
    JSON.parse(localStorage.getItem("properties")) || []

  // ADD PROPERTY
  const handleAddProperty = (e) => {

    e.preventDefault()

    const newProperty = {

      id: Date.now(),

      title,

      location,

      price,

      image,

    }

    localStorage.setItem(

      "properties",

      JSON.stringify([
        ...savedProperties,
        newProperty
      ])

    )

    alert("Property Added!")

    window.location.reload()

  }

  // DELETE PROPERTY
  const handleDelete = (id) => {

    const updatedProperties =
      savedProperties.filter(
        (property) => property.id !== id
      )

    localStorage.setItem(
      "properties",
      JSON.stringify(updatedProperties)
    )

    alert("Property Deleted!")

    window.location.reload()

  }

  return (

    <>

      <Navbar />

      <section className="min-h-screen bg-gray-100 py-16 px-6">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl font-bold mb-10">

            Admin Dashboard

          </h1>

          {/* ADD PROPERTY FORM */}

          <div className="bg-white p-10 rounded-2xl shadow-lg mb-16">

            <h2 className="text-3xl font-bold mb-8">

              Add New Property

            </h2>

            <form
              onSubmit={handleAddProperty}
              className="grid md:grid-cols-2 gap-6"
            >

              <input
                type="text"
                placeholder="Property Title"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
                className="border p-4 rounded-lg"
                required
              />

              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
                className="border p-4 rounded-lg"
                required
              />

              <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) =>
                  setPrice(e.target.value)
                }
                className="border p-4 rounded-lg"
                required
              />

              <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) =>
                  setImage(e.target.value)
                }
                className="border p-4 rounded-lg"
                required
              />

              <button className="bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition md:col-span-2">

                Add Property

              </button>

            </form>

          </div>

          {/* PROPERTY LIST */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {savedProperties.map((property) => (

              <div
                key={property.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >

                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5">

                  <h2 className="text-2xl font-bold">

                    {property.title}

                  </h2>

                  <p className="text-gray-500 mt-2">

                    {property.location}

                  </p>

                  <p className="text-blue-500 font-bold text-2xl mt-4">

                    {property.price}

                  </p>

                  <button
                    onClick={() =>
                      handleDelete(property.id)
                    }
                    className="bg-red-500 text-white w-full py-3 rounded-lg mt-6 hover:bg-red-600 transition"
                  >

                    Delete Property

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <Footer />

    </>

  )

}

export default Admin