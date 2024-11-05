import React from "react";
import { Card } from "primereact/card";
import "primeicons/primeicons.css";
import img from "../assets/prueba.png";

const Catalogue = () => {

  return (
    <div>
      <div className="grid mx-2 my-2 flex justify-content-center flex-wrap">
        <Card subTitle={"producto_1"} className="col-4 mx-2 my-2 flex">
          <img
            src={img}
            style={{ maxWidth: "300px", maxHeight: "300px" }}
            alt="Lesbiana"
            className="card-image"
          />
          <h3 className="align-text-right">Pintura Acrilica</h3>
          <p>Precio: 250$</p>
          <i className="pi pi-shopping-cart" style={{ fontSize: "1rem" }}></i>
        </Card>
        {/* Repetir Card para más productos */}
        <Card subTitle={"producto_2"} className="col-4 mx-2 my-2 flex">
          <img
            src={img}
            style={{ maxWidth: "300px", maxHeight: "300px" }}
            alt="Lesbiana"
            className="card-image"
          />
          <h3>Pintura Acrilica</h3>
          <p>Precio: 250$</p>
          <i className="pi pi-shopping-cart" style={{ fontSize: "1rem" }}></i>
        </Card>
        <Card subTitle={"producto_1"} className="col-4 mx-2 my-2 flex">
          <img
            src={img}
            style={{ maxWidth: "300px", maxHeight: "300px" }}
            alt="Lesbiana"
            className="card-image"
          />
          <h3 className="align-text-right">Pintura Acrilica</h3>
          <p>Precio: 250$</p>
          <i className="pi pi-shopping-cart" style={{ fontSize: "1rem" }}></i>
        </Card>
        <Card subTitle={"producto_1"} className="col-4 mx-2 my-2 flex">
          <img
            src={img}
            style={{ maxWidth: "300px", maxHeight: "300px" }}
            alt="Lesbiana"
            className="card-image"
          />
          <h3 className="align-text-right">Pintura Acrilica</h3>
          <p>Precio: 250$</p>
          <i className="pi pi-shopping-cart" style={{ fontSize: "1rem" }}></i>
        </Card>
        {/* Más Cards aquí */}
      </div>
    </div>
  );
};

export default Catalogue;
