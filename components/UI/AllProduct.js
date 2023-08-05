import React from 'react';
import { Card, Image, Button, Row, Col } from 'antd';
import Link from 'next/link';

const AllProduct = ({ products }) => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={8} xl={6}>
            <Link href={`/product/${product._id}`}><Card hoverable>
              <Image
                alt={product.name}
                src={product.image}
                style={{ height: 200, objectFit: 'cover' }}
              />
              <Card.Meta title={product.name} description={`Category: ${product.category}`} />
              <div style={{ marginTop: '10px' }}>
                <strong>Price: ${product.price}</strong>
              </div>
              <div>Status: {product.status}</div>
              <div>Rating (Out of 5 Stars): {product.rating}</div>
            </Card></Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllProduct;
