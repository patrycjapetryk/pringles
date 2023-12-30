import Link from 'next/link';
import HamburgerCloseButton from './HamburgerCloseButton';

export default function Navigation({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) {
  return (
    <nav
      className={`${
        isOpen
          ? 'animate-slidein fixed left-0 top-0 flex w-full flex-col gap-8 bg-pringles-dark-red py-16'
          : 'hidden'
      }  z-10 lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:animate-none lg:flex-row lg:gap-0 lg:bg-transparent lg:py-0`}
    >
      <ul
        className={`${
          isOpen ? 'flex-col gap-8 text-xl' : ''
        } flex w-full items-center justify-center lg:mr-6 lg:flex-row lg:gap-20 lg:text-base xl:mr-20`}
      >
        <li className="uppercase">
          <Link href="#">ZASADY</Link>
        </li>
        <li className="uppercase">
          <Link href="">NAGRODY</Link>
        </li>
        <li className="uppercase">
          <Link href="">REGULAMIN</Link>
        </li>
        <li className="uppercase">
          <Link href="">WEŹ UDZIAŁ</Link>
        </li>
      </ul>

      <HamburgerCloseButton handleClick={handleClick} />
    </nav>
  );
}
