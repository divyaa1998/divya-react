import { useState } from "react";
import Restaurantcard from "./Restaurantcard";
import resobj from "../utils/mockData";
const Body = () => {
   const [restaurantList,setRestaurantList] = useState(resobj)
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            
           const  filteredList = restaurantList.filter((res) => {
            return  res.info.avgRating > 4
            })
            console.log(filteredList)
           setRestaurantList(filteredList)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <Restaurantcard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
