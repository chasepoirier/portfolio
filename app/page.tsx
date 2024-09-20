import HomeHero from "@/components/home/hero";
import Navbar from "@/components/navbar";

export const revalidate = 60; // Revalidate every 60 seconds (ISR)

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-95% max-w-screen-xl mx-auto">
        <HomeHero />
      </main>
    </>
  );
}
