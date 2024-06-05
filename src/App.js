import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
// import { uiSliceActions } from './store/uiSlice';
import { sendCartData, getCartData } from './store/cartActions';

let isInitial = true
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.showCart)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    dispatch(getCartData())
  }, [dispatch])

  useEffect(() => {

    if (isInitial) {
      isInitial = false;
      return
    }

    if (cart.changed) dispatch(sendCartData(cart))



    // const sendCartData = async () => {

    //   dispatch(uiSliceActions.showNotification({
    //     status: "pending",
    //     title: "Sending...",
    //     message: "Sending cart data!"
    //   }))

    //   const response = await fetch("https://react-http-d6c76-default-rtdb.firebaseio.com/cart.json", {
    //     method: "PUT",
    //     body: JSON.stringify(cart)
    //   });
    //   if (!response.ok) {

    //     throw new Error('Sending cart data failed.')
    //   }
    //   dispatch(uiSliceActions.showNotification({
    //     status: "success",
    //     title: "Success!",
    //     message: "Sent cart data successfully!"
    //   }))
    // }

    // if (isInitial) {
    //   isInitial = false;
    //   return
    // }


    // sendCartData().catch(error => {
    //   dispatch(uiSliceActions.showNotification({
    //     status: "error",
    //     title: "Error!",
    //     message: "Sending cart data failed!"
    //   }))
    // })
  }, [cart, dispatch])


  return (
    <Fragment>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />}
      <Layout>
        {showCart && <Cart />}
        <Products />

      </Layout>

    </Fragment>
  );
}

export default App;
