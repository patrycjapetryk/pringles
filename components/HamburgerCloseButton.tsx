import Image from 'next/image';

export default function HamburgerCloseButton({
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
        src="/images/menu-close.svg"
        alt=""
        width={56}
        height={56}
      />
    </button>
  );
}
