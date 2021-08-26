import { useMemo } from "react";

const useFeaturedHouse = (allHouses) => {
  const featuredHouses = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);
  return featuredHouses;
};

export default useFeaturedHouse;
