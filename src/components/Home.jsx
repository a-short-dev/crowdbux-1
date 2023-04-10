import React from "react";

import Header from "./Header";
import Partners from "./Partners";

import Title from "./Title";
import How from "./How";
import Why from "./Why";

import Features from "./Features";
import Mobile from "./Mobile";
import FAQ from "./FAQ";

import Footer from "./Footer";
import Action from "./Action";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <Partners />
      <br />
      <br />
      <Title title="HOW IT WORKS" />
      <br />
      <How />
      <br />
      <br />
      <Title title="WHY US" />
      <br />
      <Why />
      <br />
      <br />
      <Title title="FEATURES" />
      <Features />
      <br />
      <br />
      <br />
      <Mobile />
      <br />
      <br />
      <Title title="FREQUENTLY ASKED QUESTIONS" />
      <FAQ />
      <br />
      <br />
      <Action />
      <br />
      <br />
      <Footer />
    </div>
  );
}
