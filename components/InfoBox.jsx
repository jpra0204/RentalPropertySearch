import React from 'react'

function InfoBox({ title, description, buttonInfo = {link, label}, style="primary" }) {
    
  return (
    <div className={`${style == "primary" ? "bg-gray-100" : "bg-blue-100"} p-6 rounded-lg shadow-md`}>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 mb-4">
            {description}
        </p>
        <a href={buttonInfo.link} className={`${style == "primary" ? "bg-black" : "bg-blue-500"} inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700`}>
            {buttonInfo.label}
        </a>
    </div>
  )
}

export default InfoBox