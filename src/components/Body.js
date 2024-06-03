import { useEffect, useState } from "react";
import Restaurantcard from "./Restaurantcard";
import Shimmer from "./Shimmer";
const Body = () => {
   const [restaurantList,setRestaurantList] = useState([]);
   const [filteredList,setFilteredList] = useState([])
   const [searchTxt,setSearchTxt] = useState('');
  
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

 
  return (restaurantList.length === 0) ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text"  value={searchTxt} onChange={(e) => {
             setSearchTxt(e.target.value);
             console.log(searchTxt)
          }}/>
          <button onClick={() => {
           const filteredList =  restaurantList.filter((res) => {
              return  res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
            });
            setFilteredList(filteredList)
            // console.log(searchTxt,filteredList)
          }}>search</button>
        </div>
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
        {filteredList.map((restaurant) => (
          <Restaurantcard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
