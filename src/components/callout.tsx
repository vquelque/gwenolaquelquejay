import { Link } from "gatsby"
import * as React from "react"

const Callout = () => (
  <div className=" mt-8 text-center flex flex-col sm:text-left sm:flex-row sm:items-center sm:justify-between p-4 sm:p-8 bg-pink-100 rounded-md">
    <div className="text-xl font-semibold">
      <div>
        Consultations à Paris, Fontainebleau et Plounéour
      </div>
    </div>
    <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2">
      <Link to="/rdv/">
        <div className="bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full">Prendre RDV !</div>
      </Link>
    </div>
  </div>
)

export default Callout
