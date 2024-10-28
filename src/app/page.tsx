import Bio from "@/components/bio";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="md:max-w-3xl mx-auto md:mt-8">
      <Navbar></Navbar>
      <Bio />
    </div>
  );
}
