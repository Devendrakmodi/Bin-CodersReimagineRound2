import React from "react";
import "./Home.css";
import PhotoSlider from "../../Components/PhotoSlider";
import Scrolll from "../../Components/Scrolll";
import Parts from "../../Components/Parts";
import Text from "../../Components/Text";

const Home = () => {
  return (
    <>
      <section className="w-full h-full">
        <PhotoSlider />
        <Scrolll />
        <Text />
        <Parts />
      </section>
    </>
  );
};

export default Home;
