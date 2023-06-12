import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./CardButton.module.css";
import { Box } from "@chakra-ui/react";

const CardButton = ({ children, href }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={href} passHref>
        <Box className={styles.cardButton} bg="brand.100">
          {children}
        </Box>
      </Link>
    </motion.div>
  );
};

export default CardButton;
