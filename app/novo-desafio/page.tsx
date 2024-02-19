function NovoDesafio() {

    async function novodesafio(formData: FormData) {
        "use server";

        const desafio = formData.get("desafio");

        console.log(desafio);
    }

  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className="text-4xl font-light text-center text-white font-display">
        novo desafio
      </h1>

      <form action={novodesafio} className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          name="desafio"
          id="desafio"
          className="p-2 font-sans text-xl text-white rounded-md bg-neutral-800"
        />

        <button type="submit" className="bg-[#05EDFB] font-display text-neutral-900 font-bold text-2xl p-2 rounded-md mt-8">
          cadastrar
        </button>

        <button className="bg-neutral-800 text-[#F85858] font-display font-bold text-2xl p-2 rounded-md">
            cancelar
        </button>
      </form>
    </main>
  );
}

export default NovoDesafio;
