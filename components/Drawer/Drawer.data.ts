import { IconType } from "react-icons";
import {
  AiOutlineHome,
  AiOutlineLineChart,
  AiOutlineRobot,
} from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
//
import { CgMenuLeftTailwind } from "../../helpers/MATERIAL_UI_COMPONENTS/icons";
//
import {anchor} from "./Drawer"
interface data {
  title: string;
  Icon: IconType;
  Link:string
  direction?:anchor
}
export const primaryData: data[] = [
  {
    title: "Home",
    Icon: AiOutlineHome,
    Link:"/"
  },
  {
    title: "Portfolio",
    Icon: AiOutlineLineChart,
    Link: "portfolio"
  },
  {
    title: "Automate",
    Icon: AiOutlineRobot,
    Link: "automate"
  },
];

export const secondaryData: data[] = [
  {
    title: "Logout",
    Icon: BiLogOut,
    Link: "/"
  },
];

interface Navdata {
  Icon: IconType,
  title: string,
  direction: anchor,
  
}

export const navBarIcons: Navdata[] = [
  { Icon: CgMenuLeftTailwind, title: "Hamburger", direction: "left", },
];
