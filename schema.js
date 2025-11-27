const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VSOLARIZE",
  "url": "https://www.vsolarize.com/",
  "logo": "https://www.vsolarize.com/logo.png",
  "image": [
    "https://www.vsolarize.com/logo.png"
  ],
  "telephone": "+91-8882530739",
  "priceRange": "₹₹",
  "description": "VSOLARIZE provides premium solar installation services — Residential 2kW–20kW, Industrial 50kW+, On-Grid, Hybrid & Off-Grid solar systems. PM Surya Ghar Subsidy up to ₹1,08,000 with guaranteed credit in 15 days.",
  
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lalkuan",
    "addressLocality": "Ghaziabad",
    "addressRegion": "UP",
    "postalCode": "201009",
    "addressCountry": "IN"
  },

  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.6693,
    "longitude": 77.4564
  },

  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  }],

  "areaServed": [
    "Lalkuan Ghaziabad", "Wave City Ghaziabad", "Indirapuram", "Vaishali", "Vasundhara", "Sahibabad",
    "Mohan Nagar", "Crossing Republik", "Raj Nagar", "Raj Nagar Extension", "Tronica City",
    "Muradnagar", "Modinagar", "Dlf Ankur Vihar", "Shalimar Garden", "Khoda", "Sanjay Nagar",
    "Kavi Nagar", "Hapur Road", "Sihani Gate", "Chiranjeev Vihar", "Nehru Nagar", "Nandgram",
    "Govindpuram", "Navyug Market", "Model Town", "Dasna", "Dasna Gate", "Ahinsa Khand",
    "Nyay Khand", "Shipra Sun City", "Pratap Vihar", "Shastri Nagar",
    "Gautam Buddh Nagar", "Noida", "Noida Sector 62", "Noida Sector 18", "Greater Noida",
    "Greater Noida West", "Dadri", "Jewar", "Sector 1 Noida", "Sector 2 Noida",
    "Rajnagar Ghaziabad", "Ghaziabad City"
  ],

  "keywords": "solar installer near me, solar panel near me, best solar installer Ghaziabad, Waaree solar panel distributor, Tata solar dealer Noida, Adani solar distributor, Deye hybrid inverter installer, lithium battery dealer near me",

  "makesOffer": [
    {
      "@type": "Offer",
      "name": "PM Surya Ghar Yojana Subsidy",
      "description": "Subsidy up to ₹1,08,000 on On-Grid & Hybrid solar systems."
    },
    {
      "@type": "Offer",
      "name": "Hybrid Solar Systems 2kW–15kW",
      "description": "Deye, Eastman, Amaze, Luminous & UTL hybrid solar systems."
    },
    {
      "@type": "Offer",
      "name": "On-Grid Solar Systems 2kW–20kW",
      "description": "TopCon 590W solar panels from Waaree, Adani, Tata, Luminous, Eastman."
    },
    {
      "@type": "Offer",
      "name": "Off-Grid Solar Systems 2kW–20kW",
      "description": "Off-grid systems with lithium battery backup (Livguard, Eastman, Luminous)."
    }
  ],

  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Solar Products & Brands",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "590W TopCon Solar Panels",
          "brand": [
            { "@type": "Brand", "name": "Waaree" },
            { "@type": "Brand", "name": "Adani" },
            { "@type": "Brand", "name": "Tata" },
            { "@type": "Brand", "name": "Eastman" },
            { "@type": "Brand", "name": "Amaze" },
            { "@type": "Brand", "name": "Luminous" }
          ]
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Hybrid Solar Inverters",
          "brand": [
            { "@type": "Brand", "name": "Deye" },
            { "@type": "Brand", "name": "Eastman" },
            { "@type": "Brand", "name": "Luminous" },
            { "@type": "Brand", "name": "Amaze" },
            { "@type": "Brand", "name": "UTL" }
          ]
        }
      }
    ]
  },

  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "ratingCount": "210"
  },

  "hasMap": "https://www.google.com/maps/search/?api=1&query=Lalkuan+Ghaziabad"
};

// Inject script into HEAD
const script = document.createElement("script");
script.type = "application/ld+json";
script.text = JSON.stringify(schemaData);
document.head.appendChild(script);
