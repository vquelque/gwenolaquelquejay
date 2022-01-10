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
      if (age === "baby") {
        if (location == "paris") {
          return "https://calendly.com/gquelquejay/bebe-paris"
        }
        if (location == "fontainebleau") {
          return "https://calendly.com/gquelquejay/bebe-fontainebleau"
        }
      }
      if (age === "child") {
        if (location == "paris") {
          return "https://calendly.com/gquelquejay/enfant-paris"
        }
        if (location == "fontainebleau") {
          return "https://calendly.com/gquelquejay/enfant-fontainebleau"
        }
      }
      if (age === "adult") {
        if (location == "paris") {
          if(first == "yes") {
            return "https://calendly.com/gquelquejay/adulte-paris-1"
          } else {
            return "https://calendly.com/gquelquejay/adulte-paris-suivi"
          }
        }
        if (location == "fontainebleau") {
          if(first == "yes") {
            return "https://calendly.com/gquelquejay/adulte-fontainebleau-1"
          } else {
            return "https://calendly.com/gquelquejay/adulte-fontainebleau-suivi"
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
              className="flex flex-wrap"
              onChange={e => {
                setLocation(e.target.value)
                if (location == "") nextStep()
              }}
            >
              <div className="flex">
              <input
                id="loc1"
                type="radio"
                value="paris"
                name="location"
                className="mr-1 flex"
              />
              <label htmlFor="loc1" className="">Paris (15ème Ardt)</label>
              </div>
              <span className="mr-4" />
              <div className="flex">
              <input
                id="loc2"
                type="radio"
                value="fontainebleau"
                name="location"
                className="mr-1"
              />
              <label htmlFor="loc2" className="">Fontainebleau</label>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {step >= 2 ? (
          <div className="mb-2">
            <h2 className="mb-1">Quel type de rendez-vous ?</h2>
            <div
            className="md:flex"
              onChange={e => {
                setAge(e.target.value)
                if (age == "") nextStep()
              }}
            >
              <div className="flex">
              <input
                id="age1"
                type="radio"
                value="baby"
                name="age"
                className="mr-1"
              />
              <label htmlFor="age1">Bébé (avant la marche)</label>
              </div>
              <span className="md:mr-4" />
              <div className="flex">
              <input
                id="age2"
                type="radio"
                value="child"
                name="age"
                className="mr-1"
              />
              <label htmlFor="age2">Enfant</label>
              </div>
              <span className="md:mr-4" />
              <div className="flex"> 
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
          </div>
        ) : (
          ""
        )}

        {step >= 3 ? (
          <div className="mt-4">
            <button
              onClick={() => {window.location.href = getLink()} }
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
