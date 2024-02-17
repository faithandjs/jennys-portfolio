import React, { useEffect } from "react";
import { MdAirplanemodeActive, MdOutlineShoppingBag } from "react-icons/md";
import { LuFerrisWheel } from "react-icons/lu";
import { CgGym } from "react-icons/cg";
import { IoRestaurant } from "react-icons/io5";
// import { Map, GoogleApiWrapper, Marker, GoogleAPI } from "google-maps-react";
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_API_KKK ?? "";

interface Props {
  units: string;
  position: Position;
  address: string;
  location: string;
}

const LocationCard = ({ google }:{google:any}) => {
  const findNearestGym = () => {
    const currentPosition =  { lat: 9.0884124, lng: 7.3570102 }
    const service = new google.maps.places.PlacesService(
      document.createElement("div")
    );

    // Define search request
    const request = {
      location: currentPosition,
      radius: 5000, // Search within 5000 meters (adjust as needed)
      type: "airport", // Search for gyms
    };

    // Perform nearby search for gyms
    // service.nearbySearch(request, (results, status) => {
    //   if (status === google.maps.places.PlacesServiceStatus.OK) {
    //     console.log(results);
    //     // Sort results by distance from current position
    //     results?.sort((a, b) => {
    //       // const distanceA =
    //       //   google.maps.geometry.spherical.computeDistanceBetween(
    //       //     currentPosition,
    //       //     a.geometry?.location
    //       //   );
    //       // const distanceB =
    //       //   google.maps.geometry.spherical.computeDistanceBetween(
    //       //     currentPosition,
    //       //     b.geometry?.location
    //       //   );
    //       // return distanceA - distanceB;
    //       return 10;
    //     });

    //     // Get the nearest gym
    //     // const nearestGym = results[0];
    //     // setNearestGym(nearestGym);
    //   }
    // });
  };
  useEffect(() => {
    findNearestGym();
  }, []);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
      {[
        {
          icon: IoRestaurant,
          distance: "300 m",
          name: "Restaurant",
        },
        {
          icon: CgGym,
          distance: "300 m",
          name: "Gym",
        },

        {
          icon: LuFerrisWheel,
          distance: "3 km",
          name: "Amusement Park",
        },
        {
          icon: MdAirplanemodeActive,
          distance: "3 km",
          name: "Airport",
        },
        {
          icon: MdOutlineShoppingBag,
          distance: "300 m",
          name: "Minimart",
        },
      ].map((item, key) => (
        <div className="flex items-center gap-3 child:shrink-0">
          <div className="bg-main bg-opacity-10 p-1 rounded text-main">
            <item.icon size={30} className=" " />
          </div>
          <div className="font-medium">
            <p className="">{item.name}</p>
            <p className="text-ink text-sm">{item.distance}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
// export default LocationCard;
// export default GoogleApiWrapper({
//   apiKey: googleMapsApiKey,
// })(LocationCard);
