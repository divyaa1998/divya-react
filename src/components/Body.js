import { useEffect, useState } from "react";
import Restaurantcard from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
   const [restaurantList,setRestaurantList] = useState([]);
   const [filteredList,setFilteredList] = useState([])
   const [searchTxt,setSearchTxt] = useState('');
  const onlineStatus = useOnlineStatus();
     useEffect( () => {
    fetchData();
     },[])

     const fetchData = async () => {
      const data = await  fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4674549&lng=78.4604526&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      const json = await data.json();
  
      setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      console.log(restaurantList)
     }

 if(onlineStatus === false) {
  return <h1>Your offline!!! check your internet connection</h1>
 }
  return (restaurantList.length === 0) ? <Shimmer /> : (
    <div className="body">
      <div className="flex items-center justify-center">
        <div className="m-4 p-4">
          <input type="text" className="border border-slate-300 m-1"  value={searchTxt} onChange={(e) => {
             setSearchTxt(e.target.value);
             console.log(searchTxt)
          }}/>
          <button className="px-3 py-1 bg-green-200 rounded-md" onClick={() => {
           const filteredList =  restaurantList.filter((res) => {
              return  res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
            });
            setFilteredList(filteredList)
            // console.log(searchTxt,filteredList)
          }}>search</button>
        </div>
        <div class="m-4 p-4">
        <button
          className="bg-gray-200 px-4 py-2 rounded-md"
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
     
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredList.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><Restaurantcard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
