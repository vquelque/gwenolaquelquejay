import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div className="flex flex-wrap justify-between items-center text-pink-500 text-opacity-75">
      <h1 className="text-2xl font-bold">
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
      <Link className="" to="/parcours/">mon parcours</Link>
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
