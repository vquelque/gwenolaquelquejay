import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Logo from "../images/logo.svg";

const Header = ({ siteTitle }) => (
  <header>
    <div className="flex flex-row flex-wrap justify-center items-center text-pink-500 text-opacity-75 space-y-2">
    <Logo className="h-10 flex-no-shrink fill-current"></Logo>
      <div className="flex flex-row items-center space-x-2 w-screen justify-center"> 
      <h1 className="text-2xl font-bold mb-2 md:mb-0 text-center">
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
      </div>
      <div className="flex space-x-4 w-screen justify-center"> 
      <Link className="" to="/parcours/">mon parcours</Link>
      <Link className="" to="/honoraires/">honoraires</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
