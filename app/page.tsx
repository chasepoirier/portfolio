import HomeHero from "@/components/home/hero";
import Navbar from "@/components/navbar";

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
