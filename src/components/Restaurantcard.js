import { CDN_URL } from "../utils/constants";
const Restaurantcard = (props) => {
  
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId,sla} = resData?.info
    return (
      <div className="res-card">
         <img className="res-card-img" src={CDN_URL+ cloudinaryImageId} />
        <div className="card-container">
        <h3>{name}</h3>
         <h4>{cuisines.join(',')}</h4>
         <h4>{avgRating}</h4>
         <h4>{costForTwo}</h4>
         <h4>{sla.slaString}</h4>
        </div>
        
      </div>
    )
  }
export default Restaurantcard  