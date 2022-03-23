import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) =>{
    let total=0;
    const cartcntx=useContext(CartContext)
   const hasItems = cartcntx.items.length >0;
    const cartItems =(<ul className={classes['cart-items']}>
        {cartcntx.items.map((item)=> (
          
     <CartItem key={item.id}
     name={item.name}
     quantity={item.quantity}
     price={item.price}
     /> 
   ))}
     </ul>
    )
     cartcntx.items.forEach((item) => {
       total=total+(Number(item.quantity)*Number(item.price));
        });
        total= `$${total.toFixed(2)}`;
return(
 <Modal onClose={props.onClose}>
     {cartItems}
     <div className={classes.total}>
         <span>Total amount</span>
         <span>{total}</span>
          </div>
     <div className={classes.actions}>
         <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}     
        </div>
 </Modal>
    )
};

export default Cart;
