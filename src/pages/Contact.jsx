import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Contact() {

  return (

    <>

      <Navbar />

      <section className="min-h-screen bg-gray-100 py-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* CONTACT INFO */}

          <div>

            <h1 className="text-5xl font-bold">

              Contact Us

            </h1>

            <p className="mt-8 text-gray-600 text-lg">

              Reach out to us for property
              inquiries, support or partnership
              opportunities.

            </p>

            <div className="mt-10 space-y-6">

              <div>

                <h3 className="font-bold text-2xl">

                  Email

                </h3>

                <p className="text-gray-600 mt-2">

                  support@rentease.com

                </p>

              </div>

              <div>

                <h3 className="font-bold text-2xl">

                  Phone

                </h3>

                <p className="text-gray-600 mt-2">

                  +234 70 756 130 68

                </p>

              </div>

              <div>

                <h3 className="font-bold text-2xl">

                  Office

                </h3>

                <p className="text-gray-600 mt-2">

                  Lead City University, Nigeria

                </p>

              </div>

            </div>

          </div>

          {/* CONTACT FORM */}

          <div className="bg-white p-10 rounded-2xl shadow-lg">

            <form className="flex flex-col gap-6">

              <input
                type="text"
                placeholder="Your Name"
                className="border p-4 rounded-lg"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border p-4 rounded-lg"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="border p-4 rounded-lg"
              ></textarea>

              <button className="bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition">

                Send Message

              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />

    </>

  )

}

export default Contact