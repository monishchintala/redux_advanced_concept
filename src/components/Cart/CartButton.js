import { useDispatch, useSelector } from 'react-redux';
import { uiSliceActions } from '../../store/uiSlice.js';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const toogleCartHandler = () => {
    dispatch(uiSliceActions.toogleCart())
  }
  return (
    <button className={classes.button} onClick={toogleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>
        {totalQuantity}
      </span>
    </button>
  );
};

export default CartButton;
