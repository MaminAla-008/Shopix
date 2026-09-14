import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import "../styles/Shop.scss";
import ProductImageViewer from "../components/ProductImageViewer/ProductImageViewer";
import {
  FaStar,
  FaShoppingCart,
  FaBolt,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

const baseProducts = [
  {
    id: 1,
    name: "iPhone X (10)",
    price: "$399",
    description:
      "Design compact, écran Retina et appareil photo double objectif.",
    category: "phones",
    image:
      "https://fdn.gsmarena.com/imgroot/reviews/17/apple-iphone-x/thumb/-728x314/gsmarena_001.jpg",
    rating: 4,
  },
  {
    id: 2,
    name: "iPhone 11",
    price: "$449",
    description:
      "Puce A13 Bionic, double appareil photo et finition colorée.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-1.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "iPhone 12",
    price: "$549",
    description:
      "Écran OLED, 5G et design à bords plats.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-2.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "iPhone 13",
    price: "$649",
    description:
      "Autonomie améliorée, caméra avancée et écran Super Retina.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-2.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "iPhone 14",
    price: "$749",
    description:
      "Détection des accidents, caméra 12 MP et puce performante.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-1.jpg",
    rating: 5,
  },
  {
    id: 6,
    name: "iPhone 15",
    price: "$899",
    description:
      "Puce A16 Bionic, appareil photo 48 MP et port USB-C.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",
    rating: 5,
  },
  {
    id: 7,
    name: "iPhone 16",
    price: "$999",
    description:
      "Écran lumineux, caméra Fusion et performances nouvelle génération.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-1.jpg",
    rating: 5,
  },
  {
    id: 8,
    name: "iPhone 17",
    price: "$1,099",
    description:
      "Smartphone premium avec grande autonomie et caméra professionnelle.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-17-1.jpg",
    rating: 5,
  },
  {
    id: 9,
    name: "iPhone 17 Pro Max",
    price: "$1,299",
    description:
      "Modèle premium, écran immersif et performances ultra rapides.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-17-pro-max-1.jpg",
    rating: 5,
  },
  {
    id: 10,
    name: "Samsung Galaxy A15",
    price: "$199",
    description:
      'Écran 6,5 pouces AMOLED, 128 Go et batterie 5000 mAh.',
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a15-5g-1.jpg",
    rating: 5,
  },
  {
    id: 11,
    name: "Samsung Galaxy A35",
    price: "$329",
    description:
      "Écran AMOLED 120 Hz, appareil photo polyvalent et 5G.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a35-1.jpg",
    rating: 4,
  },
  {
    id: 12,
    name: "Samsung Galaxy A55",
    price: "$449",
    description:
      "Design métal, grande autonomie et caméra haute résolution.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a55-1.jpg",
    rating: 5,
  },
  {
    id: 13,
    name: "Samsung Galaxy S23",
    price: "$699",
    description:
      "Compact, rapide et équipé d’un appareil photo professionnel.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-5g-1.jpg",
    rating: 5,
  },
  {
    id: 14,
    name: "Samsung Galaxy S24",
    price: "$799",
    description:
      "Galaxy AI, écran Dynamic AMOLED et performances premium.",
    category: "phones",
    image:
      "https://fdn.gsmarena.com/imgroot/reviews/24/samsung-galaxy-s24/-1220x526/gsmarena_001.jpg",
    rating: 5,
  },
  {
    id: 15,
    name: "Samsung Galaxy S25 Ultra",
    price: "$1,199",
    description:
      "Grand écran, stylet intégré et zoom photo professionnel.",
    category: "phones",
    image:
      "https://fdn.gsmarena.com/imgroot/reviews/25/samsung-galaxy-s25-ultra/-1220x526/gsmarena_002.jpg",
    rating: 5,
  },
  {
    id: 28,
    name: "Oppo Reno 12",
    price: "$429",
    description:
      "Écran AMOLED 120 Hz, caméra portrait et charge rapide 80 W.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno12-1.jpg",
    rating: 4,
  },
  {
    id: 29,
    name: "Realme 12 Pro",
    price: "$349",
    description:
      "Smartphone 5G, écran incurvé et caméra avec zoom portrait.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/realme/realme-12-pro-1.jpg",
    rating: 4,
  },
  {
    id: 30,
    name: "Redmi Note 13 Pro",
    price: "$299",
    description:
      "Écran AMOLED 120 Hz, caméra 200 MP et batterie longue durée.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-pro-1.jpg",
    rating: 5,
  },
  {
    id: 31,
    name: "RedMagic 9 Pro",
    price: "$649",
    description:
      "Téléphone gaming avec ventilateur intégré, écran 120 Hz et grande batterie.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-9-pro-1.jpg",
    backImage:
      "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-9-pro-1.jpg",
    rating: 5,
  },
  {
    id: 32,
    name: "RedMagic 10 Pro",
    price: "$799",
    description:
      "Gaming haute performance, écran immersif et refroidissement avancé.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-10-pro-1.jpg",
    backImage:
      "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-10-pro-2.jpg",
    rating: 5,
  },
  {
    id: 33,
    name: "Realme 13 Pro+",
    price: "$429",
    description:
      "Écran OLED, caméra portrait et charge rapide 80 W.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/realme/realme-13-pro-plus-1.jpg",
    backImage:
      "https://fdn2.gsmarena.com/vv/pics/realme/realme-13-pro-plus-2.jpg",
    rating: 5,
  },
  {
    id: 34,
    name: "Redmi Note 14 Pro+",
    price: "$379",
    description:
      "Écran AMOLED, caméra haute résolution et batterie longue durée.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-14-pro-plus-5g-1.jpg",
    backImage:
      "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-14-pro-plus-5g-2.jpg",
    rating: 5,
  },
  {
    id: 35,
    name: "Xiaomi 14",
    price: "$699",
    description:
      "Smartphone premium compact avec optiques Leica et écran AMOLED.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-1.jpg",
    backImage:
      "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-2.jpg",
    rating: 5,
  },
  {
    id: 36,
    name: "Xiaomi 14 Ultra",
    price: "$999",
    description:
      "Caméra professionnelle Leica, écran LTPO et performances premium.",
    category: "phones",
    image:
      "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-ultra-1.jpg",
    backImage:
      "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-ultra-2.jpg",
    rating: 5,
  },
  {
    id: 16,
    name: "Casque JBL Tune 760NC Noir",
    price: "$79",
    description:
      "Casque Bluetooth noir avec réduction de bruit et 35 heures d’autonomie.",
    category: "headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    rating: 5,
  },
  {
    id: 17,
    name: "Casque JBL Live 660NC Bleu",
    price: "$129",
    description:
      "Casque circum-aural bleu, son puissant et réduction de bruit adaptative.",
    category: "headphones",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944",
    rating: 5,
  },
  {
    id: 18,
    name: "Sony WH-1000XM5 Argent",
    price: "$349",
    description:
      "Casque premium argent avec réduction de bruit et son haute résolution.",
    category: "headphones",
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440",
    rating: 5,
  },
  {
    id: 19,
    name: "Sony WH-CH720N Blanc",
    price: "$149",
    description:
      "Casque léger blanc, confortable et doté d’une réduction de bruit active.",
    category: "headphones",
    image:
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a",
    rating: 4,
  },
  {
    id: 20,
    name: "Beats Studio Pro Rouge",
    price: "$249",
    description:
      "Casque sans fil rouge, audio immersif et mode transparence.",
    category: "headphones",
    image:
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29",
    rating: 5,
  },
  {
    id: 21,
    name: "Razer Barracuda Gaming Vert",
    price: "$159",
    description:
      "Casque gaming vert avec micro, son surround et confort longue session.",
    category: "headphones",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
    rating: 4,
  },
  {
    id: 22,
    name: "Apple AirPods 3 Blanc",
    price: "$149",
    description:
      "Écouteurs sans fil blancs avec audio spatial et boîtier de charge.",
    category: "earbuds",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
    rating: 5,
  },
  {
    id: 23,
    name: "Apple AirPods Pro 2 Blanc",
    price: "$249",
    description:
      "Écouteurs avec réduction de bruit active, audio adaptatif et USB-C.",
    category: "earbuds",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    rating: 5,
  },
  {
    id: 24,
    name: "Samsung Galaxy Buds2 Pro Violet",
    price: "$179",
    description:
      "Écouteurs violets avec audio 360 degrés et résistance à l’eau.",
    category: "earbuds",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    rating: 5,
  },
  {
    id: 25,
    name: "Sony WF-1000XM5 Noir",
    price: "$279",
    description:
      "Écouteurs noirs avec réduction de bruit et étui de charge rapide.",
    category: "earbuds",
    image:
      "https://images.unsplash.com/photo-1606041011872-596597976b25",
    rating: 5,
  },
  {
    id: 26,
    name: "JBL Live Pro 2 Bleu",
    price: "$129",
    description:
      "Écouteurs bleus, basses puissantes et autonomie jusqu’à 40 heures.",
    category: "earbuds",
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
    rating: 4,
  },
  {
    id: 27,
    name: "Nothing Ear Transparent",
    price: "$149",
    description:
      "Écouteurs transparents au design moderne, ANC et son détaillé.",
    category: "earbuds",
    image:
      "https://images.unsplash.com/photo-1608156639585-b3a032ef9689",
    rating: 4,
  },
];

const expandedPhoneCatalog = [
  ["iPhone", "iPhone 17 Pro", "$1,199", "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-17-pro-1.jpg", "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-17-pro-2.jpg"],
  ["Samsung", "Galaxy A25 5G", "$279", "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a15-5g-1.jpg", "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a15-5g-2.jpg"],
  ["Samsung", "Galaxy A36 5G", "$379", "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a35-1.jpg", "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a35-2.jpg"],
  ["Samsung", "Galaxy A56 5G", "$499", "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a55-1.jpg", "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a55-2.jpg"],
  ["Samsung", "Galaxy S25", "$899", "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-5g-1.jpg", "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-5g-2.jpg"],
  ["Realme", "Realme 11 Pro+", "$329", "https://fdn2.gsmarena.com/vv/pics/realme/realme-11-pro-plus-1.jpg", "https://fdn2.gsmarena.com/vv/pics/realme/realme-11-pro-plus-2.jpg"],
  ["Realme", "Realme 12 Pro+", "$399", "https://fdn2.gsmarena.com/vv/pics/realme/realme-12-pro-plus-1.jpg", "https://fdn2.gsmarena.com/vv/pics/realme/realme-12-pro-plus-2.jpg"],
  ["Realme", "Realme 13 Pro+", "$429", "https://fdn2.gsmarena.com/vv/pics/realme/realme-13-pro-plus-1.jpg", "https://fdn2.gsmarena.com/vv/pics/realme/realme-13-pro-plus-2.jpg"],
  ["Realme", "Realme GT 6", "$549", "https://fdn2.gsmarena.com/vv/pics/realme/realme-13-pro-plus-1.jpg", "https://fdn2.gsmarena.com/vv/pics/realme/realme-13-pro-plus-2.jpg"],
  ["Realme", "Realme GT 7 Pro", "$699", "https://fdn2.gsmarena.com/vv/pics/realme/realme-12-pro-plus-1.jpg", "https://fdn2.gsmarena.com/vv/pics/realme/realme-12-pro-plus-2.jpg"],
  ["Realme", "Realme 12 5G", "$249", "https://fdn2.gsmarena.com/vv/pics/realme/realme-12-pro-1.jpg", "https://fdn2.gsmarena.com/vv/pics/realme/realme-12-pro-2.jpg"],
  ["Realme", "Realme C67", "$179", "https://fdn2.gsmarena.com/vv/pics/realme/realme-12-pro-1.jpg", "https://fdn2.gsmarena.com/vv/pics/realme/realme-12-pro-2.jpg"],
  ["Realme", "Realme Narzo 70 Pro", "$299", "https://fdn2.gsmarena.com/vv/pics/realme/realme-13-pro-plus-1.jpg", "https://fdn2.gsmarena.com/vv/pics/realme/realme-13-pro-plus-2.jpg"],
  ["RedMagic", "RedMagic 8 Pro", "$599", "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-10-pro-1.jpg", "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-10-pro-2.jpg"],
  ["RedMagic", "RedMagic 9S Pro", "$699", "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-9s-pro-1.jpg", "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-10-pro-2.jpg"],
  ["RedMagic", "RedMagic 7", "$499", "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-7-1.jpg", "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-7-2.jpg"],
  ["RedMagic", "RedMagic 7S Pro", "$549", "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-7-1.jpg", "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-7-2.jpg"],
  ["RedMagic", "RedMagic 6 Pro", "$399", "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-7-1.jpg", "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-7-2.jpg"],
  ["RedMagic", "RedMagic 6R", "$349", "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-9-pro-1.jpg", "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-10-pro-2.jpg"],
  ["RedMagic", "RedMagic 5G", "$299", "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-7-1.jpg", "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-7-2.jpg"],
  ["RedMagic", "RedMagic 10 Air", "$599", "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-10-pro-1.jpg", "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-10-pro-2.jpg"],
  ["Redmi", "Redmi Note 13", "$229", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-1.jpg", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-2.jpg"],
  ["Redmi", "Redmi Note 12 Pro", "$279", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-12-pro-1.jpg", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-12-pro-2.jpg"],
  ["Redmi", "Redmi K70", "$399", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k70-1.jpg", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k70-2.jpg"],
  ["Redmi", "Redmi Note 14 Pro", "$329", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-14-pro-plus-5g-1.jpg", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-14-pro-plus-5g-2.jpg"],
  ["Redmi", "Redmi 13C", "$159", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-1.jpg", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-2.jpg"],
  ["Redmi", "Redmi Note 11 Pro", "$219", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-12-pro-1.jpg", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-12-pro-2.jpg"],
  ["Redmi", "Redmi Note 10 Pro", "$199", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-1.jpg", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-2.jpg"],
  ["Redmi", "Redmi K80", "$499", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k70-1.jpg", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k70-2.jpg"],
  ["Xiaomi", "Xiaomi 13", "$599", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-1.jpg", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-2.jpg"],
  ["Xiaomi", "Xiaomi 13 Pro", "$799", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-1.jpg", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-2.jpg"],
  ["Xiaomi", "Xiaomi 14T", "$549", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14t-1.jpg", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14t-2.jpg"],
  ["Xiaomi", "Xiaomi 14T Pro", "$749", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14t-pro-1.jpg", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14t-pro-2.jpg"],
  ["Xiaomi", "Xiaomi 13T", "$499", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14t-1.jpg", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14t-2.jpg"],
  ["Xiaomi", "Xiaomi 12", "$399", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-1.jpg", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-2.jpg"],
  ["Xiaomi", "Xiaomi 12 Pro", "$499", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14t-pro-1.jpg", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14t-pro-2.jpg"],
  ["Xiaomi", "Xiaomi Mi 11", "$299", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-1.jpg", "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-2.jpg"],
  ["Oppo", "Oppo Reno 11", "$379", "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x8-1.jpg", "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x8-2.jpg"],
  ["Oppo", "Oppo Find X8", "$799", "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x8-1.jpg", "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x8-2.jpg"],
  ["Oppo", "Oppo Find X7 Ultra", "$899", "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x7-ultra-1.jpg", "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x7-ultra-2.jpg"],
  ["Oppo", "Oppo A79", "$229", "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x8-1.jpg", "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x8-2.jpg"],
  ["Oppo", "Oppo Reno 10 Pro", "$499", "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x7-ultra-1.jpg", "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x7-ultra-2.jpg"],
  ["Oppo", "Oppo Reno 10", "$349", "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x8-1.jpg", "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x8-2.jpg"],
  ["Oppo", "Oppo A98", "$299", "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x7-ultra-1.jpg", "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x7-ultra-2.jpg"],
  ["Oppo", "Oppo F25 Pro", "$329", "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x8-1.jpg", "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x8-2.jpg"],
  ["Oppo", "Oppo Find N3", "$1,099", "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x7-ultra-1.jpg", "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x7-ultra-2.jpg"],
  ["Pixel", "Google Pixel 9 Pro XL", "$1,099", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-pro-xl-1.jpg", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-pro-xl-2.jpg"],
  ["Pixel", "Google Pixel 9 Pro", "$999", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-pro-xl-1.jpg", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-pro-xl-2.jpg"],
  ["Pixel", "Google Pixel 9", "$799", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-1.jpg", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-1.jpg"],
  ["Pixel", "Google Pixel 8 Pro", "$799", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-8-pro-1.jpg", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-8-pro-1.jpg"],
  ["Pixel", "Google Pixel 8", "$599", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-8-1.jpg", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-8-1.jpg"],
  ["Pixel", "Google Pixel 7 Pro", "$649", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-pro-xl-1.jpg", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-pro-xl-2.jpg"],
  ["Pixel", "Google Pixel 7", "$499", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-8-1.jpg", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-8-1.jpg"],
  ["Pixel", "Google Pixel 6 Pro", "$499", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-6-pro-1.jpg", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-6-1.jpg"],
  ["Pixel", "Google Pixel 6", "$399", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-6-1.jpg", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-6-1.jpg"],
  ["Pixel", "Google Pixel 4 XL", "$299", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-4-xl-1.jpg", "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-4-xl-1.jpg"],
].map(([brand, name, price, image, backImage], index) => ({
  id: 100 + index,
  name,
  price,
  description: `${brand} ${name} avec image face et dos, modèle sélectionné.`,
  category: "phones",
  image,
  backImage,
  rating: 5,
}));

const products = [...baseProducts, ...expandedPhoneCatalog];

const categories = [
  {
    slug: "phones",
    name: "Téléphone portable",
    image:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-1.jpg",
  },
  {
    slug: "headphones",
    name: "Casque Bluetooth",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
  },
  {
    slug: "earbuds",
    name: "Écouteurs sans fil",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
  },
];

const phoneBrands = [
  {
    slug: "iphone",
    name: "iPhone",
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",
  },
  {
    slug: "samsung",
    name: "Samsung",
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-5g-1.jpg",
  },
  {
    slug: "redmagic",
    name: "RedMagic",
    image: "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-10-pro-1.jpg",
  },
  {
    slug: "realme",
    name: "Realme",
    image: "https://fdn2.gsmarena.com/vv/pics/realme/realme-13-pro-plus-1.jpg",
  },
  {
    slug: "redmi",
    name: "Redmi",
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-14-pro-plus-5g-1.jpg",
  },
  {
    slug: "xiaomi",
    name: "Xiaomi",
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-1.jpg",
  },
  {
    slug: "oppo",
    name: "Oppo",
    image: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x8-1.jpg",
  },
  {
    slug: "pixel",
    name: "Google Pixel",
    image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-pro-xl-1.jpg",
  },
];

export default function Shop({
  onAddToCart,
  onBuyNow,
  message,
  clearMessage,
}) {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const selectedBrand = searchParams.get("brand");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    if (!newsletterEmail.trim()) {
      setNewsletterMessage("Veuillez saisir votre adresse email.");
      return;
    }

    setNewsletterMessage("Merci, votre inscription est confirmée.");
    setNewsletterEmail("");
  };

  const activeCategory = categories.find(
    (category) => category.slug === selectedCategory
  );
  const activeBrand = phoneBrands.find((brand) => brand.slug === selectedBrand);
  const visibleProducts = activeBrand
    ? products.filter(
        (product) =>
          product.category === "phones" &&
          product.name.toLowerCase().startsWith(activeBrand.name.toLowerCase())
      )
    : activeCategory
      ? products.filter((product) => product.category === activeCategory.slug)
      : products;

  useEffect(() => {
    if (!activeCategory) {
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById("products")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [activeCategory, activeBrand]);

  return (
    <div className="shop-page">

      <Hero />

      <section className="categories phone-brands">

        <div className="title">
          <span>MARQUES DE TÉLÉPHONES</span>
          <h2>Choisir une marque</h2>
          <p>Retrouvez tous les modèles d’une même marque.</p>
        </div>

        <div className="category-grid">
          {phoneBrands.map((brand) => (
            <Link
              className="category-card"
              key={brand.slug}
              to={`/shop?category=phones&brand=${brand.slug}`}
            >
              <img src={brand.image} alt={brand.name} />
              <div className="category-overlay">
                <h3>{brand.name}</h3>
                <span>
                  Voir les modèles
                  <FaArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </section>


      {/* =========================
          PRODUCTS
      ========================= */}
      <section
        className="products"
        id="products"
      >

        <div className="title">

          <span>NOTRE SÉLECTION</span>

          <h2>
            {activeBrand?.name || activeCategory?.name || "Produits populaires"}
          </h2>

          <p>
            Les meilleures ventes sélectionnées pour vous.
          </p>

        </div>


        <div className="product-grid">

          {visibleProducts.map((item) => (

            <article
              className="card"
              key={item.id}
            >

              <div className="image">
                <ProductImageViewer product={item} />

                <span className="product-badge">
                  Populaire
                </span>

              </div>


              <div className="card-content">

                <div className="stars">

                  {[...Array(5)].map((_, index) => (

                    <FaStar
                      key={index}
                      className={
                        index < item.rating
                          ? "active"
                          : "inactive"
                      }
                    />

                  ))}

                  <span>
                    ({item.rating}.0)
                  </span>

                </div>


                <h3>{item.name}</h3>

                <p className="product-description">
                  {item.description}
                </p>


                <div className="product-bottom">

                  <h4>{item.price}</h4>

                  <button
                    type="button"
                    className="quick-cart"
                    onClick={() =>
                      onAddToCart?.(item)
                    }
                    aria-label={`Ajouter ${item.name} au panier`}
                  >
                    <FaShoppingCart />
                  </button>

                </div>


                <div className="card-actions">

                  <button
                    type="button"
                    onClick={() =>
                      onAddToCart?.(item)
                    }
                  >
                    Ajouter au panier
                  </button>

                  <button
                    type="button"
                    className="buy-button"
                    onClick={() =>
                      onBuyNow?.(item)
                    }
                  >
                    Acheter
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

        {visibleProducts.length === 0 && (
          <p className="account-message">
            Aucun produit disponible dans cette catégorie.
          </p>
        )}

      </section>


      {/* =========================
          CATEGORIES
      ========================= */}
      <section className="categories">

        <div className="title">

          <span>EXPLOREZ</span>

          <h2>Parcourir les catégories</h2>

          <p>
            Explorez nos collections les plus prisées.
          </p>

        </div>


        <div className="category-grid">

          {categories.map((category) => (

            <Link
              className="category-card"
              key={category.name}
              to={`/shop?category=${category.slug}`}
            >

              <img
                src={category.image}
                alt={category.name}
              />

              <div className="category-overlay">

                <h3>{category.name}</h3>

                <span>
                  Explorer
                  <FaArrowRight />
                </span>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* =========================
          DEALS
      ========================= */}
      <section className="deals">

        <div className="deal-content">

          <span className="deal-badge">
            Offre limitée
          </span>

          <h2>
            Jusqu’à
            <span> 50%</span>
            <br />
            de réduction
          </h2>

          <p>
            Ne manquez pas nos meilleures promotions
            du moment.
          </p>

          <button
            type="button"
            onClick={() =>
              onBuyNow?.(products[0])
            }
            className="shop-primary-btn"
          >
            Profiter de l’offre
            <FaArrowRight />
          </button>

        </div>


        <div className="deal-image">

          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="Offres promotionnelles"
          />

        </div>

      </section>


      {/* =========================
          NEWSLETTER
      ========================= */}
      <section className="newsletter">

        <span>RESTEZ INFORMÉ</span>

        <h2>
          Abonnez-vous à notre newsletter
        </h2>

        <p>
          Recevez des offres exclusives et les nouveautés
          chaque semaine.
        </p>


        <form
          className="newsletter-box"
          onSubmit={handleNewsletterSubmit}
        >

          <input
            type="email"
            placeholder="Entrez votre email"
            aria-label="Votre adresse email"
            value={newsletterEmail}
            onChange={(event) => setNewsletterEmail(event.target.value)}
          />

          <button type="submit">
            S’abonner
          </button>

        </form>

        {newsletterMessage && (
          <p className="account-message">{newsletterMessage}</p>
        )}

      </section>


      {/* =========================
          MESSAGE
      ========================= */}
      {message && (

        <p
          className="account-message"
          onClick={clearMessage}
        >
          {message}
        </p>

      )}


      {/* =========================
          FOOTER
      ========================= */}
      <footer className="footer">

        <div className="footer-logo">

          <h2>
            Shop<span>io</span>
          </h2>

          <p>
            Votre destination shopping premium.
          </p>

        </div>


        <div className="footer-links">

          <div>

            <h4>Boutique</h4>

            <a href="/">
              Accueil
            </a>

            <a href="/categories">
              Catégories
            </a>

            <a href="/deals">
              Deals
            </a>

          </div>


          <div>

            <h4>Support</h4>

            <a href="/pages">
              Contact
            </a>

            <a href="/pages">
              FAQ
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}