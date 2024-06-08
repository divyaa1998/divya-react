import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const Restaurantmenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  if (resInfo == null) {
    return <Shimmer />;
  }
  const { text } = resInfo?.data?.cards[0]?.card?.card;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  
  return (
    <div className="m-4 p-4  flex items-center justify-center min-h-screen">
      <div className="m-4 p-6 bg-gray-200 shadow-lg rounded-lg w-96">
      <h1 className="font-bold text-lg p-4">{text}</h1>
      <h2>Items</h2>
      <ul className="font-normal">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs{" "}
            {item.card.info.defaultPrice || item.card.info.price}
          </li>
        ))}
      </ul>
      </div>
  
    </div>
  );
};

export default Restaurantmenu;
