// import AllFeatures from "@/components/AllFeatures";
// import CTA from "@/components/CTA";
// import FAQ from "@/components/FAQ";
// import FeatureCallout from "@/components/FeatureCallout";
import Footer from "@/components/Footer";
import Hero from "@/components/home/hero";
// import LogoSlider from "@/components/LogoSlider";
import { Navbar } from "@/components/Navbar";
// import StatStepper from "@/components/StatStepper";
// import Timeline from "@/components/Timeline";
// import { createSession } from "@/lib/stripe";

export const revalidate = 1000;

export default async function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <LogoSlider />
      <StatStepper />
      <FeatureCallout />
      <AllFeatures />
      <Timeline />
      <FAQ />;
      <CTA stripeCheckoutUrl={stripeCheckoutUrl} /> */}
      <Footer />
    </>
  );
}
