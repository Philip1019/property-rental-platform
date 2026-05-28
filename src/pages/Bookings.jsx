import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Bookings() {

  // GET BOOKINGS
  const currentUser =
  JSON.parse(localStorage.getItem("currentUser"))

const allBookings =
  JSON.parse(localStorage.getItem("bookings")) || []

const bookings = allBookings.filter(
  (booking) =>
    booking.user === currentUser?.email
)

  return (

    <>

      <Navbar />

      <section className="min-h-screen bg-gray-100 py-16 px-6">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold mb-10">

            My Bookings

          </h1>

          {/* NO BOOKINGS */}
          {bookings.length === 0 ? (

            <div className="bg-white p-10 rounded-2xl shadow-lg text-center">

              <p className="text-xl text-gray-600">

                No bookings yet.

              </p>

            </div>

          ) : (

            <div className="grid gap-8">

              {bookings.map((booking, index) => (

                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                >

                  <img
                    src={booking.image}
                    alt={booking.title}
                    className="w-full h-72 object-cover"
                  />

                  <div className="p-6">

                    <h2 className="text-3xl font-bold">

                      <div className="mt-4 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">

  Confirmed Booking

</div>

                      {booking.title}

                    </h2>

                    <p className="text-gray-500 mt-2">

                      {booking.location}

                    </p>

                    <p className="text-blue-500 font-bold text-2xl mt-4">

                      {booking.price}

                    </p>

                    <div className="mt-6">

                      <p>

                        <span className="font-bold">
                          Check In:
                        </span>{" "}

                        {booking.checkIn}

                      </p>

                      <p className="mt-2">

                        <span className="font-bold">
                          Check Out:
                        </span>{" "}

                        {booking.checkOut}

                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </section>

      <Footer />

    </>

  )

}

export default Bookings