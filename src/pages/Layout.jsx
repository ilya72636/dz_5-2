import { Outlet } from "react-router-dom"

import NavBar from "../component/NavBar"

const Layout = () => {
  return (
    <div className="App">
        <header><NavBar /></header>
        <main><Outlet /></main>
        <footer>Geeks 2024</footer>
    </div>
  )
}
export default Layout