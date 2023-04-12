import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Callout from "../components/callout"

const ParcoursPage = () => (
  <Layout>
    <Seo title="mon parcours" />
    <h1 className="text-2xl text-pink-600 font-semibold mb-4">Mon parcours</h1>
    <p>
      <strong>Orthophoniste spécialisée en neurologie</strong>, je me suis
      tournée depuis plus de 10 ans vers le <strong>travail émotionnel</strong>,
      car à tout âge, nous pouvons être sujet à des blocages émotionnels : ces
      conditionnements apparus parfois dès l’enfance qui déterminent malgré nous
      notre comportement et nous gâchent la vie.
    </p>
    <br />
    <p>
      Grâce à <strong>l’Acupressure à cinq points</strong>{" "}
      <span className="italic">(PBA)</span>, technique mise au point par le
      Docteur Delatte il y a plus de 20 ans, je viens stimuler sur votre corps
      une série de points afin de travailler sur les émotions et libérer vos
      blocages émotionnels. Cette méthode thérapeutique permet de les effacer
      durablement. Elle est douce, efficace, et quelques séances peuvent
      remplacer des années de thérapie.
    </p>
    <br />
    <p>
      J’utilise{" "}
      <strong>
        l’Hypnose médicale et les techniques d’optimisation du potentiel{" "}
      </strong>{" "}
      dans les indications telles que la difficulté de prise de parole en
      public, le stress, la confiance en soi, les douleurs, le sommeil, les
      migraines, la préparations aux examens des étudiants et des sportifs…
    </p>
    <br />

    <strong>Les Indications : </strong>
    <ul>
      <li>
        <em>Adulte</em> : stress, anxiété, burn out, déprime, troubles du
        sommeil , confiance en soi, concentration, mémoire, troubles de
        l’alimentation, de la sexualité, peurs, phobies, tics, poids,
        addictions…
      </li>
      <li>
        <em>Enfant</em> : confiance en soi, sommeil, séparation, difficultés
        scolaires, colère, énurésie, troubles de l’alimentation, allergies,
        hyperhydrose...
      </li>
      <li>
        <em>Bébé</em> : Pleurs, coliques, eczéma, sommeil…
      </li>
    </ul>
    <Callout />
  </Layout>
)

export default ParcoursPage
