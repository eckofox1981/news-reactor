import { Box, Drawer, List, ListItem, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { mainTheme } from "../styles/theme";

export function RetractableSideBar({ isDrawerOpen, closeDrawer }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <Drawer anchor="left" open={isDrawerOpen} onClose={closeDrawer}>
        <Box
          p={2}
          width="fit-content"
          role="presentation"
          sx={{
            backgroundColor: (theme) => theme.palette.primary.dark,
            color: (theme) => theme.palette.primary.main,
            minHeight: "100%",
            p: 2,
          }}
        >
          <nav aria-label="main mailbox folders">
            <h2>Quick access</h2>
            <List>
              <ListItem disablePadding>Hej</ListItem>
              <ListItem disablePadding>dåsedfvzsedcvzeasdcvzesd</ListItem>
            </List>
          </nav>
        </Box>
      </Drawer>
    </ThemeProvider>
  );
}
