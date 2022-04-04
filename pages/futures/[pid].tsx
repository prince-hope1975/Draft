import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Data from "../../data/ProjectsData";
import { Container, Typography, Box, Button, Switch , OutlinedInput} from "@mui/material";
import { BiDownArrow } from "react-icons/bi";
import { GiSettingsKnobs } from "react-icons/gi";
import { useContextObject } from "../../context";

const Pid = () => {
  // const [data, setData] =useState< Array<any>|string >()
  const { media } = useContextObject();
  const router = useRouter();
  const { pid } = router.query;
  const data = Data.filter(({ name }) => name == pid);
  useEffect(() => {
    console.log("data", data);
    console.log(pid);
  }, [data]);
  return (
    //   @ts-ignore
    <div>
      {data.map((props, index) => {
        if (index == 0) {
          return (
            <Container
              sx={{
                width: `calc(100% - ${media.width}px)`,
                ml: `${media.width}px`,
              }}
              className={`flex flex-col items-start pt-0 p-3 gap-2 pb-[8rem]  ${
                media.isTrue ? "ml-[240px]" : "ml-[0px]"
              }`}
            >
              <Typography variant="h4">Trade</Typography>
              <Box
                className={`w-full flex justify-between gap-[1px] ${
                  !media.isTrue ? "" : ""
                }`}
              >
                <Button
                  className={`${
                    !media.isTrue ? "w-[50%]" : ""
                  } p-3 bg-[hsl(0,0%,12%)] `}
                >
                  Buy
                </Button>
                <Button
                  className={`${
                    !media.isTrue ? "w-[50%]" : ""
                  } p-3 bg-[hsl(0,0%,12%)] `}
                >
                  Sell
                </Button>
              </Box>
              <Container
                className={`bg-[hsl(0,0%,12%)] p-4 flex flex-col gap-4`}
              >
                <Box className="flex justify-between">
                  <div>
                    <Switch color="info" className="color-red-200" />
                    Limit order
                  </div>
                  <GiSettingsKnobs
                    color="white"
                    className="text-lg cursor-pointer"
                  />
                </Box>
                <Typography variant="h4" className="flex flex-col">
                  <OutlinedInput
                    placeholder="Pay"
                    type="number"
                    className="pt-4 placeholder:text-blue-400 text-white"
                  />
                </Typography>
                <Box className="flex w-full justify-center p-4">
                  <BiDownArrow className="text-blue-400" />
                </Box>
                <Typography variant="h4" className="flex flex-col">
                  <OutlinedInput minRows={0}
                    placeholder="Pay"
                    type="number"
                    className="pt-4 placeholder:text-blue-400 text-white"
                  />
                </Typography>
              </Container>
            </Container>
          );
        }
      })}
    </div>
  );
};
// export async function getStaticPaths() {
//   // Return a list of possible value for id
// }

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
// }
export default Pid;
