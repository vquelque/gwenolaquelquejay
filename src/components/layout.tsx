/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="min-h-screen bg-pink-50">
      <div className="max-w-screen-lg mx-auto px-6 py-6">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="max-w-screen-lg mx-auto px-3 pt-20 pb-32 text-lg">
        <main>{children}</main>
        <footer
          className="mt-20 text-center text-sm"
        >
          © {new Date().getFullYear()}, Built with ❤️ by <a href="https://valentinquelquejay.me/">Valentin Quelquejay</a>
        </footer>
        </div>
      </div>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
