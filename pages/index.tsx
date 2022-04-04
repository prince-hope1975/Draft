import NavLink from "next/link";
import {
  CssBaseline,
  Toolbar,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { AppBarTailwind } from "../helpers/MATERIAL_UI_COMPONENTS";
import {
  ToolbarTailwind,
  ContainerTailwind,
} from "../helpers/MATERIAL_UI_COMPONENTS";
import { PayIconTailwind } from "../helpers/MATERIAL_UI_COMPONENTS/icons";
import ResponsiveDrawer from "../components/Drawer/Drawer";
import ChainSelect from "../components/ChainSelect";
import Header from "../components/Header";
function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <main className={`space-y-6  mt-11`}>
        <Grid container alignContent="center" justifyContent={"center"}>
          <Grid item>
            <h1 className={`mt-8 text-4xl text-center`}>
              Welcome to <a>Choice Rewards Page </a>
            </h1>
            <div>
              <h2 className={``}>Get Started Rewarding Members of the DAO</h2>
              <NavLink href={"/reward"}>
                <div className={``}>Here</div>
              </NavLink>
            </div>
          </Grid>
        </Grid>
      </main>
      {/* <Rewards />
      <Footer /> */}
    </>
  );
}

export default App;
