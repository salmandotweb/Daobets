import React from "react";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import InvestSection from "../sections/AvatarSection/InvestSection";
import FeatureSection from "../sections/FeatureSection/FeatureSection";
import PartnerBanner from "../components/PartnerBanner/PartnerBanner";
import Footer from "../components/Footer/Footer";
import GraphSection from "../sections/GraphSection/GraphSection";
import RoadmapSection from "../sections/RoadmapSection/RoadmapSection";
// import TeamSection from "../sections/TeamSection/TeamSection";

export default function HomeScreen() {
  return (
    <div>
      <Navbar />
      <Header />
      <GraphSection />
      <InvestSection />
      <FeatureSection />
      <Banner title="Have any question please feel free!" btn="Ask Now" />
      {/* <TeamSection /> */}
      <RoadmapSection />
      <PartnerBanner />
      <Footer />
    </div>
  );
}
