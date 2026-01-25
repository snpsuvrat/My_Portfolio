import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className="w-full bg-sky-500 text-amber-50 border-b-4  px-6 py-4">
      <div className=" mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo / Title */}
        <h1 className="text-2xl md:text-4xl font-bold  hover:text-indigo-950 transition
">Portfolio</h1>

        {/* Nav Links */}
        <nav className="flex gap-6 text-lg md:text-2xl">
          <Link
            to="/"
            className="hover:text-indigo-950 transition "
          >
            Home
          </Link>
          <Link
            to="/About"
            className="hover:text-indigo-950 transition "
          >
            About
          </Link>
        </nav>

      </div>
    </header>
  )
}

export default Header
