import Image from "next/image";
import Link from "next/link";

export default function NavBar(){
  return(
    <nav className="fixed flex justify-between items-center pl-4 pr-4 h-[100] w-full z-[100] bg-ver-galaxy/70">
      <Link legacyBehavior href="#main">
        <a>
          <Image src="/images/andromeda-logo.png" alt="" width={100} height={100} />
        </a>
      </Link>
      <ul className="flex gap-3 text-ver-galaxy">
        <Link legacyBehavior href="#main"><a>Home</a></Link>
        <Link legacyBehavior href="#about"><a>About</a></Link>
        <Link legacyBehavior href="#gallery"><a>Gallery</a></Link>
        <Link legacyBehavior href="#contact"><a>Contact</a></Link>
      </ul>
    </nav>
  )
}