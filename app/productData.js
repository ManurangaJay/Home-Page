import product1 from "../public/images/Camera.jpg";
import product2 from "../public/images/Electric_Kettle.jpg";
import product3 from "../public/images/Headphone.jpg";
import product4 from "../public/images/Speaker.jpg";
import product5 from "../public/images/Watch.jpg";
import product6 from "../public/images/Table_Fan.jpg";
import product7 from "../public/images/SmartPhone.png";
import product8 from "../public/images/teddy.png";
import product9 from "../public/images/SchoolBag.png";
import product10 from "../public/images/Men'sWallet.png";
import product11 from "../public/images/women'sWallet.png";
import product12 from "../public/images/mug.png";
import product13 from "../public/images/3.5-Type-C_Adapter.png";
import product14 from "../public/images/Type-C_to_HDMI_Converter.png";
import product15 from "../public/images/Bulb.png";
import product16 from "../public/images/Charger.png";
import product17 from "../public/images/Gaming_KeyBoard.png";
import product18 from "../public/images/Gas_cooker.png";
import product19 from "../public/images/Hot_Plate.png";
import product20 from "../public/images/KeyBoard.png";
import product21 from "../public/images/Router.png";
import product22 from "../public/images/Monitor.png";
import product23 from "../public/images/Mouse.png";
import product24 from "../public/images/Subwooper.png";
import product25 from "../public/images/Laptop_Stand.png";
import product26 from "../public/images/Wallet_Black.png";
import product27 from "../public/images/Wallet_Pink.png";
import product28 from "../public/images/JBL_Handsfree.png";
import product29 from "../public/images/Handsfree.png";
import product30 from "../public/images/Shoes.png";

const products = [
  {
    image: product1,
    name: "Camera",
    price: 15000,
    discountedPrice: 14000,
    description: "description of Camera.",
    rating: 4,
    reviewsCount: 250,
  },
  {
    image: product2,
    name: "Electric Kettle",
    price: 3200,
    discountedPrice: 3000,
    description: "description Electric Kettle",
    rating: 5,
    reviewsCount: 230,
  },
  {
    image: product3,
    name: "Headphone",
    price: 10000,
    discountedPrice: 8000,
    description: "description of Headphone.",
    rating: 3,
    reviewsCount: 220,
  },
  {
    image: product4,
    name: "Speaker",
    price: 8000,
    discountedPrice: 7500,
    description: "description of Speaker.",
    rating: 4,
    reviewsCount: 210,
  },
  {
    image: product5,
    name: "Watch",
    price: 4500,
    discountedPrice: 4000,
    description: "description of Watch.",
    rating: 5,
    reviewsCount: 150,
  },
  {
    image: product6,
    name: "Table Fan",
    price: 6200,
    discountedPrice: 5200,
    description: "description of Table Fan.",
    rating: 3,
    reviewsCount: 130,
  },
  {
    image: product7,
    name: "Smart Phone",
    price: 60000,
    discountedPrice: 55000,
    description: "description of Smart Phone.",
    rating: 4,
    reviewsCount: 180,
  },
  {
    image: product8,
    name: "Teddy Bear",
    price: 3500,
    description: "description of Teddy Bear.",
    rating: 3,
    reviewsCount: 300,
  },
  {
    image: product9,
    name: "SchoolBag",
    price: 6500,
    description: "description of product 8.",
    rating: 5,
    reviewsCount: 275,
  },
  {
    image: product10,
    name: "Men's Wallet",
    price: 3500,
    description: "description of Men's Wallet.",
    rating: 3,
    reviewsCount: 245,
  },
  {
    image: product11,
    name: "Women's Wallet",
    price: 2800,
    description: "description of women'sWallet.",
    rating: 4,
    reviewsCount: 75,
  },
  {
    image: product12,
    name: "Mug",
    price: 1200,
    description: "description of Mug.",
    rating: 5,
    reviewsCount: 386,
  },
  {
    image: product13,
    name: "3.5-Type-C_Adapter",
    price: 1200,
    description: "description of 3.5-Type-C_Adapter.",
    rating: 5,
    reviewsCount: 300,
  },
  {
    image: product14,
    name: "Type-C_to_HDMI_Converter",
    price: 1200,
    description: "Type-C_to_HDMI_Converter.",
    rating: 5,
    reviewsCount: 28,
  },
  {
    image: product15,
    name: "Bulb",
    price: 1200,
    discountedPrice: 1000,
    description: "description of Bulb.",
    rating: 5,
    reviewsCount: 800,
  },
  {
    image: product16,
    name: "Charger",
    price: 1200,
    description: "description of Charger.",
    rating: 450,
    reviewsCount: 28,
  },
  {
    image: product17,
    name: "Gaming_KeyBoard",
    price: 2800,
    discountedPrice: 2500,
    description: "description of Gaming_KeyBoard.",
    rating: 800,
    reviewsCount: 28,
  },
  {
    image: product18,
    name: "Gas_cooker",
    price: 3000,
    discountedPrice: 2500,
    description: "description of Hot_Plate.",
    description: "description of Gas_cooker.",
    rating: 5,
    reviewsCount: 350,
  },
  {
    image: product19,
    name: "Hot_Plate",
    price: 5000,
    discountedPrice: 4200,
    description: "description of Hot_Plate.",
    rating: 5,
    reviewsCount: 28,
  },
  {
    image: product20,
    name: "KeyBoard",
    price: 1200,
    description: "description of KeyBoard.",
    rating: 5,
    reviewsCount: 280,
  },
  {
    image: product21,
    name: "Router",
    price: 1200,
    description: "description of Router.",
    rating: 5,
    reviewsCount: 28,
  },
  {
    image: product22,
    name: "Monitor",
    price: 20000,
    discountedPrice: 15000,
    description: "description of Monitor.",
    rating: 5,
    reviewsCount: 257,
  },
  {
    image: product23,
    name: "Mouse",
    price: 1200,
    discountedPrice: 1000,
    description: "description of Mouse.",
    rating: 5,
    reviewsCount: 28,
  },
  {
    image: product24,
    name: "Subwooper",
    price: 6000,
    discountedPrice: 5000,
    description: "description of Subwooper.",
    rating: 5,
    reviewsCount: 28,
  },
  {
    image: product25,
    name: "Laptop_Stand",
    price: 1200,
    discountedPrice: 1000,
    description: "description of Laptop_Stand.",
    rating: 5,
    reviewsCount: 260,
  },
  {
    image: product26,
    name: "Wallet_Black",
    price: 1200,
    discountedPrice: 1000,
    description: "description of Wallet_Black.",
    rating: 5,
    reviewsCount: 260,
  },
  {
    image: product27,
    name: "Wallet_Pink",
    price: 1200,
    discountedPrice: 1000,
    description: "description of Wallet_Pink.",
    rating: 5,
    reviewsCount: 260,
  },
  {
    image: product28,
    name: "JBL_Handsfree",
    price: 1200,
    discountedPrice: 1000,
    description: "description of JBL_Handsfree.",
    rating: 5,
    reviewsCount: 260,
  },
  {
    image: product29,
    name: "Handsfree",
    price: 1200,
    discountedPrice: 1000,
    description: "description of Laptop_Stand.",
    rating: 5,
    reviewsCount: 260,
  },
  {
    image: product30,
    name: "Shoes",
    price: 1200,
    discountedPrice: 1000,
    description: "description of Shoes.",
    rating: 5,
    reviewsCount: 260,
  },
];

export default products;
