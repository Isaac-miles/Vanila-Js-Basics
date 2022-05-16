import { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';

function Cart(props) {
    const cartCtx = useContext(CartContext)

    const totalAmount = ` ₦${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id =>{
        cartCtx.removeItem(id);
    }
    const cartItemAddHandler = item =>{
        cartCtx.addItem({...item, amount: 1});
    }

    const cartItems =(
    <ul className={classes['cart-items']}>
        { cartCtx.items.map((cartItem) =>(<CartItem 
        key = {cartItem.id} 
        name ={cartItem.name} 
        price = {cartItem.price}
        amount ={cartItem.amount} 
        onRemove ={cartItemRemoveHandler.bind(null, cartItem.id)} 
        onAdd ={cartItemAddHandler.bind(null, cartItem)}
        />)) }
    </ul>);

         return (
    <Modal onClose ={props.onClose}>
       { cartItems}
        <div div className = {classes.total } >
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>

        <div className={classes.actions}>
            <button className={classes['button--al']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button} >Order</button>}
        </div>
    </Modal>
  )
}

export default Cart