import React from 'react'
import Image from "next/image"

const Sectiune2 = () => {
    const metode = [
        "Creează din cariera ta o poveste pe care ești menit să o urmezi",
        "Transformă-ți sarcinile în misiuni și side quest-uri",
        "Tratează cu seriozitate fiecare interacțiune cu „personajele” din poveste",
        "Muncește pentru a-ți evolua eroul, nu doar pentru următorul salariu",
        "Fii dedicat pentru a completa fiecare capitol al poveștii tale"
    ]
  return (
    <section
        className="w-[1120px] mx-auto">
        <div
            className="w-full flex flex-col items-center gap-16">
            <h3 className="w-[576px] text-center">Exemple de metode prin care munca ta va deveni mai plăcută</h3>
            <div
                className="flex gap-4">
              {metode.map(metoda => (
                <div
                    className="flex flex-col items-center justify-center gap-2">
                    <Image src="" width={64} height={64} alt="abc"></Image>
                    <p
                        className="bold text-center">
                        {metoda}
                    </p>
                </div>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Sectiune2