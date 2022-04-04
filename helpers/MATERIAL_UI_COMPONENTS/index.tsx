import { AppBar, AppBarProps } from "@mui/material";
import FormControl,{FormControlProps} from "@mui/material/FormControl";

import {
  Toolbar,
  ToolbarProps,
  Container,
  ContainerProps,
} from "@mui/material";

export const AppBarTailwind = (props: AppBarProps ) => (
  <AppBar className="bg-purple-400  justify-between items-center relative flex flex-row py-3" {...props}>
    {props.children}
  </AppBar>
);
export const ContainerTailwind = (props: ContainerProps) => (
  <Container className="grid grid-cols-2 items-center">{props.children}</Container>
);

export const ToolbarTailwind = (props: ToolbarProps) => (
  <Toolbar className="">{props.children}</Toolbar>
);
export const FormControlTailwind = (props: FormControlProps) => <FormControl {...props} className="" >
  {props.children}
</FormControl>

