import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }) {

  // GET CURRENT USER
  const currentUser =
    JSON.parse(localStorage.getItem("currentUser"))

  // CHECK AUTHENTICATION
  if (!currentUser) {

    return <Navigate to="/login" />

  }

  // ALLOW ACCESS
  return children

}

export default ProtectedRoute