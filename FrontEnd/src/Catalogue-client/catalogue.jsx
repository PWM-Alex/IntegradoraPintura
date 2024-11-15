import React from "react";
import { Menubar } from "primereact/menubar";
import "primeicons/primeicons.css";
import  CardPrime  from "./components/Card";

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
  const cardData = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the forth card.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the forth card.",
      image: "https://via.placeholder.com/300",
    },
  ];
  

  return (
    <div>
      {/* Menu */}
      <Menubar model={items} className="my-2" />
      {/* Cards */}
      <div className="grid ">
        {cardData.map((card) => (
          <div key={card.id} className="col-2 flex align-items-center justify-content-center ">
            <CardPrime
              title={card.title}
              description={card.description}
              image={card.image}
              onAction={() => handleAction(card.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
