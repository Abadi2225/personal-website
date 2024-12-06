"use client";

import PreLoader from "./animations/PreLoader/PreLoader";
import Hero from "./hero-section/Hero";

//Blobity Cursor
import useBlobity from "blobity/lib/react/useBlobity";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import { useEffect } from "react";

//Dynamic
import dynamic from "next/dynamic";
import Navbar from "./navbar/Navbar";
const About = dynamic(() => import("./about-section/About"), { ssr: false, loading: () => <p>Loading...</p> });
const Contact = dynamic(() => import("./contact-section/Contact"), { ssr: false, loading: () => <p>Loading...</p> });

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  return (
    <>
      <PreLoader />

      <Navbar />

      <main className="flex flex-col items-center justify-center">
        <Hero />
        <About />
        <Contact />
      </main>
    </>
  );
}
