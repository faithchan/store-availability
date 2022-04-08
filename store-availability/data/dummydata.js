const products = [
  "Mac",
  "iPhone",
  "iPad",
  "Watch",
  "AirPods",
  "AirTag",
  "AppleTv",
  "Homepod Mini",
  "Accessories",
];

const storeDetails = [
  {
    shop: "Marina Bay Sands",
    address: "2 Bayfront Avenue B2-06",
    postal: "Singapore, 018962",
    opening: " Mon - Sun:   10:00 AM - 10:00 PM",
  },
  {
    shop: "Orchard Road",
    address: "270 Orchard Rd",
    postal: "Singapore, 238857",
    opening: " Mon - Sun:   10:00 AM - 10:00 PM",
  },
  {
    shop: "Jewel Changi Airport",
    address: "78 Airport Blvd. #02-234",
    postal: "Singapore, 819666",
    opening: " Mon - Sun:   10:00 AM - 10:00 PM",
  },
];

const stores = [
  "All Stores",
  "Jewel Changi Airport",
  "Marina Bay Sands",
  "Orchard Road",
];

const phones = [
  "iPhone 13",
  "iPhone 13 Pro",
  "iPhone SE",
  "iPhone 12",
  "iPhone 11",
];

const iPhone13ProSpecs = {
  product: "iPhone 13 Pro",
  model: ["13 Pro", "13 Pro Max"],
  finish: {
    alpinegreen: "Alpine Green",
    silver: "Silver",
    gold: "Gold",
    graphite: "Graphite",
    sierrablue: "Sierra Blue",
  },
  capacity: ["128GB", "256GB", "512GB", "1TB"],
};

const checkIphone13Pro = [
  {
    product: "iPhone 13 Pro",
    model: "13 Pro",
    finish: "Alpine Green",
    capacity: "256GB",
    price: "",
    mbs: true,
    or: true,
    jc: true,
  },
];

const phonePrices = [
  {
    model: "13 Pro",
    capacity: "128GB",
    price: "S$1,649.00",
  },
  {
    model: "13 Pro",
    capacity: "256GB",
    price: "S$1,819.00",
  },
  {
    model: "13 Pro",
    capacity: "512GB",
    price: "S$2,149.00",
  },
  {
    model: "13 Pro",
    capacity: "1TB",
    price: "S$2,479.00",
  },
  {
    model: "13 Pro Max",
    capacity: "128GB",
    price: "S$1,799.00",
  },
  {
    model: "13 Pro Max",
    capacity: "256GB",
    price: "S$1,969.00",
  },
  {
    model: "13 Pro Max",
    capacity: "512GB",
    price: "S$2,299.00",
  },
  {
    model: "13 Pro Max",
    capacity: "1TB",
    price: "S$2,629.00",
  },
];

export {
  products,
  stores,
  checkIphone13Pro,
  phones,
  iPhone13ProSpecs,
  storeDetails,
  phonePrices,
};
