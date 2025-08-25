import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Callout from "../components/callout"

const IndexPage = () => (
  <Layout>
    <Seo title="Gwenola Quelquejay - Acupressure & Hypnose" />
    <div className="mx-auto w-60 w-60 overflow-hidden rounded-full">
      <StaticImage
        src="../images/quelquejay.jpg"
        alt="profile picture"
        imgClassName="overflow-hidden rounded-full"
      />
    </div>
    <div className="mt-8">
      <p>
        Orthophoniste de formation, praticienne en{" "}
        <strong className="font-normal">Psycho-Bio-Acupressure</strong> et{" "}
        <strong className="font-normal">hypnothérapeute</strong>.
      </p>
      <p>
        Je vous reçois à <strong className="font-normal">Paris XV</strong>,{" "}
        <strong className="font-normal">Fontainebleau</strong> et{" "}
        <strong className="font-normal">Plounéour (29)</strong>.
      </p>
    </div>
    <Callout />

    <div className="mt-8">
      <h2 className="text-2xl"> Contact </h2>
      <p>
        Vous pouvez m'écrire{" "}
        <a
          className="text-pink-400 font-semibold hover:text-pink-700"
          href="#mailgo"
          data-address="contact"
          data-domain="gwenolaquelquejay.fr"
        >
          ici !
        </a>
      </p>
      <p>
        Vous pouvez ausssi me téléphoner{" "}
        <a
          className="text-pink-400 font-semibold hover:text-pink-700"
          href="tel:+33665462854"
        >
          {" "}
          ici !
        </a>
      </p>
    </div>
  </Layout>
)

export default IndexPage
