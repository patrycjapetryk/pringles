import Image from 'next/image';

export default function Logo() {
  return (
    <a href="/">
      <Image
        className="relative ml-1"
        src="/images/logo.svg"
        alt="Logo Zimowa Zabawa z Pringles"
        width={140}
        height={52}
        priority
      />
    </a>
  );
}
