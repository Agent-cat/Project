import {
  House,
  MessagesSquare,
  Heart,
  Settings,
  Search,
  Globe,
  MessageSquare,
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
    name: "Feedback",
    icon: <MessageSquare />,
    link: "/feedback",
  },
  {
    name: "Settings",
    icon: <Settings />,
    link: "/settings",
  },
];

export const navbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Buy",
  },
  {
    name: "Rent",
  },
  {
    name: "About Us",
    link: "/aboutus",
  },
  {
    name: "Contact Us",
    link: "/contactus",
  },
];
