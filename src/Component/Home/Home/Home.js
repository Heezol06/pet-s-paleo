import React from "react";
import Banner from "../Banner/Banner";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeService from "../HomeService/HomeService";
import HomeTreatment from "../HomeTreatment/HomeTreatment";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeService></HomeService>
      <HomeAbout></HomeAbout>
      <HomeTreatment></HomeTreatment>
    </div>
  );
};

export default Home;
