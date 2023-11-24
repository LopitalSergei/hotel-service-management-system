import { Stack } from "@mui/material";
import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    title: "Главная",
    url: "/",
  },
  {
    id: 2,
    title: "О нас",
    url: "about",
  },
  {
    id: 3,
    title: "Комнаты",
    url: "rooms",
  },
  {
    id: 4,
    title: "Услуги",
    url: "services",
  },
  {
    id: 5,
    title: "Новости",
    url: "news",
  },
  {
    id: 6,
    title: "Контакты",
    url: "contact",
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          {links.map((link) => (
            <li key={link.id}>
              <Link key={link.id} href={link.url}>
                {link.title}
              </Link>
            </li>
          ))}
        </Stack>
      </ul>
    </nav>
  );
};

export default Navbar;
