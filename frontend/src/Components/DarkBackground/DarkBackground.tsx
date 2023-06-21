import { Box } from "@chakra-ui/react";
import React from "react";
import styles from "./DarkBackground.module.css";

export default function DarkBackground({ children }) {
  return (
    <Box flex="1" className={styles.darkBackground} bg="brand.100">
      {children}
    </Box>
  );
}
