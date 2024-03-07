import Link from "next/link";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image
          priority
          src={logoImg.src}
          alt="A plate with food in it"
          width={500}
          height={500}
        />
        Best Quality Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodie Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}