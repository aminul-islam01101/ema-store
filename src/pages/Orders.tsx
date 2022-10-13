import { useContext } from 'react';
import { ProductContext } from '~/Contexts/ProductContext';
import { useShoppingCart } from '~/Contexts/ShoppingCardContext';
import CartItem from './Shop/CartItem';

const Orders = () => {
  const { cartItems } = useShoppingCart();
  const products = useContext(ProductContext);
  console.log(cartItems);

  return (
    <div className='mt-20'>
      {cartItems ? (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div>nothing selected</div>
      )}
    </div>
  );
};

export default Orders;
