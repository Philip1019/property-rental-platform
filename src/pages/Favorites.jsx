import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PropertyCard from "../components/PropertyCard"

function Favorites() {

  // GET FAVORITES
  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || []

  return (

    <>

      <Navbar />

      <section className="min-h-screen bg-gray-100 py-16 px-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold mb-10">

            Favorite Properties

          </h1>

          {favorites.length === 0 ? (

            <div className="bg-white p-10 rounded-2xl shadow-lg text-center">

              <h2 className="text-3xl font-bold">

                No Favorites Yet

              </h2>

              <p className="text-gray-500 mt-4">

                Save properties you love ❤️

              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

              {favorites.map((property) => (

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

          )}

        </div>

      </section>

      <Footer />

    </>

  )

}

export default Favorites