
import styles from "./page.module.css";

import Banner from "./components/banner/Banner";
import Steps from "./components/Steps/Steps";
import Feature from "./components/feature/Feature";

import Elementor from "./components/elementor/Elementor";
import HeroSection from "./components/HeroSection/HeroSection";


export default function Home() {
  return (
    <main className={styles.main}>

      <Elementor/>
      <HeroSection/>
      <Banner/>
      <Steps/>
      <Feature/>

    </main>
  );
}
