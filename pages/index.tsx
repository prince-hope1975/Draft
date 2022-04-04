import NavLink from "next/link";
import { CssBaseline, Container, Box } from "@mui/material";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { useContextObject } from "../context";
import Data from "../data/ProjectsData";

function App() {
  const { media } = useContextObject();
  const router = useRouter()

  return (
    <>
      
      <main
        className={`space-y-6  mt-11 px-4 ${
          media.isTrue ? "ml-[240px]" : "ml-[0px]"
        }`}
      >
        <Container className="  gap-[1px] flex flex-col rounded-lg overflow-hidden  p-0">
          <Box className="flex w-full justify-between bg-[hsl(0,0%,18%)] text-gray-100 p-3 ">
            <div>Ticker</div>
            <div>Pool Price</div>
            {media.isTrue && (
              <>
                <div>Oracle Price</div>
                <div>Premium</div>
              </>
            )}
          </Box>
          {Data.map(
            (
              { logo: Logo, name, ticker, poolPrice, oraclePrice, premium },
              index
            ) => {
              return (
                <Box onClick={()=>router.push(`/futures/${name}`)}
                  key={`${name}_${index}`}
                  className="flex justify-between p-3 py-4 bg-[hsl(0,0%,15%)] cursor-pointer hover:bg-[hsl(0,0%,18%)]  "
                >
                  <Box className="flex min-w-[10%]  bg-[hsl(0,0%,16%)] items-center gap-1 transition-colors delay-300 ">
                    <Logo />
                    {ticker}
                  </Box>
                  <Box className="min-w-[10%]">
                    {poolPrice}
                    <span className="text-[10px]">UST</span>
                  </Box>
                  {media.isTrue && (
                    <>
                      <Box className="min-w-[10%]">{oraclePrice}</Box>
                      <Box className="min-w-[10%] flex justify-end">{premium}%</Box>
                    </>
                  )}
                </Box>
              );
            }
          )}
        </Container>
      </main>
    </>
  );
}

export default App;
