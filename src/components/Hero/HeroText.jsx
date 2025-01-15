// Test -------------------------- Importing the Packages ---------------------------------
import { Box, Typography } from '@mui/material';

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
// Contains the CENTERED hero text and with <div> </div> as the WRAPPER
const HeroText = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="90%">
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#5D616D' }}>
        Coin Insights
      </Typography>
      <Typography variant="body1" sx={{ color: '#5D616D' }}>
        Get all the information related to crypto coins in One place
      </Typography>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HeroText;
