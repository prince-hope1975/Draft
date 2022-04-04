

import { GiPayMoney } from "react-icons/gi";
import { CgMenuLeft } from "react-icons/cg";

export const CgMenuLeftTailwind = () => <CgMenuLeft className="" style={{fontSize:"30px", color: "white"}}/>
export const PayIconTailwind = () => (
  <GiPayMoney
    className="text-lg "
    style={{
      //   WebkitBackgroundClip: "text",
      fontSize: "40px",
      //   background: "-webkit-linear-gradient(#eee, #333)",
      //   backgroundClip: "text",
      //   WebkitTextFillColor: "transparent",
    }}
  />
);
