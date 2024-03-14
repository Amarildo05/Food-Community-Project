import Link from "next/link";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import NavLink from "./nav-link";

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
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodie Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
