import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Stack,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  HomeRounded,
  AnalyticsRounded,
  PeopleRounded,
  AssignmentRounded,
  SettingsRounded,
  InfoRounded,
  HelpRounded,
} from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLayoutData } from "../hooks";
import routeList from "../routes/routeList";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
const mainListItems = [
  {
    text: "Home",
    icon: <HomeRounded />,
    path: routeList.dashboard,
    submenu: [],
  },
  {
    text: "Project",
    icon: <AnalyticsRounded />,
    path: null,
    submenu: [
      { text: "Add", icon: <AddCircleIcon />, path: routeList.addProject },
      { text: "List", icon: <FormatListBulletedIcon />, path: routeList.listProject },
    ],
  },
  {
    text: "Clients",
    icon: <PeopleRounded />,
    path: routeList.listClient,
    submenu: [],
  },
  {
    text: "Work",
    icon: <AssignmentRounded />,
    path: routeList.listWork,
    submenu: [],
  },
  {
    text: "Settings",
    icon: <SettingsRounded />,
    path: routeList.settings,
    submenu: [],
  },
  { text: "About", icon: <InfoRounded />, path: routeList.about, submenu: [] },
  {
    text: "Feedback",
    icon: <HelpRounded />,
    path: routeList.feedback,
    submenu: [],
  },
];

export default function MenuContent() {
  const { toggle, handleBreadCrumb } = useLayoutData();
  const navigate = useNavigate();

  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleNavigate = (path: string | null, page: string) => {
    if (path) {
      navigate(path);
      handleBreadCrumb(["Dashboard", page]);
    }
  };

  const handleToggleSubmenu = (text: string) => {
    setOpenSubmenu((prev) => (prev === text ? null : text));
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List>
        {mainListItems.map((item, index) => (
          <div key={index}>
            <ListItem disablePadding sx={{ display: "block", my: 0.5 }}>
              <ListItemButton
                onClick={() =>
                  item.submenu.length
                    ? handleToggleSubmenu(item.text)
                    : handleNavigate(item.path, item.text)
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                {toggle && <ListItemText primary={item.text} />}
                {item.submenu.length > 0 &&
                  (openSubmenu === item.text ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            </ListItem>

            {/* Submenu (collapsible) */}
            {item.submenu.length > 0 && (
              <Collapse
                in={openSubmenu === item.text}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {item.submenu.map((sub, subIndex) => (
  
                    <ListItem key={`submenu${subIndex}`} disablePadding sx={{ display: "block", my: 0.5 }}>
                      <ListItemButton
                        onClick={() => handleNavigate(sub.path, sub.text)}
                      >
                        <ListItemIcon>{sub.icon}</ListItemIcon>
                        <ListItemText primary={sub.text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </Stack>
  );
}
