import Products from '@/components/products/products';
import FooterMini from '@/components/shared/Footer/FooterMini';
import Navbar from '@/components/shared/Navbar/Navbar';


const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Products fromProductsPage />
      </main>
      <FooterMini />
    </>
  );
};

export default ProductsPage;
