import React, { useEffect, useState } from "react";

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/properties")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Available Properties</h1>
      {properties.map((property) => (
        <div key={property._id} className="border p-4 m-4">
          <h2 className="text-xl">{property.name}</h2>
          <p>{property.location}</p>
          <p>₹{property.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
