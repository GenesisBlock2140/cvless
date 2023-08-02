import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { UserPlus2 } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto px-2">
      <Navbar />
      <div className="w-full flex flex-col items-center gap-4 my-24 text-center">
        <h1 className="text-3xl md:text-5xl text-gray-800 font-semibold">
          Créer votre CV en ligne intéractif <br /> & accessible en un click
        </h1>
        <p className="max-w-[800px] text-xl text-gray-600">
          Créer votre cv en ligne en quelques minutes et partagez le autour de
          vous simplement ...{" "}
          <span className="font-bold">plus besoin de pdf.</span>
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Button className="text-base">
            <UserPlus2 className="mr-2" /> Créer un compte
          </Button>
          <Button variant="outline" className="text-base">
            Voir un exemple
          </Button>
        </div>
      </div>
      <div className="block mx-auto max-w-[1000px] h-[600px] bg-gray-200 rounded"></div>
      <div className="my-10 text-center">
        <h2 className="text-2xl font-semibold text-center">
          Une interface simple et rapide
        </h2>
        <p>Fini de se casser la tête pendant des heures pour créer son CV !</p>
        <div className="block mx-auto max-w-[800px] h-[300px] bg-gray-200 my-10 rounded"></div>
      </div>
    </main>
  );
}
