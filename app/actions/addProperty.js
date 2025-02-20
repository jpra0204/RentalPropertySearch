'use server'

export default async function addProperty(formData) {

    // Extract the amenities and images from the form data
    const amenities = formData.getAll('amenities');
    const images = formData.getAll('images').filter(image => image.name.trim() !== '').map(image => image.name);

    // Create an object to store the property data
    const propertyData = {
        type: formData.get('type'),
        name: formData.get('name'),
        description: formData.get('description'),
        location: {
            street: formData.get('location.street'),
            city: formData.get('location.city'),
            state: formData.get('location.state'),
            zipCode: formData.get('location.zipcode'),
        },
        beds: formData.get('beds'),
        baths: formData.get('baths'),
        squareFeet: formData.get('square_feet'),
        amenities: amenities,
        rates: {
            nightly: formData.get('rates.nightly'),
            weekly: formData.get('rates.weekly'),
            monthly: formData.get('rates.monthly'),
        },
        seller_info: {
            name: formData.get('seller_info.name'),
            email: formData.get('seller_info.email'),
            phone: formData.get('seller_info.phone'),
        },
        images: images,
    };

    // You can add your logic to handle propertyData here, such as saving it to a database

    console.log(propertyData);
}