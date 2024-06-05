import { cartActions } from "./cartSlice";
import { uiSliceActions } from "./uiSlice";

export const sendCartData = (cart) => {
    return async (dispatch) => {

        dispatch(uiSliceActions.showNotification({
            status: "pending",
            title: "Sending...",
            message: "Sending cart data!"
        }))

        const sendRequest = async () => {
            const response = await fetch("https://react-http-d6c76-default-rtdb.firebaseio.com/cart.json", {
                method: "PUT",
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                })
            });
            if (!response.ok) {
                throw new Error('Sending cart data failed.')
            }
        }

        try {
            await sendRequest()
            dispatch(uiSliceActions.showNotification({
                status: "success",
                title: "Success!",
                message: "Sent cart data successfully!"
            }))
        } catch (error) {
            dispatch(uiSliceActions.showNotification({
                status: "error",
                title: "Error!",
                message: "Sending cart data failed!"
            }))
        }
    }
}

export const getCartData = () => {
    return async (dispatch) => {
        const getRequest = async () => {
            const response = await fetch("https://react-http-d6c76-default-rtdb.firebaseio.com/cart.json");
            if (!response.ok) {
                throw new Error('Something went wrong , could not fetch the cart data.')
            }
            const data = await response.json()
            dispatch(cartActions.replaceCart({
                items: data.items || [],
                totalQuantity: data.totalQuantity,
            }))
        }

        try {
            const data = await getRequest();
            return data
        } catch (error) {
            dispatch(uiSliceActions.showNotification({
                status: "error",
                title: "Error!",
                message: "Fetching cart data failed!"
            }))
        }
    }
}