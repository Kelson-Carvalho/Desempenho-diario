import { kv } from "@vercel/kv";

async function Desafio({
  params: { desafio },
}: {
  params: { desafio: string };
}) {
  const decodedDesafio = decodeURIComponent(desafio);
  const desafioStreak = await kv.hget("desafios", decodedDesafio);

  console.log(desafioStreak);

  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className="text-3xl font-light text-center text-white font-display">
        {decodedDesafio}
    </h1>
    </main>
  );
}

export default Desafio;
