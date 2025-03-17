import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // Fetch property details from backend
    const fetchPropertyDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/properties/${id}`);
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  if (!property) {
    return <div className="text-center p-6">Loading property details...</div>;
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">{property.name}</h1>
      <p className="text-gray-700 text-lg">Location: {property.location}</p>
      <p className="text-green-600 text-xl font-bold">Price: {property.price}</p>
      <p className="text-gray-600">{property.description}</p>
    </div>
  );
};

export default PropertyDetails;
