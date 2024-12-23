"use client";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";

export const FooterBottonNavigation = () => {
  const [value, setValue] = useState(0);

  return (
    <nav className="flex gap-4    items-center justify-center absolute bottom-0 w-full drop-shadow-md lg:drop-shadow-xl">
      <Box sx={{ width: "100%" }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Dashboard" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Products" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Login" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    </nav>
  );
};
