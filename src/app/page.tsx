import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#222222]">
      <h1 className="text-white font-bold pb-10">INVITATION</h1>
      <Image
        src={"https://picsum.photos/478/341"}
        height={500}
        width={500}
        alt="header"
      />
      <section className="flex flex-col gap-2 p-8">
        <h1 className="text-[#aeaeae] text-[10px] uppercase leading-[18px] text-center font-bold">
          Monsieur et Madame Roch Pirmez
        </h1>
        <h1 className="text-[#aeaeae] text-[10px] uppercase leading-[18px] text-center font-bold">
          Le baron et la baronne jean-paul de villenfagne de Sorinnes
        </h1>
        <h1 className="text-[#aeaeae] text-[10px] uppercase leading-[18px] text-center font-bold">
          le comte et la comtesse Guy de Marnix de sainte aldegonde
        </h1>
      </section>
      <section className="flex flex-col gap-2 p-8">
        <h1 className="text-[#aeaeae] text-[10px] uppercase leading-[18px] text-center font-bold">
          ont le plaisir de vous inviter à la soirée
        </h1>
        <h1 className="text-[#fff] text-[10px] uppercase leading-[18px] text-center font-bold">
          BERLIN FEVER
        </h1>
        <h1 className="text-[#aeaeae] text-[10px] uppercase leading-[18px] text-center font-bold">
          qu'ils donneront en l'honneur de leurs filles
        </h1>
        <h1 className="text-[#aeaeae] text-[10px] uppercase leading-[18px] text-center font-bold">
          Honorine, Emilie et Madeleine
        </h1>
      </section>
      <section className="flex flex-col gap-2 p-8">
        <h1 className="text-[#aeaeae] text-[10px] uppercase leading-[18px] text-center font-bold">
          Le VEndredi 30 juin 2023 à 20H au château-ferme de profondval
        </h1>
        <h1 className="text-[#fff] text-[10px] uppercase leading-[18px] text-center font-bold">
          RSLP AVANT LE 7 JUIN, sinon nous vous regretterons
        </h1>
      </section>
      <section className="flex flex-col gap-2 p-8">
        <h1 className="text-[#fff] text-[10px] uppercase leading-[18px] text-center font-bold">
          TÉLÉPHONE DE LA JOURNÉE :
        </h1>
        <h1 className="text-[#fff] text-[10px] uppercase leading-[18px] text-center font-bold">
          0487793607{" "}
        </h1>
      </section>
    </main>
  );
}
