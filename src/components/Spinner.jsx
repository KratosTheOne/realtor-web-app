import React from 'react'
import spinner from "../assets/svgs/spinner.svg"

const Spinner = () => {
  return (
    <div className="flex justify-center items-center bg-black opacity-50 fixed top-0 bottom-0 left-0 right-0 z-50">
        <div>
            <img src={spinner} alt="loading" className="h-24" />
        </div>
    </div>
  )
}

export default Spinner