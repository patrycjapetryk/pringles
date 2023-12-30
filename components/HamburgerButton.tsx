import Image from 'next/image';

export default function HamburgerButton({
  handleClick,
}: {
  handleClick: () => void;
}) {
  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center justify-center lg:hidden"
    >
      <Image
        className="relative"
        src="/images/menu-hamburger.svg"
        alt=""
        width={56}
        height={56}
        priority
      />
    </button>
  );
}
