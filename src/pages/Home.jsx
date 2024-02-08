import React from "react";
import bgImg from "../assets/wheat.webp";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import HeroSec from "../components/HeroSec";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  return (
    <div className="flex flex-col text-white justify-center items-center w-[100vw]  h-[100vh]">
      <NavBar />
      <HeroSec bgImg={bgImg} />
      <div className="relative z-[4] h-[350px] flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="text-5xl">CropAI</div>
          <div className="text-2xl">
            Intelligent Crop and Fertilizer Recommendation System
          </div>
        </div>
        <Button
          onClick={() => {
            nav("/recommendation");
          }}
          className={
            " text-xl absolute z-[4] translate-x-[-50%] bottom-[0px] px-[28px] py-[20px]"
          }
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Home;
