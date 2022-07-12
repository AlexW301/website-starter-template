import Head from "next/head";
import Image from "next/image";
import { useStateContext } from "../context/StateContext";
import HeroSection from "../components/page-sections/home/HeroSection";

export default function Home() {
  const { test } = useStateContext()
  console.log(test)
  return (
    <>
      <HeroSection />
    </>
  );
}
