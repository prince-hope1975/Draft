import React, { useEffect } from "react";
import clsx from "clsx";
import {  Typography,Toolbar,AppBar,Drawer,Button} from "@mui/material/";
import { AiOutlineInbox as InboxIcon,AiOutlineMail as MailIcon } from "react-icons/ai";
import List from "@mui/material/List";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BiBarChartAlt2, BiRightArrow } from "react-icons/bi";
import { primaryData, secondaryData, navBarIcons,  } from "./Drawer.data";
import NavLink  from "next/link";
import { useContextObject } from "../../context";

//types
export type anchor = "top" | "left" | "bottom" | "right";
clsx;
export type Bool = {
  top: boolean;
  bottom: boolean;
  left: boolean;
  right: boolean;
};
export default function PermanantDrawer() {
  const matches = useMediaQuery("(min-width:1000px)")
  const {setMedia, media} = useContextObject()
  let anchor:anchor
  let drawerWidth:number|string = 240 ;
  if (!matches) {
    drawerWidth = "100%";
    anchor = "bottom";
  }
useEffect(()=>{
   if(matches){
     setMedia({isTrue:matches,width:drawerWidth})
   }
   else{
     setMedia({isTrue:matches, width: 0 });

   }
},[matches])

  return (
    <div className="">
      <AppBar
        className="bg-[hsl(0,0%,18%)] text-gray-200"
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar className="flex justify-between">
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="flex items-center gap-[2px] cursor-pointer"
          >
            <BiBarChartAlt2 /> Raburry
          </Typography>
          <Button className="hover:bg-[hsl(0,0%,13%)]" >
            Connect Wallet<BiRightArrow />
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Drawer
        className="border-0"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            border: "1px solid black",
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor={anchor}
      >
        {matches && <Divider />}
        <List
          className="bg-[hsl(0,0%,18%)] h-full border-0"
          sx={{
            display: "flex",
            gap: 1,
            flexDirection: `${!matches ? "row" : "column"}`,
            height: `${!matches ? "maxHeight" : "maxHeight"}`,
          }}
        >
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem
              button
              key={text}
              className={`${!matches ? "flex flex-col " : ""} `}
            >
              <ListItemIcon
                className={`text-gray-400  hover:text-gray-200 ${
                  !matches ? " w-full flex justify-center text-2xl" : ""
                }`}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              {matches && <ListItemText primary={text} className="text-gray-200" />}
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Toolbar />
    </div>
  );
}
