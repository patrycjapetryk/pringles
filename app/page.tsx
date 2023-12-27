import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-pringles-red flex min-h-[250px] flex-col items-center justify-center gap-10 px-24">
      <Image
        className="relative"
        src="/images/logo.svg"
        alt="Logo Kampanii"
        width={180}
        height={37}
        priority
      />
      <h1 className="text-sm">Odkryj zimową zabawę z Pringles</h1>
    </main>
  );
}
