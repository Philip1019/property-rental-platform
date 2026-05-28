import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Login() {

  // FORM STATES
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  // LOGIN FUNCTION
  const handleLogin = (e) => {

    e.preventDefault()

    // GET SAVED USER
    const savedUser =
      JSON.parse(localStorage.getItem("user"))

    // VALIDATE USER
    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {

      // SAVE LOGGED-IN USER
      localStorage.setItem(
        "currentUser",
        JSON.stringify(savedUser)
      )

      alert("Login Successful!")

      navigate("/dashboard")

    } else {

      alert("Invalid Credentials")

    }

  }

  return (

    <>

      <Navbar />

      <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

        <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">

          <h1 className="text-4xl font-bold text-center mb-8">

            Login

          </h1>

          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-5"
          >

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="border p-4 rounded-lg"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="border p-4 rounded-lg"
              required
            />

            <button className="bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition">

              Login

            </button>

          </form>

        </div>

      </section>

      <Footer />

    </>

  )

}

export default Login