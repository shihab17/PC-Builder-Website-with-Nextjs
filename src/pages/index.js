import React from 'react';
import RootLayout from '../../components/Layouts/RootLayout';
import AllProduct from '../../components/UI/AllProduct';

const Home = ({allProducts}) => {
  return (
    <div>
      <h1>Home</h1>
      <AllProduct products={allProducts.data}></AllProduct>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getStaticProps = async () => {
  const res = await fetch('https://pc-builder-api-shihab17.vercel.app/api/v1/product');
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allProducts: data
    }
  }
}