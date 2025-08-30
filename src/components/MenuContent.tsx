import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { useLayoutData } from "../hooks";
import routeList from "../routes/routeList";
import { useNavigate } from "react-router-dom";
import { type MouseEvent } from "react";
const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon />,path:routeList.dashboard },
  { text: "Project", icon: <AnalyticsRoundedIcon /> ,path:routeList.listProject  },
  { text: "Clients", icon: <PeopleRoundedIcon />  ,path:routeList.listClient },
  { text: "Work", icon: <AssignmentRoundedIcon /> ,path:routeList.listWork  },
  { text: "Settings", icon: <SettingsRoundedIcon /> ,path:routeList.settings  },
  { text: "About", icon: <InfoRoundedIcon /> ,path:routeList.about  },
  { text: "Feedback", icon: <HelpRoundedIcon /> ,path:routeList.feedback  },
];

export default function MenuContent() {
  const {toggle,handleBreadCrumb} = useLayoutData()
  const navigate = useNavigate()
  const handleNavigate = (e:MouseEvent<HTMLDivElement>)=>{
    const path = String(e.currentTarget.dataset.path);
    const page = String(e.currentTarget.dataset.page);
    navigate(path)
    handleBreadCrumb(["Dashboard",page])
  }
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List >
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block",my:.5 }}>
            <ListItemButton data-path={item.path} data-page={item.text} onClick={handleNavigate} selected={index === 0}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              {toggle && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
