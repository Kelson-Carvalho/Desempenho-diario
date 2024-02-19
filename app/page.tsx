import DayState from "@/components/DayState";
import { kv } from "@vercel/kv";
import Image from "next/image";
import Link from "next/link";

type Desafio = {
  [desfio: string]: Record<string, boolean>;
} | null;

export default async function Home() {
  const desafios: Desafio = await kv.hgetall("desafios");

  const today = new Date();
  const todayWeekDay = today.getDay();

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const sorteWeekDays = weekDays
    .slice(todayWeekDay + 1)
    .concat(weekDays.slice(0, todayWeekDay + 1));

  const last7Days = weekDays
    .map((_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - index);

      return date.toISOString().slice(0, 10);
    })
    .reverse();

  console.log(last7Days);

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
            <Link href={`desafio/${desafio}`}>
              <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
                {sorteWeekDays.map((dia, index) => (
                  <div key={dia} className="flex flex-col last:font-bold">
                    <span className="font-sans text-xs text-white text-center">
                      {dia}
                    </span>
                    <DayState dia={desafiosStreak[last7Days[index]]} />
                  </div>
                ))}
              </section>
            </Link>
          </div>
        ))}

      <Link
        href="/novo-desafio"
        className="fixed text-center bottom-10 w-2/3
        left-1/2 -translate-x-1/2 text-neutral-900 bg-[#05EDFB] font-display font-bold text-3xl p-2
        rounded-md"
      >
        Novo desafio
      </Link>
    </main>
  );
}
