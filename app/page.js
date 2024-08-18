
import styles from "./page.module.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Steps from "./components/Steps/Steps";
import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/> 
      <Banner/>
      <Steps/>
      <Feature/>
      <Footer />
    </main>
  );
}
