import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { heart, heartOutline } from "ionicons/icons";
import Header from "@/components/layout/Header";

const FlowerDetail = () => {
  const { id } = useParams(); // get id from URL
  const navigate = useNavigate();
  const [flowerData, setFlowerData] = useState(null); // flower detail data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    // get flower data by id
    const fetchFlowerData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/flowers?id=${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch flower data");
        }
        const data = await response.json();
        console.log("data", data);
        setFlowerData(data[0]); // get the first flower data from the array
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFlowerData();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-8 text-red-500">
        Error: {error}. Please try again later.
      </div>
    );
  }

  if (!flowerData) {
    return (
      <div className="text-center mt-8">No flower data found for ID: {id}.</div>
    );
  }

  return (
    <div>
      <Header />
      <div className="p-6 max-w-4xl mt-8 mx-auto bg-white shadow-lg rounded-lg">
        {/* back to shop page */}

        <button
          onClick={() => navigate(-1)}
          className=" text-white py-2 px-4 rounded-md mb-8 flex items-center cursor-pointer"
          style={{
            backgroundColor: "var(--primary-color)",
            color: "var(--secondary-color)",
          }}
        >
          Go Back to Shop
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          {/* image */}
          <img
            src={flowerData.imageUrl}
            alt={flowerData.name}
            className="w-full md:w-1/2 h-auto rounded-lg object-cover shadow"
          />

          {/* info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{flowerData.name}</h1>
            <div className="flex items-center mb-4">
              {/* Favorite icon */}
              <IonIcon
                icon={flowerData.favorite ? heart : heartOutline}
                className="text-red-500 text-2xl mr-2"
              />
              <span className="text-gray-600 text-lg">
                {flowerData.favorite ? "Marked as Favorite" : "Not a Favorite"}
              </span>
            </div>
            <p className="text-gray-600 text-lg mb-4">
              {flowerData.description}
            </p>
            <p className="text-xl font-semibold mb-6 text-green-500">
              Price: ${flowerData.price.toFixed(2)}
            </p>

            {/* tags */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {flowerData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* extra info */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Additional Information:
              </h3>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Care Instructions:</strong>{" "}
                  {flowerData.additionalInfo?.careInstructions}
                </li>
                <li>
                  <strong>Availability:</strong>{" "}
                  {flowerData.additionalInfo?.availability}
                </li>
                <li>
                  <strong>Delivery Options:</strong>{" "}
                  {flowerData.additionalInfo?.deliveryOptions?.join(", ")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* user comments */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
          {flowerData.reviews?.map((review, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <p>
                <strong>{review.user}</strong>{" "}
                <span className="text-yellow-500">
                  {"★".repeat(review.rating)} {"☆".repeat(5 - review.rating)}
                </span>
              </p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowerDetail;
