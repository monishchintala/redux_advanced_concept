import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: 'book1',
    price: 6,
    description: 'This is a first product - amazing!'
  },
  {
    id: "p2",
    title: 'book2',
    price: 4,
    description: 'This is a second product - amazing!'
  },

]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map(product =>
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          )}
      </ul>
    </section>
  );
};

export default Products;
