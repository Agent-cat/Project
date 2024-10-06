import {
  House,
  MessagesSquare,
  Heart,
  Settings,
  Search,
  Globe,
} from "lucide-react";

export const SidebarLinks = [
  {
    name: "Home",
    icon: <House />,
    link: "/",
  },
  {
    name: "Messages",
    icon: <MessagesSquare />,
    link: "/messages",
  },
  {
    name: "Discover",
    icon: <Globe />,
    link: "/discover",
  },
  {
    name: "Favorites",
    icon: <Heart />,
    link: "/favorites",
  },
  {
    name: "Settings",
    icon: <Settings />,
    link: "/settings",
  },
];

export const properties = [
  {
    id: 1,
    name: "Sunshine Apartments",
    bhk: [1, 2, 3],
    address: "123 Green Street, Mumbai, Maharashtra",
    ownerName: "Rajesh Patel",
    location: "Andheri West",
    rentOrPrice: 25000, // in rupees
    starRating: 4.5,
    numberOfReviews: 78,
    details: "Modern apartments with spacious balconies and 24/7 security.",
    images: [
      "https://imgs.search.brave.com/yrVurUG8riZgc2KTbsY2td56WmAmJgKXNNjxgQfWA2Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvUGhv/dG9GVExQL0xpZmVz/dHlsZS0xMDMzNDU3/MjUwLmpwZw",
      "https://imgs.search.brave.com/LMHlC3j3QCA-4gnldNnY34k1JaB8d7CgHh9b7HxmmS4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2hvbWUvYmx1cmJz/L3Zpc3VhbHMud2Vi/cA",
      "https://imgs.search.brave.com/w2HND3H2u2ORdvuYc96qSZUj_BxcJM2mKSEhQ2E_04I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzQxLzcxLzkz/LzM2MF9GXzc0MTcx/OTM5NF9DOUJQM1li/aVhTSjdXc3BTREx0/S2RZeFpLS1dsZjBK/ei5qcGc",
    ],
  },
  {
    id: 2,
    name: "Royal Heights",
    bhk: [2, 3, 4],
    address: "456 Park Avenue, Bangalore, Karnataka",
    ownerName: "Priya Sharma",
    location: "Indiranagar",
    rentOrPrice: 4500000, // in rupees
    starRating: 4.8,
    numberOfReviews: 126,
    details: "Luxury condos with swimming pool, gym, and landscaped gardens.",
    images: [
      "https://example.com/royal-heights-1.jpg",
      "https://example.com/royal-heights-2.jpg",
      "https://example.com/royal-heights-3.jpg",
    ],
  },
  {
    id: 3,
    name: "Green Valley Villas",
    bhk: [3, 4],
    address: "789 Hillside Road, Chennai, Tamil Nadu",
    ownerName: "Vikram Reddy",
    location: "Adyar",
    rentOrPrice: 35000, // in rupees
    starRating: 4.2,
    numberOfReviews: 52,
    details: "Eco-friendly villas with solar panels and organic garden.",
    images: [
      "https://example.com/green-valley-villas-1.jpg",
      "https://example.com/green-valley-villas-2.jpg",
      "https://example.com/green-valley-villas-3.jpg",
    ],
  },
  {
    id: 4,
    name: "Seaside Residency",
    bhk: [1, 2],
    address: "101 Beach Road, Goa",
    ownerName: "Maria Fernandes",
    location: "Calangute",
    rentOrPrice: 30000, // in rupees
    starRating: 4.6,
    numberOfReviews: 95,
    details:
      "Beachfront apartments with stunning ocean views and private access to the beach.",
    images: [
      "https://example.com/seaside-residency-1.jpg",
      "https://example.com/seaside-residency-2.jpg",
      "https://example.com/seaside-residency-3.jpg",
    ],
  },
  {
    id: 5,
    name: "Mountain View Cottages",
    bhk: [2, 3],
    address: "234 Pine Street, Shimla, Himachal Pradesh",
    ownerName: "Amit Singh",
    location: "Mall Road",
    rentOrPrice: 3200000, // in rupees
    starRating: 4.4,
    numberOfReviews: 68,
    details:
      "Cozy cottages with fireplaces and panoramic views of the Himalayas.",
    images: [
      "https://example.com/mountain-view-cottages-1.jpg",
      "https://example.com/mountain-view-cottages-2.jpg",
      "https://example.com/mountain-view-cottages-3.jpg",
    ],
  },
  {
    id: 6,
    name: "Urban Oasis Apartments",
    bhk: [1, 2, 3],
    address: "567 Central Avenue, New Delhi",
    ownerName: "Neha Gupta",
    location: "Connaught Place",
    rentOrPrice: 40000, // in rupees
    starRating: 4.7,
    numberOfReviews: 112,
    details:
      "Modern apartments in the heart of the city with rooftop garden and co-working space.",
    images: [
      "https://example.com/urban-oasis-1.jpg",
      "https://example.com/urban-oasis-2.jpg",
      "https://example.com/urban-oasis-3.jpg",
    ],
  },
  {
    id: 7,
    name: "Riverside Meadows",
    bhk: [2, 3],
    address: "789 River Road, Pune, Maharashtra",
    ownerName: "Anita Desai",
    location: "Koregaon Park",
    rentOrPrice: 28000, // in rupees
    starRating: 4.3,
    numberOfReviews: 87,
    details: "Serene apartments overlooking the river with a jogging track.",
    images: [
      "https://example.com/riverside-meadows-1.jpg",
      "https://example.com/riverside-meadows-2.jpg",
      "https://example.com/riverside-meadows-3.jpg",
    ],
  },
  {
    id: 8,
    name: "Golden Sands Resort",
    bhk: [1, 2],
    address: "456 Coastal Highway, Kochi, Kerala",
    ownerName: "Thomas Kurien",
    location: "Fort Kochi",
    rentOrPrice: 3800000, // in rupees
    starRating: 4.9,
    numberOfReviews: 145,
    details:
      "Luxurious beachfront resort with private pools and spa facilities.",
    images: [
      "https://example.com/golden-sands-1.jpg",
      "https://example.com/golden-sands-2.jpg",
      "https://example.com/golden-sands-3.jpg",
    ],
  },
  {
    id: 9,
    name: "Skyline Towers",
    bhk: [2, 3, 4],
    address: "101 High Street, Gurgaon, Haryana",
    ownerName: "Ravi Kapoor",
    location: "Cyber City",
    rentOrPrice: 45000, // in rupees
    starRating: 4.6,
    numberOfReviews: 98,
    details:
      "High-rise apartments with smart home features and stunning city views.",
    images: [
      "https://example.com/skyline-towers-1.jpg",
      "https://example.com/skyline-towers-2.jpg",
      "https://example.com/skyline-towers-3.jpg",
    ],
  },
  {
    id: 10,
    name: "Heritage Haveli",
    bhk: [3, 4],
    address: "234 Old City Road, Jaipur, Rajasthan",
    ownerName: "Deepak Singh",
    location: "Amer",
    rentOrPrice: 5500000, // in rupees
    starRating: 4.7,
    numberOfReviews: 76,
    details:
      "Restored heritage property with modern amenities and traditional Rajasthani decor.",
    images: [
      "https://example.com/heritage-haveli-1.jpg",
      "https://example.com/heritage-haveli-2.jpg",
      "https://example.com/heritage-haveli-3.jpg",
    ],
  },
  {
    id: 11,
    name: "Lakeside Retreat",
    bhk: [2, 3],
    address: "567 Lake View Road, Udaipur, Rajasthan",
    ownerName: "Meera Agarwal",
    location: "Fateh Sagar",
    rentOrPrice: 32000, // in rupees
    starRating: 4.5,
    numberOfReviews: 89,
    details: "Peaceful apartments with lake views and boat rentals available.",
    images: [
      "https://example.com/lakeside-retreat-1.jpg",
      "https://example.com/lakeside-retreat-2.jpg",
      "https://example.com/lakeside-retreat-3.jpg",
    ],
  },
  {
    id: 12,
    name: "Tech Park Residences",
    bhk: [1, 2, 3],
    address: "789 Silicon Valley Road, Hyderabad, Telangana",
    ownerName: "Karthik Reddy",
    location: "HITEC City",
    rentOrPrice: 38000, // in rupees
    starRating: 4.4,
    numberOfReviews: 105,
    details:
      "Modern apartments with co-working spaces and tech-friendly amenities.",
    images: [
      "https://example.com/tech-park-1.jpg",
      "https://example.com/tech-park-2.jpg",
      "https://example.com/tech-park-3.jpg",
    ],
  },
  {
    id: 13,
    name: "Eco Village",
    bhk: [2, 3],
    address: "123 Green Valley, Coorg, Karnataka",
    ownerName: "Kavya Nair",
    location: "Madikeri",
    rentOrPrice: 4200000, // in rupees
    starRating: 4.8,
    numberOfReviews: 72,
    details:
      "Sustainable cottages in a coffee plantation with nature trails and organic farming.",
    images: [
      "https://example.com/eco-village-1.jpg",
      "https://example.com/eco-village-2.jpg",
      "https://example.com/eco-village-3.jpg",
    ],
  },
  {
    id: 14,
    name: "Metro Suites",
    bhk: [1, 2],
    address: "456 Central Boulevard, Kolkata, West Bengal",
    ownerName: "Sanjay Ghosh",
    location: "Salt Lake",
    rentOrPrice: 22000, // in rupees
    starRating: 4.2,
    numberOfReviews: 83,
    details:
      "Compact apartments with excellent connectivity to the metro and IT hub.",
    images: [
      "https://example.com/metro-suites-1.jpg",
      "https://example.com/metro-suites-2.jpg",
      "https://example.com/metro-suites-3.jpg",
    ],
  },
  {
    id: 15,
    name: "Hillside Homes",
    bhk: [2, 3, 4],
    address: "789 Mountain Road, Dehradun, Uttarakhand",
    ownerName: "Alok Negi",
    location: "Mussoorie Road",
    rentOrPrice: 3800000, // in rupees
    starRating: 4.6,
    numberOfReviews: 91,
    details:
      "Spacious homes with private gardens and views of the Himalayan foothills.",
    images: [
      "https://example.com/hillside-homes-1.jpg",
      "https://example.com/hillside-homes-2.jpg",
      "https://example.com/hillside-homes-3.jpg",
    ],
  },
  {
    id: 16,
    name: "Coastal Breeze Apartments",
    bhk: [1, 2, 3],
    address: "101 Seaside Avenue, Pondicherry",
    ownerName: "Aditi Rao",
    location: "White Town",
    rentOrPrice: 27000, // in rupees
    starRating: 4.5,
    numberOfReviews: 79,
    details:
      "French colonial-style apartments with sea-facing balconies and bicycle rentals.",
    images: [
      "https://example.com/coastal-breeze-1.jpg",
      "https://example.com/coastal-breeze-2.jpg",
      "https://example.com/coastal-breeze-3.jpg",
    ],
  },
  {
    id: 17,
    name: "Desert Oasis Resort",
    bhk: [2, 3],
    address: "234 Sand Dune Road, Jaisalmer, Rajasthan",
    ownerName: "Yash Rathore",
    location: "Sam Sand Dunes",
    rentOrPrice: 4800000, // in rupees
    starRating: 4.7,
    numberOfReviews: 108,
    details:
      "Luxury desert camp with traditional havelis and camel safari experiences.",
    images: [
      "https://example.com/desert-oasis-1.jpg",
      "https://example.com/desert-oasis-2.jpg",
      "https://example.com/desert-oasis-3.jpg",
    ],
  },
  {
    id: 18,
    name: "Riverside Lofts",
    bhk: [1, 2],
    address: "567 Riverfront Road, Ahmedabad, Gujarat",
    ownerName: "Nisha Patel",
    location: "Sabarmati Riverfront",
    rentOrPrice: 23000, // in rupees
    starRating: 4.3,
    numberOfReviews: 86,
    details:
      "Modern loft apartments with a community terrace overlooking the river.",
    images: [
      "https://example.com/riverside-lofts-1.jpg",
      "https://example.com/riverside-lofts-2.jpg",
      "https://example.com/riverside-lofts-3.jpg",
    ],
  },
];
