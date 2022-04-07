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

const stores = [
  {
    mbs: "Marina Bay Sands",
    address: "2 Bayfront Avenue B2-06",
    postal: "Singapore, 018962",
    opening: " Mon - Sun:   10:00 AM - 10:00 PM",
  },
  { or: "Orchard Road" },
  { jc: "Jewel Changi Airport" },
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
  finish: [
    { "#4d5d4c": "Alpine Green" },
    { "#f0f1ec": "Silver" },
    { "#f9e8d3": "Gold" },
    { "#514f4d": "Graphite" },
    { "#a6bfd6": "Sierra Blue" },
  ],
  capacity: ["128GB", "256GB", "512GB", "1TB"],
};

const checkIphone13Pro = [
  {
    product: "iPhone 13 Pro",
    model: "13 Pro",
    finish: "Alpine Green",
    capacity: "256GB",
    mbs: true,
    or: true,
    jc: true,
  },
];

export { products, stores, checkIphone13Pro, phones, iPhone13ProSpecs };
