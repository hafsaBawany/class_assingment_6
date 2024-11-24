import Image from "next/image";
import Design from '../components/Header';
import NavBar from '../components/NavBar';
import Hero from '../components/HeroSec';
import LogoBar from '../components/LogoBar';
import Courses from '../components/courses';
import Achieve from '../components/Achivements';
import Index from '../components/courses-2';
import Team from '../components/Teams';
import Footer from '../components/Footer';
export default function Home() {
  return (
   <div>
    <Design/>
    <NavBar/>
    <Hero/>
    <LogoBar/>
    <Courses/>
    <Achieve/>
    <Index/>
    <Team/>
    <Footer/>
  </div>
  );
}
