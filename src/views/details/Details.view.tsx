import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';

const Details: React.FC<RouteComponentProps<{ id: string}>> = (props) => {
  const [productId, setProductId] = useState<string>('');
  useEffect(() => {
    const { id } = props.match.params;
    setProductId(id || '');
}, [ props.match ]);

    return (
      <h1>DETAILS: {productId}</h1>
    );
}

export default Details;