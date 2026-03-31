import { useState, useEffect } from 'react';

export const useGeolocation = () => {
  const [currentLocation, setCurrentLocation] = useState({});

  useEffect(() => {
    const onSuccess = (e) => {
      setCurrentLocation({
        latitude: e.coords.latitude.toFixed(3),
        longitude: e.coords.longitude.toFixed(3)
      });
    };

    const onError = (error) => {
      alert("Erro ao buscar localização: " + error.message);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return currentLocation;
};