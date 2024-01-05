import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./cartSlice";
import Button from "../../ui/Button";

function UpdateItem({ pizzaId }) {
  const dispatch = useDispatch();
  const quantity = useSelector(getCurrentQuantityById(pizzaId));

  function handleIncreaceQuantity() {
    dispatch(increaseItemQuantity(pizzaId));
  }
  function handleDecreaseQuantity() {
    dispatch(decreaseItemQuantity(pizzaId));
  }
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleDecreaseQuantity}>
        -
      </Button>
      <span className="text-sm font-medium">{quantity}</span>
      <Button type="round" onClick={handleIncreaceQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItem;
