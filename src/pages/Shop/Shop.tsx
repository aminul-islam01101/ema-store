import storedItems from '../../../products.json';
import CartItem from './CartItem';
import ProductCard from './ProductCard';

const Shop = () => {
  // const products = useLoaderData() as IProducts;

  return (
    <div className='grid grid-cols-[4fr_1fr]'>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 container gap-3'>
        {storedItems.map((product) => (
          // <ProductCard {...product} key={product.id} />
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <CartItem />
    </div>
  );
};

export default Shop;
