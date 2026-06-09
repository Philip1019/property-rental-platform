import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import properties from "../data/properties"
import PropertyCard from "../components/PropertyCard"

function Home() {

  return (

    <>
      <Navbar />
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20">

        <motion.div

          initial={{ opacity: 0, y: 100 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

        >


          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">

            Find Your Perfect
            <span className="text-blue-500">
              {" "}Rental Property
            </span>

          </h1>

          <p className="text-base md:text-lg lg:text-xl mt-6 text-gray-600">

            Discover luxury apartments,
            modern villas and affordable homes
            from trusted property owners around the world.

          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <Link to="/properties">

              <button

                className="

                w-full sm:w-auto

                bg-blue-600

                hover:bg-blue-700

                text-white

                px-8

                py-4

                rounded-xl

                font-semibold

                shadow-lg

                transition-all

                duration-300

                hover:scale-105

                "

              >

                Find Properties

              </button>

            </Link>

            <Link to="/about">

              <button

                className="

                w-full sm:w-auto

                border-2

                border-white

                text-white

                hover:bg-white

                hover:text-blue-900

                px-8

                py-4

                rounded-xl

                font-semibold

                transition-all

                duration-300

                hover:scale-105

                "

              >

                Learn More

              </button>

            </Link>

          </div>

        </motion.div>

      </section>

      {/* FEATURED PROPERTIES */}

      <section className="py-20 px-6 bg-gray-100">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold">
            Featured Properties
          </h2>

          <p className="text-gray-600 mt-4 text-lg">

            Discover our most popular rentals

          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {properties
            .filter((property) => property.featured)
            .map((property) => (

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

export default Home