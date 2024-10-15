import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleDiscover = (filters) => {
    const searchParams = new URLSearchParams(filters);
    navigate(`/discover?${searchParams.toString()}`);
  };

  return (
    <div className="w-full md:w-[83%] m-2 h-full overflow-y-scroll flex flex-col  rounded-xl"></div>
  );
};

export default Home;
