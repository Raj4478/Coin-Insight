
import { Box } from "@mui/material";


import HeroCaraousel from "./HeroCaraousel";
import HeroExchangeContainer from "./HeroExchangeContainer";
import HeroText from "./HeroText";



const HeroContent = () => {
  return (
    <Box
      width="100%"
      display="flex"
      bgcolor="white"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="16px 0px"
      sx={{ gap: "30px", zIndex: "10" }}
    >
      <HeroText></HeroText>
      <HeroCaraousel></HeroCaraousel>
      <HeroExchangeContainer></HeroExchangeContainer>
    </Box>
  );
};


export default HeroContent;
