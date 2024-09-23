export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for mobile */}
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="hover:text-primary">Features</a>
            </li>

            <li>
              <a className="hover:text-primary">Pricing</a>
            </li>
          </ul>
        </div>
        {/* Brand Logo */}
        <a className="btn btn-ghost normal-case text-xl">NextAI</a>
      </div>

      {/* Navbar Center - for larger screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="hover:text-primary">Features</a>
          </li>

          <li>
            <a className="hover:text-primary">Pricing</a>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <a className="btn btn-primary">Get Started</a>
      </div>
    </div>
  );
}
