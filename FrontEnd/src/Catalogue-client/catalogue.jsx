import React from "react";
import { Menubar } from "primereact/menubar";
import { Card } from "primereact/card";
import "primeicons/primeicons.css";
import img from "../assets/prueba.png";

const Catalogue = () => {
  const items = [
    {
      label: "Catalogo",
      icon: "pi pi-shopping-bag",
      command: () => {
        console.log("Home clicked");
      },
    },
    {
      label: "Categorias",
      icon: "pi pi-sliders-h",
      command: () => {
        console.log("About clicked");
      },
      items: [
        {
          label: "Pinturas",
          icon: "pi pi-palette",
          items: [
            {
              label: "Anti-bacterial",
            },
            {
              label: "Acrilica",
            },
            {
              label: "Vinilada",
            },
            {
              label: "Cromatica",
            },
            {
              label: "Aerosol",
            },
          ],
        },
        {
          label: "Material de Pintura",
          icon: "pi pi-objects-column",
          items: [
            {
              label: "Brochas",
            },
            {
              label: "Rodillos",
            },
            {
              label: "Cintas",
            },
            {
              label: "Guantes y Mascaras",
            },
          ],
        },
      ],
    },
    {
      label: "Carrito",
      icon: "pi pi-shopping-cart",
      command: () => {
        console.log("Contact clicked");
      },
    },
  ];
  const customColors = {
    backgroundColor: "#0B1957",
    color: "white",
    border: "none",
  };
  const customSize = {
    max_width: "200px",
  };

  return (
    <div>
      <Menubar model={items} style={customColors} className="my-2" />
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
