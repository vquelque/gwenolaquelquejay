import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Callout from "../components/callout"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="mx-auto w-60 w-60 overflow-hidden rounded-full">
      <StaticImage src="../images/quelquejay.jpg" alt="profile picture" />
    </div>
    <div className="mt-8">
      <p>Ortophoniste de formation, praticienne en Psycho-Bio-Accupressure et hypnothérapeute.</p>
      <p>Je vous reçois à Paris XV ou Fontainebleau.</p>
    </div>
    <Callout />

    <div className="mt-8">
      <h2 className="text-2xl"> Contact </h2>
        <p>
        Vous pouvez m'écrire {" "}
        <a className="text-pink-400 font-semibold hover:text-pink-700" href="#mailgo" data-address="contact" data-domain="gwenolaquelquejay.me">
          ici !
        </a>
        </p>
    </div>
  </Layout>
)

export default IndexPage
