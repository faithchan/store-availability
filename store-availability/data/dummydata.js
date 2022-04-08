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

export {
  products,
  stores,
  checkIphone13Pro,
  phones,
  iPhone13ProSpecs,
  storeDetails,
};
