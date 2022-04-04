import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent, Select, NativeSelect } from "@mui/material";
import {FormControlTailwind} from "../../helpers/MATERIAL_UI_COMPONENTS/"

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControlTailwind fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Choose
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          <option defaultChecked value={10}>Algorand</option>
          <option value={20}>Ethereum</option>
        </NativeSelect>
      </FormControlTailwind>
    </Box>
  );
}
