import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export const Mainn = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}
