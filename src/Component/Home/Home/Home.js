import React from "react";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
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
      <Counter></Counter>
    </div>
  );
};

export default Home;
