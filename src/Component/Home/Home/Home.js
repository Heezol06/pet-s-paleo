import React from "react";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import EndBanner from "../Endbanner/EndBanner";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeService from "../HomeService/HomeService";
import HomeTreatment from "../HomeTreatment/HomeTreatment";
import ClientFeedback from "./ClientFeedback/ClientFeedback";
import FAQ from "./FAQ/FAQ";
import Packages from "./Packages/Packages";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeService></HomeService>
      <HomeAbout></HomeAbout>
      <HomeTreatment></HomeTreatment>
      <Counter></Counter>
      <FAQ></FAQ>
      <ClientFeedback/>
      <Packages/>
      <EndBanner></EndBanner>
    </div>
  );
};

export default Home;
