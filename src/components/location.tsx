import React, {   useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  DistanceMatrixService,
} from "@react-google-maps/api";
import { MdAirplanemodeActive, MdOutlineShoppingBag } from "react-icons/md";
import { LuFerrisWheel } from "react-icons/lu";
import { CgGym } from "react-icons/cg";
import { IoRestaurant } from "react-icons/io5";

import Heading from "./heading";

const googleMapsApiKey = process.env.VITE_GOOGLE_API_KKK ?? "";

export default function Location() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey,
  }); 

  const locations = [
    {
      units: "Units 1-4",
      position: { lat: 9.0884124, lng: 7.3570102 },
      address:
        "11B Akeem Adetoro Street, Brains and Hammers City Estate, Lifecamp Abuja",
      location: "Brains and Hammers City Estate, Lifecamp Abuja",
      nearby: {
        restaurant: [9.0712675, 7.2852333],
        gym: [9.0960234, 7.2391458],
        park: [9.0825392, 7.3120891],
        airport: [9.0174534, 7.232419],
        minimart: [9.0853566,7.3305544],
      },
    },
    {
      position: { lat: 9.1160432, lng: 7.3905758 },
      address: "21 Daniel Gemana Close 7th Avenue Gwarinpa",
      units: "Units 5-9",
      location: "21 Daniel Gemana Close 7th Avenue Gwarinpa",
      nearby: {
        restaurant: [9.1121077, 7.3625875],
        gym: [9.132159, 7.2977387],
        park: [9.2545523, 7.1866858],
        airport: [9.0174534, 7.232419],
        minimart: [9.1231748, 7.3699473],
      },
    },
  ];

  const [active, setActive] = useState(locations[0]);
  const [{ airport, gym, minimart, park, restaurant }, setNearby] = useState({
    restaurant: "0 m",
    gym: "0 m",
    park: "0 m",
    airport: "0 m",
    minimart: "0 m",
  });
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="locations">
      <div className="w-full">
        <Heading
          head="Locations"
          text="   Nestled within an enchanting ancient forest, the Luxurious Forest
            Haven offers a rare blend of secluded tranquility and exceptional
            accessibility"
        />
        <div>
          <div className=" child:rounded-2xl  map relative">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{
                  width: "100%",
                  height: "400px",
                }}
                center={active.position}
                zoom={10}
                onLoad={(map) => {
                  map.setZoom(14);
                  setMapLoaded(true);
                }}
                options={{
                  streetViewControl: false,
                  mapTypeControl: true,
                  rotateControl: false,
                  clickableIcons: false,
                  disableDoubleClickZoom: true,
                  mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                  },
                }}
              >
                {locations.map((item, key) => (
                  <Marker
                    key={key}
                    position={item.position}
                    onClick={() => {
                      setActive(item);
                    }}
                  />
                ))}

                <>
                  {Object.entries(active.nearby).map((item, key) => (
                    <DistanceMatrixService
                      key={key}
                      options={{
                        destinations: [{ lat: item[1][0], lng: item[1][1] }],
                        origins: [active.position],
                        travelMode: google.maps.TravelMode.DRIVING,
                      }}
                      callback={(response) => {
                        setNearby((p) => ({
                          ...p,
                          [item[0]]:
                            response?.rows[0].elements[0].distance.text,
                        }));
                      }}
                    />
                  ))}
                </>

                <div className="absolute bg-white w-[340px] h-[120px] rounded-xl left-2 top-2 p-3 shadow flex flex-col justify-between items-start text-sm">
                  <div>
                    <div className="">
                      <p className="text-lg">{active.units}</p>
                      <p className="font-medium">{active.address}</p>
                    </div>
                  </div>
                  <a
                    className="text-[#5591f4]  hover:underline hover:cursor-pointer"
                    target="_blank"
                    href={`https://www.google.com/maps?q=${encodeURIComponent(
                      active.location
                    )}`}
                  >
                    View larger map
                  </a>
                </div>
              </GoogleMap>
            ) : (
              <></>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
            {[
              {
                icon: IoRestaurant,
                distance: restaurant,
                name: "Restaurant",
              },
              {
                icon: CgGym,
                distance: gym,
                name: "Gym",
              },

              {
                icon: LuFerrisWheel,
                distance: park,
                name: "Amusement Park",
              },
              {
                icon: MdAirplanemodeActive,
                distance: airport,
                name: "Airport",
              },
              {
                icon: MdOutlineShoppingBag,
                distance: minimart,
                name: "Mall",
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
        </div>
      </div>
    </section>
  );
}
