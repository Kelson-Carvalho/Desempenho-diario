import DayState from "@/components/DayState";
import Image from "next/image";


export default function Home() {
  const desafios = {
    "Estudar javascript": {
      "2024-02-16": false,
      "2024-02-15": true,
      "2024-02-14": true,
    },
    "Estudar Flutter": {
      "2024-02-13": true,
      "2024-02-12": true,
      "2024-02-11": false,
    },
  };

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {desafios == null ||
        (Object.keys(desafios).length == 0 && (
          <h1 className="mt-20 text-center text-4xl font-light text-[#FF9900] font-display">
            você não tem desafios cadastrados.
          </h1>
        ))}
      {desafios != null &&
        Object.entries(desafios).map(([desafio, desafiosStreak]) => (
          <div key={desafio} className="text-white flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-xl font-light font-sans">{desafio}</span>
              <button>
                <Image
                  src="/images/trash.svg"
                  width={20}
                  height={20}
                  alt="icon de lixeira"
                />  
              </button>
            </div>
            <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
              {weekDays.map((dia) => (
                <div key={dia} className="flex flex-col">
                  <span className="font-sans text-xs text-white text-center">
                    {dia}
                  </span>

                  <DayState dia={undefined} />
                </div>                
              ))}
            </section>
          </div>
        ))}
    </main>
  );
}
