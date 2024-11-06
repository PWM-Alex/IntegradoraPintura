import React, { useState, Suspense, lazy } from "react";
import "primeicons/primeicons.css";
import { DataView } from 'primereact/dataview';

const Card = lazy(() => import('./components/Card'));
const Catalogue = () => {
  const [products, setProducts] = useState([
    { name: 'Product 1', inventoryStatus: 'INSTOCK' },
    { name: 'Product 2', inventoryStatus: 'LOWSTOCK' },
    { name: 'Product 3', inventoryStatus: 'OUTOFSTOCK' },
    { name: 'Product 4', inventoryStatus: 'INSTOCK' },
    { name: 'Product 5', inventoryStatus: 'INSTOCK' },
    { name: 'Product 6', inventoryStatus: 'OUTOFSTOCK' },
    { name: 'Product 7', inventoryStatus: 'INSTOCK' },
    { name: 'Product 8', inventoryStatus: 'INSTOCK' },
    { name: 'Product 9', inventoryStatus: 'INSTOCK' },
    { name: 'Product 2', inventoryStatus: 'LOWSTOCK' },
    { name: 'Product 3', inventoryStatus: 'OUTOFSTOCK' },
    { name: 'Product 4', inventoryStatus: 'INSTOCK' },
    { name: 'Product 5', inventoryStatus: 'INSTOCK' },
    { name: 'Product 6', inventoryStatus: 'OUTOFSTOCK' },
    { name: 'Product 7', inventoryStatus: 'INSTOCK' },
    { name: 'Product 8', inventoryStatus: 'INSTOCK' },
    { name: 'Product 9', inventoryStatus: 'INSTOCK' },
    { name: 'Product 6', inventoryStatus: 'OUTOFSTOCK' },
    { name: 'Product 7', inventoryStatus: 'INSTOCK' },
    { name: 'Product 8', inventoryStatus: 'INSTOCK' },
    { name: 'Product 9', inventoryStatus: 'INSTOCK' },
    { name: 'Product 2', inventoryStatus: 'LOWSTOCK' },
    { name: 'Product 3', inventoryStatus: 'OUTOFSTOCK' },
    { name: 'Product 4', inventoryStatus: 'INSTOCK' },
    { name: 'Product 5', inventoryStatus: 'INSTOCK' },
    { name: 'Product 6', inventoryStatus: 'OUTOFSTOCK' },
    { name: 'Product 7', inventoryStatus: 'INSTOCK' },
  ]);
  const layout = 'grid';

  // Plantilla para renderizar cada elemento
  const itemTemplate = (product) => {
    if (!product) return null;

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Card product={product} />
      </Suspense>
    );
  };
  return (
    <div className="card">
      <DataView value={products} itemTemplate={itemTemplate} paginator rows={8}/>
    </div>
  );
};

export default Catalogue;
