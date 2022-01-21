import React, { useState, useRef } from "react"
type AccordionProps = {
  title: string
  content: string
}
const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpened, setOpened] = useState<boolean>(false)
  const [height, setHeight] = useState<string>("0px")
  const contentElement = useRef(null)

  const HandleOpening = () => {
    setOpened(!isOpened)
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px")
  }
  return (
    <div onClick={HandleOpening} className="border ">
      <div className={""}>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className="bg-gray-200 overflow-hidden transition-all duration-200"
      >
        <p className="p-4">{content}</p>
      </div>
    </div>
  )
}

export default Accordion
