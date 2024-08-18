import Image from "next/image";
import Link from "next/link";

export default async function NotFound() {
  return (
    <section className="fixed inset-0 flex items-center justify-center flex-col gap-8 bg-black/50 backdrop-blur-md">
      <h1 className="text-white text-4xl text-center font-bold">
        Ops, pagina não encontrada!
      </h1>

      <Image
        src="/assets/svg/not-found.svg"
        alt="Uma pessoa ao lado de um card"
        width={380}
        height={380}
        priority
      />

      <Link href="/" className="bg-white text-slate-950 py-2 px-4 rounded-lg">
        Voltar a página inicial
      </Link>
    </section>
  );
}
