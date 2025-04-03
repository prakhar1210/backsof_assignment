// import Image from "next/image";
import Cabin from "./components/Cabin";
import Car from "./components/Car";
import ConatctUs from "./components/ConatctUs";
import Engine from "./components/Engine";
import Exterior from "./components/Exterior";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Truck from "./components/Truck";
import Trunk from "./components/Trunk";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Header />
      <Car />
      <Truck />
      <Engine />
      <Cabin />
      <Trunk />
      <Exterior />
      <ConatctUs />
      <Footer />
    </>
  );
}
