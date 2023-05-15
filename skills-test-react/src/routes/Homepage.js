import React from "react";
import { Container, Box, Typography } from "@mui/material";
import AccountMenu from "./AccountMenu";

export const Homepage = () => {
    const handleOnClick = (e) => {
            e.preventDefault();
        };

return (
    <Container maxWidth="sm">
	<AccountMenu onClick={handleOnClick} />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          React Skills test
        </Typography>
      </Box>
    </Container>
  );
};

export default Homepage;