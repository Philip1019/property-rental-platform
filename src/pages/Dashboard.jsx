import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Dashboard() {

  const user =
    JSON.parse(localStorage.getItem("currentUser"))

  return (

    <>

      <Navbar />

      <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-2xl text-center">

          <h1 className="text-5xl font-bold">

            Welcome,
            <span className="text-blue-500">
              {" "}{user?.name}
            </span>

          </h1>

          <p className="text-gray-600 mt-6 text-lg">

            This is your dashboard.

          </p>

        </div>

      </section>

      <Footer />

    </>

  )

}

export default Dashboard