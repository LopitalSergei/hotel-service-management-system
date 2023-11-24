import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

import logoPic from "../../../public/logo.png";
import { Stack } from "@mui/material";
import Navbar from "./navbar";

export default function Header() {
  //   return (
  //     <header className="flex bg-blk text-white justify-between p-3">
  //       <div className={styles.logo}>
  //         <Link href="/">
  //           <Image src={logoPic} alt="Logo"></Image>
  //         </Link>
  //       </div>
  //       <nav>
  //         <ul className="flex gap-3">
  //           {links.map((link) => (
  //             <li key={link.id} className={styles.link}>
  //               <Link key={link.id} href={link.url}>
  //                 {link.title}
  //               </Link>
  //             </li>
  //           ))}
  //         </ul>
  //       </nav>
  //       <div className={styles.login}>
  //         <Link href="/dashboard/sign-in">Войти в аккаунт</Link>
  //       </div>
  //     </header>
  //   );

  return (
    <header>
      {/* space-between это неправильно, navbar не по центру, нужно просто padding выставить */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
      >
        {/* <Image src={logoPic} alt="Logo"></Image> */}
        <Link href="/">HOTEL</Link>
        <Navbar />
        {/* <Navbar /> */}
        <Link href="/dashboard/sign-in">Войти в аккаунт</Link>
      </Stack>
    </header>
  );
}
