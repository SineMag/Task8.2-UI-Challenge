import "../src/App.css";

import { Navbar } from "./components/Navbar";

import { Hero } from "./components/Hero";

import { Main } from "./components/Main";

import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Main />
      <Footer />
    </>
  );
}
