import React from 'react'
import InfoBox from './InfoBox'

function InfoBoxes() {
  return (
    <section>
        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                <InfoBox 
                    title="For Renters" 
                    description="Find your dream rental property. Bookmark properties and contact
            owners." 
                    buttonInfo={{
                        link:"/properties",
                        label:"Browse Properties" 
                    }}
                />

                <InfoBox 
                    title="For Property Owners" 
                    description="List your properties and reach potential tenants. Rent as an
                    airbnb or long term." 
                    buttonInfo={{
                        link:"/properties/add",
                        label:"Add Property" 
                    }}
                    style="secondary"
                />
            </div>
        </div>
    </section>
  )
}

export default InfoBoxes