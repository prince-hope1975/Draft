import { useContextObject } from "../../context";
import Link from "next/link"
import { Typography ,} from "@mui/material";
import { AppBarTailwind, ContainerTailwind, ToolbarTailwind,  } from "../../helpers/MATERIAL_UI_COMPONENTS";

import { PayIconTailwind } from "../../helpers/MATERIAL_UI_COMPONENTS/icons";
import ResponsiveDrawer from "../Drawer/Drawer"
const Header = () => {
  const {dialog, dispatchDialog } = useContextObject();

  return (
    <>    
        <ResponsiveDrawer />
    </>
  );
};
export default Header;

