import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Register() {

  // FORM STATES
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  // REGISTER FUNCTION
  const handleRegister = (e) => {

    e.preventDefault()

    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

    if(!passwordRegex.test(password)){

    alert(
    "Password must contain at least:\n\n• 8 characters\n• One uppercase letter\n• One lowercase letter\n• One number"
    )

    return

    }

    // CREATE USER OBJECT
    const userData = {
      name,
      email,
      password,
    }

    // SAVE USER
    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    )

    alert("Registration Successful!")

    // REDIRECT TO LOGIN
    navigate("/login")

  }

  return (

    <>

      <Navbar />

      <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

        <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">

          <h1 className="text-4xl font-bold text-center mb-8">

            Register

          </h1>

          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-5"
          >

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="border p-4 rounded-lg"
              required
            />

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

              Create Account

            </button>

          </form>

        </div>

      </section>

      <Footer />

    </>

  )

}

export default Register