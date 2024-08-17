import Link from "next/link";

export default async function NotFound() {
  return (
    <section className="fixed inset-0 flex items-center justify-center flex-col gap-4 bg-black/50 backdrop-blur-md">
      <h1 className="text-white text-4xl text-center font-bold">
        Ops, pagina não encontrada!
      </h1>

      <Link href="/" className="bg-white text-slate-950 py-2 px-4 rounded-lg">
        Voltar a página inicial
      </Link>
    </section>
  );
}
