import { Link } from "react-router-dom"
import { useState } from "react"
function PropertyCard(props) {
  const favorites =

  JSON.parse(
  localStorage.getItem("favorites")
  ) || []

  const [isFavorite, setIsFavorite] =

  useState(

  favorites.some(

  (item) => item.id === props.id

  )

  )

  const handleFavorite = () => {

  // GET EXISTING FAVORITES
  const existingFavorites =
    JSON.parse(localStorage.getItem("favorites")) || []

  // CHECK IF ALREADY EXISTS
  const alreadyExists =
    existingFavorites.find(
      (item) => item.id === props.id
    )

  if (alreadyExists) {

    // REMOVE FAVORITE
    const updatedFavorites =
      existingFavorites.filter(
        (item) => item.id !== props.id
      )

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    )

    alert("Removed from favorites")
    setIsFavorite(false)

  } else {

    // ADD FAVORITE
    const newFavorite = {

      id: props.id,

      title: props.title,

      location: props.location,

      price: props.price,

      image: props.image,

    }

    localStorage.setItem(

      "favorites",

      JSON.stringify([
        ...existingFavorites,
        newFavorite
      ])

    )

    alert("Added to favorites")
    setIsFavorite(true)

  }

  // REFRESH PAGE
  window.location.reload()

}

  return (

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

      {/* PROPERTY IMAGE */}
      <img
        src={props.image}
        alt={props.title}
        className="w-full h-64 object-cover"
      />

      {/* PROPERTY DETAILS */}
      <div className="p-5">

        <div className="mt-4">

          <button

            onClick={handleFavorite}

            className={`

              w-full

              py-3

              rounded-lg

              transition

              duration-300

              font-semibold

              ${

              isFavorite

              ?

              "bg-red-500 hover:bg-red-600 text-white"

              :

              "bg-pink-500 hover:bg-pink-600 text-white"

              }

            `}

          >

            {

              isFavorite

              ?

              "Remove From Favorites"

              :

              "Add To Favorites"

            }

          </button>

        </div>

        <h2 className="text-2xl font-bold">
          {props.title}
        </h2>

        <p className="text-gray-500 mt-2">
          {props.location}
        </p>

        <p className="text-blue-500 font-bold text-xl mt-3">
          {props.price}
        </p>

        <Link to={`/properties/${props.id}`}>

  <button className="mt-5 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">

    View Details

  </button>

</Link>

      </div>

    </div>

  )

}

export default PropertyCard