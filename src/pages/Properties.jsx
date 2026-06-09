import { useState } from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PropertyCard from "../components/PropertyCard"

import propertiesData from "../data/properties"

function Properties() {

  const adminProperties =
  JSON.parse(localStorage.getItem("properties")) || []

const properties = [
  ...propertiesData,
  ...adminProperties
]

  const [search, setSearch] = useState("")
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] = useState("")

  const filteredProperties = properties.filter(
  (property) => {

    const matchesSearch =
      property.title
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesLocation =
      location === "" ||
      property.location
        .toLowerCase()
        .includes(location.toLowerCase())

    let matchesPrice = true

    if (priceRange === "low") {

      matchesPrice =
        parseInt(property.price.replace(/\D/g, "")) < 1000

    }

    if (priceRange === "medium") {

      const price =
        parseInt(property.price.replace(/\D/g, ""))

      matchesPrice =
        price >= 1000 && price <= 2500

    }

    if (priceRange === "high") {

      matchesPrice =
        parseInt(property.price.replace(/\D/g, "")) > 2500

    }    

       return (
        matchesSearch &&
        matchesLocation &&
        matchesPrice
      )

      }
    )
  return (

    <>

      <Navbar />

      <section className="min-h-screen bg-gray-100 py-16 px-6">

        {/* PAGE TITLE */}
        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold">
            Available Properties
          </h1>

          <p className="text-gray-600 mt-4 text-lg">

            Explore our amazing rental listings

          </p>

        </div>

        {/* SEARCH & FILTER */}

<div className="max-w-5xl mx-auto mb-12 grid md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-6">

  {/* SEARCH INPUT */}
  <input
    type="text"
    placeholder="Search properties..."
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
    className="border p-4 rounded-lg w-full"
  />

  {/* LOCATION FILTER */}
  <select
    value={location}
    onChange={(e) =>
      setLocation(e.target.value)
    }
    className="border p-4 rounded-lg w-full"
  >

    <option value="">
      All Locations
    </option>

    <option value="Lagos">
      Lagos
    </option>

    <option value="Abuja">
      Abuja
    </option>

    <option value="Port Harcourt">
      Port Harcourt
    </option>

    <option value="Ibadan">
      Ibadan
    </option>

    <option value="Enugu">
      Enugu
    </option>

  </select>

  <select
  value={priceRange}
  onChange={(e) =>
    setPriceRange(e.target.value)
  }
  className="border p-4 rounded-lg w-full"
>

  <option value="">
    All Prices
  </option>

  <option value="low">
    Below $1000
  </option>

  <option value="medium">
    $1000 - $2500
  </option>

  <option value="high">
    Above $2500
  </option>

</select>

</div>

        {/* PROPERTY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {filteredProperties.length === 0 && (

          <div className="col-span-full bg-white p-10 rounded-2xl shadow-lg text-center">

            <h2 className="text-3xl font-bold">

              No Properties Found

            </h2>

            <p className="text-gray-500 mt-4">

              Try another search or location.

            </p>

          </div>  

)}
          {filteredProperties.map((property) => (

            <PropertyCard

              key={property.id}

              id={property.id}

              title={property.title}

              location={property.location}

              price={property.price}

              image={property.image}

              

            />

          ))}

        </div>

      </section>

      <Footer />

    </>

  )

}

export default Properties