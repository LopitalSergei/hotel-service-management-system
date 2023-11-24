import PeopleIcon from "@mui/icons-material/People";
import BackupIcon from "@mui/icons-material/Backup";
import StorageIcon from "@mui/icons-material/Storage";
import PublicIcon from "@mui/icons-material/Public";

export const navbarItems = [
  {
    id: 0,
    icon: <PeopleIcon />,
    label: "Authentication",
    route: "authentication",
  },
  { id: 1, icon: <BackupIcon />, label: "Database", route: "database" },
  { id: 2, icon: <StorageIcon />, label: "Storage", route: "storage" },
  { id: 3, icon: <PublicIcon />, label: "Hosting", route: "hosting" },
];
