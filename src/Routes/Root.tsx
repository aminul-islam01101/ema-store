import { Outlet, useLoaderData } from 'react-router-dom';
import { ProductContext } from '~/Contexts/ProductContext';
import { IProducts } from '~/Models/models';
import Header from '../components/Header';

const Root = () => {
  const products = useLoaderData() as IProducts;

  return (
    <div className='min-h-screen'>
      <ProductContext.Provider value={products}>
        <Header />
        <Outlet />
      </ProductContext.Provider>
    </div>
  );
};

export default Root;
