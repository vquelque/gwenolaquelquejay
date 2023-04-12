import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Honoraires = () => (
  <Layout>
    <Seo title="Honoraires" />
    <h1 className="text-2xl text-pink-600 font-semibold mb-4">Honoraires</h1>
    <p>Honoraires: 80 euros</p>
    <p>Règlement en chèque ou espèces uniquement.</p>
  </Layout>
)

export default Honoraires
