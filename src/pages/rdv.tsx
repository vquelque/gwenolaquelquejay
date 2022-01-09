import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const RDVPage = () => {
  const [first, setFirst] = React.useState("")
  const [age, setAge] = React.useState("")
  const [location, setLocation] = React.useState("")
  const [step, setStep] = React.useState(0)

  const nextStep = () => setStep(step + 1)

  const getLink = () => {
    if (first === "no") {
      if (age === "baby") {
        if (location == "paris") {
          return "https://calendly.com/gquelquejay/1"
        }
        if (location == "fontainbleau") {
          return "https://calendly.com/gquelquejay/2"
        }
      }
      if (age === "child") {
        if (location == "paris") {
          return "https://calendly.com/gquelquejay/3"
        }
        if (location == "fontainbleau") {
          return "https://calendly.com/gquelquejay/4"
        }
      }
      if (age === "adult") {
        if (location == "paris") {
          return "https://calendly.com/gquelquejay/5"
        }
        if (location == "fontainbleau") {
          return "https://calendly.com/gquelquejay/6"
        }
      }
    }
  }

  return (
    <Layout>
      <Seo title="Prendre rendez-vous" />
      <h1 className="text-2xl font-bold mb-8">
        Prendre rendez-vous :
      </h1>
      <div className="mb-6 text-gray-700">
        <div className="mb-2">
          <h2 className="mb-1">Est-ce la première fois que vous prenez rendez-vous ?</h2>
          <div
            className="flex flex-wrap"
            onChange={e => {
              setFirst(e.target.value)
              if (first == "") nextStep()
            }}
          >
            <input
              id="first1"
              type="radio"
              value="yes"
              name="first"
              className="mr-1"
            />
            <label htmlFor="first1">Oui</label>
            <span className="mr-4" />
            <input
              id="first2"
              type="radio"
              value="no"
              name="first"
              className="mr-1"
            />
            <label htmlFor="first2">Non</label>
          </div>
        </div>
        {step >= 1 ? (
          <div className="mb-2">
            <h2 className="mb-1">Où souhaitez-vous prendre rendez-vous ?</h2>
            <div
              onChange={e => {
                setLocation(e.target.value)
                if (location == "") nextStep()
              }}
            >
              <input
                id="loc1"
                type="radio"
                value="paris"
                name="location"
                className="mr-1"
              />
              <label htmlFor="loc1">Paris (15ème Ardt)</label>
              <span className="mr-4" />
              <input
                id="loc2"
                type="radio"
                value="fontainebleau"
                name="location"
                className="mr-1"
              />
              <label htmlFor="loc2">Fontainebleau</label>
            </div>
          </div>
        ) : (
          ""
        )}

        {step >= 2 ? (
          <div className="mb-2">
            <h2 className="mb-1">Quel type de rendez-vous ?</h2>
            <div
              onChange={e => {
                setAge(e.target.value)
                if (age == "") nextStep()
              }}
            >
              <input
                id="age1"
                type="radio"
                value="baby"
                name="age"
                className="mr-1"
              />
              <label htmlFor="age1">Bébé (avant la marche)</label>
              <span className="mr-4" />
              <input
                id="age2"
                type="radio"
                value="child"
                name="age"
                className="mr-1"
              />
              <label htmlFor="age2">Enfant</label>
              <span className="mr-4" />
              <input
                id="loc3"
                type="radio"
                value="adult"
                name="age"
                className="mr-1"
              />
              <label htmlFor="loc3">Adulte</label>
            </div>
          </div>
        ) : (
          ""
        )}

        {step >= 3 ? (
          <div className="mt-4">
            <button
              onClick={() => window.location.replace(getLink())}
              className="bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Prendre rendez vous !
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </Layout>
  )
}

export default RDVPage
