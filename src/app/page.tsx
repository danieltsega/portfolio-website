import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="md:max-w-3xl mx-auto md:mt-8">
      <Navbar></Navbar>
      Hello World!
      <Button variant={"secondary"}>Button</Button>
    </div>
  );
}
