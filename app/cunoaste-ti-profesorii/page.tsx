import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";

export default function Home() {

    const cursuri = [
        {
            nume: "Cursul 1: Joaca nu e doar pentru copii — cum să-ți transformi munca într-un joc pe care vrei să-l maxezi",
            descriere: "Trasnformă-ți munca într-un joc pe care vrei să-l maxezi.",
            poza: ""
        },
        {
            nume: "Cursul 2: Motivație fără efort — cum să-ți găsești energia să muncești la capacitate maximă (și de ce ar trebui să faci asta)",
            descriere: "Găsește-ți energia să muncește la capacitate maximă (și de ce ar trebui să faci asta).",
            poza: ""
        },
    ]

  return (
    <div>
      <Navbar />
      <h1 className="w-[1120px] mx-auto mt-16">Cunoaște-ți profesorii</h1>
    </div>
  );
}
