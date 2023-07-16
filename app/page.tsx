import BigIdeas from "@/components/Home/BigIdeas";
import Featured from "@/components/Home/Featured";
import Hero from "@/components/Home/Hero";
import Welcome from "@/components/Home/Welcome";
import PageIdentifier from "@/components/UI/PageIdentifier";

export default function Home() {
  return (
    <main
      className="w-full md:px-24
xl:px-36"
    >
      <PageIdentifier pageName="home" />

      <Hero />

      <Welcome />

      <BigIdeas />

      <Featured />
    </main>
  );
}
