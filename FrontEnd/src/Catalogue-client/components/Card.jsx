import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

function CardPrime({ title, description, image, onAction }) {
  const header = <img alt={title} src={image} style={{ width: "100%" }} />;
  const footer = (
    <span>
      <Button label="Action" icon="pi pi-cart-plus" onClick={onAction} />
    </span>
  );

  return (
    <Card
      title={title}
      subTitle={description}
      header={header}
      footer={footer}
      className="md:w-20rem" // Clase de PrimeFlex para margen inferior
    >
      <p className="m-0">This is a dynamic card using PrimeReact.</p>
    </Card>
  );
}

export default CardPrime;

