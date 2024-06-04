import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartItems.map(cItem =>
            <CartItem
              key={cItem.id}
              item={{
                id: cItem.id,
                title: cItem.name,
                quantity: cItem.quantity,
                total: cItem.totalPrice, price: cItem.price
              }}
            />
          )}
      </ul>
    </Card>
  );
};

export default Cart;
