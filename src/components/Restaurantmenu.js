import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Restaurantmenu = () => {
    const {resId} = useParams();
    console.log(resId);
   const [resInfo,setResInfo] = useState(null);
    useEffect(() => {
         fetchData();
    },[])
    const fetchData = async () => {
          const data = await fetch(MENU_URL+ resId);
          const json = await data.json();
         
          setResInfo(json);
         
    }
    if(resInfo == null){
        return <Shimmer />
    }
    const {text} = resInfo?.data?.cards[0]?.card?.card;
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards)
     return (
        <div className="resMenu">
           <h1>{text}</h1>
           <h2>Items</h2>
           <ul>
   {itemCards.map((item) => (<li key = {item.card.info.id}>{item.card.info.name} - Rs {item.card.info.defaultPrice || item.card.info.price}</li>) )}
           </ul>
        </div>
     )
}

export default Restaurantmenu;