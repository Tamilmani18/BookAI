import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Overview from "../components/Overview";
import Authentication from "../components/Authentication";
import Endpoints from "../components/Endpoints";
import Tutorial from "../components/Tutorial";
import CodeExamples from "../components/CodeExamples";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <div className="font-[inter]">
      <Header />
      <Navigation />
      <div className="bg-[#0f172a]">
        <section id="overview">
          <Overview />
        </section>
        <section id="authentication">
          <Authentication />
        </section>
        <section id="endpoints">
          <Endpoints />
        </section>
        <section id="tutorial">
          <Tutorial />
        </section>
        <section id="code-examples">
          <CodeExamples />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
      </div>
    </div>
  );
};

export default Home;
