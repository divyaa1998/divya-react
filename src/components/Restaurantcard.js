import { CDN_URL } from "../utils/constants";
const Restaurantcard = (props) => {
  
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId,sla} = resData?.info
    return (
      <div className="m-4 p-4 bg-gray-200 w-60 h-96 rounded-lg flex flex-col hover:bg-gray-300">
         <img className="w-full h-32 rounded-lg object-cover" src={CDN_URL+ cloudinaryImageId} />
        <div className="flex-1 flex flex-col justify-between">
        <h3 className="font-bold p-4 text-lg">{name}</h3>
         <h4 className="break-words">{cuisines.join(',')}</h4>
         <h4>{avgRating}</h4>
         <h4>{costForTwo}</h4>
         <h4>{sla.slaString}</h4>
        </div>
        
      </div>
    )
  }
export default Restaurantcard  