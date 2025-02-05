import React from 'react'
import PropertyCard from '@/components/PropertyCard'
import connectDB from '@/config/database'
import Property from '@/models/Property'

const PropertiesPage = async () => {
  
  // Connect to MongoDB
  await connectDB();
  // Call all the properties available
  const propertiesData = await Property.find({}).lean();

  return (
    <section className='px-r py-6'>
      <div className="container-xl lg:container m-auto px-4 py-6">
        { propertiesData.length === 0 
          ? (<p>No properties found</p>)
          : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {
                propertiesData.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))
              }
            </div>
          )
        }
      </div>
    </section>
  )
}

export default PropertiesPage