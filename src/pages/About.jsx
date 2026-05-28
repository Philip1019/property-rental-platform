import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function About() {

  return (

    <>

      <Navbar />

      {/* HERO SECTION */}

      <section className="bg-black text-white py-24 px-6 text-center">

        <h1 className="text-5xl md:text-7xl font-bold">

          About RentEase

        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-300">

          RentEase is a modern property rental
          platform helping clients discover
          beautiful apartments, villas and homes
          while helping property owners connect
          with trusted renters.

        </p>

      </section>

      {/* MISSION */}

      <section className="py-20 px-6 bg-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
            alt="Apartment"
            className="rounded-2xl shadow-lg"
          />

          <div>

            <h2 className="text-5xl font-bold">

              Our Mission

            </h2>

            <p className="mt-8 text-gray-600 leading-relaxed text-lg">

              We aim to simplify property rentals
              by creating a secure and easy-to-use
              platform where users can search,
              book and manage rental properties
              effortlessly.

            </p>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="bg-gray-100 py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-bold">

            How It Works

          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-10 rounded-2xl shadow-lg">

              <h3 className="text-3xl font-bold">

                1. Search

              </h3>

              <p className="mt-6 text-gray-600">

                Browse available rental
                properties based on location,
                price and preference.

              </p>

            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg">

              <h3 className="text-3xl font-bold">

                2. Book

              </h3>

              <p className="mt-6 text-gray-600">

                Select your preferred dates and
                reserve your ideal property.

              </p>

            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg">

              <h3 className="text-3xl font-bold">

                3. Move In

              </h3>

              <p className="mt-6 text-gray-600">

                Enjoy a seamless rental
                experience with comfort and
                convenience.

              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>

  )

}

export default About