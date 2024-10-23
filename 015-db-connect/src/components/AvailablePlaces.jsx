import { useState, useEffect } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();
        setAvailablePlaces(resData.places);

        if (!response.ok) {
          throw new Error("Failed to fetch places");
        }
      } catch (error) {
        // ..
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetch place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
