import AllPackages from '@/components/packages/AllPackages';
import FooterMini from '@/components/shared/Footer/FooterMini';
import Navbar from '@/components/shared/Navbar/Navbar';

const PackagesPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <AllPackages />
      </main>
      <FooterMini />
    </>
  );
};

export default PackagesPage;
