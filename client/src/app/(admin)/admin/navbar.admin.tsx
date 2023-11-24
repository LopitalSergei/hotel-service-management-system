import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { navbarItems } from "./consts/navbarItems";
import { navbarAdminStyles } from "./styles";
import Link from "next/link";

const NavbarAdmin = () => {
  return (
    <Drawer sx={navbarAdminStyles.drawer} variant="permanent" anchor="left">
      <Toolbar />
      <Divider />
      <List>
        {navbarItems.map((link) => (
          <Link key={link.id} href={link.route}>
            <ListItem key={link.id} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={navbarAdminStyles.icons}>
                  {link.icon}
                </ListItemIcon>
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default NavbarAdmin;
