import React, { useState } from "react";
import { CardBody, Card, CardContainer, Link } from "./ProductCard.styled"

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageURL: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, imageURL }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <CardContainer>
      <Link to={`/products/${id}`}>
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        isHovered={isHovered}
      >
        <Card.Img variant="top" src={imageURL} />
        <CardBody>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price}zł
      </Card.Text>
        </CardBody>
      </Card>
      </Link>
    </CardContainer>
  );
}

export default ProductCard