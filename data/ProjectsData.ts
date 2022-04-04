import { AiFillApple, AiOutlineBranches, AiOutlineAmazon } from "react-icons/ai";

import { IconType } from "react-icons/lib";
interface Data  {
  name:string,
  ticker:string,
  logo: IconType,
  poolPrice:number, premium : number,
  oraclePrice:number,


}
const Data: Array<Data> = [
  {
    name: "Mirror",
    ticker: "MIR",
    logo: AiOutlineBranches,
    poolPrice: 1.66,
    oraclePrice:1.65,
    premium:3
  },
  {
    name: "Apple",
    ticker: "mAAPL",
    logo: AiFillApple,
    poolPrice: 176.31,
    oraclePrice:1.65,
    premium:3
  },
  {
    name: "Amazon",
    ticker: "mAMZN",
    logo: AiOutlineAmazon,
    poolPrice: 3506.82,
    oraclePrice:1.65,
    premium:3
  },
  {
    name: "Mirror",
    ticker: "MIR",
    logo: AiOutlineBranches,
    poolPrice: 1.66,
    oraclePrice:1.65,
    premium:3
  },
  {
    name: "Apple",
    ticker: "mAAPL",
    logo: AiFillApple,
    poolPrice: 176.31,
    oraclePrice:1.65,
    premium:3
  },
  {
    name: "Amazon",
    ticker: "mAMZN",
    logo: AiOutlineAmazon,
    poolPrice: 3506.82,
    oraclePrice:1.65,
    premium:3
  },
  {
    name: "Mirror",
    ticker: "MIR",
    logo: AiOutlineBranches,
    poolPrice: 1.66,
    oraclePrice:1.65,
    premium:3
  },
  {
    name: "Apple",
    ticker: "mAAPL",
    logo: AiFillApple,
    poolPrice: 176.31,
    oraclePrice:1.65,
    premium:3
  },
  {
    name: "Amazon",
    ticker: "mAMZN",
    logo: AiOutlineAmazon,
    poolPrice: 3506.82,
    oraclePrice:1.65,
    premium:3
  },
  {
    name: "Mirror",
    ticker: "MIR",
    logo: AiOutlineBranches,
    poolPrice: 1.66,
    oraclePrice:1.65,
    premium:3
  },
  {
    name: "Apple",
    ticker: "mAAPL",
    logo: AiFillApple,
    poolPrice: 176.31,
    oraclePrice:1.65,
    premium:3
  },
  {
    name: "Amazon",
    ticker: "mAMZN",
    logo: AiOutlineAmazon,
    poolPrice: 3506.82,
    oraclePrice:1.65,
    premium:3
  },
];
export default Data;
