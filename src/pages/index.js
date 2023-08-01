import React from 'react';
import RootLayout from '../../components/Layouts/RootLayout';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
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
      allProducts: data?.data
    }
  }
}