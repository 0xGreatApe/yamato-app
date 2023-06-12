import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const ExpandableBox = ({ children, href }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={href} passHref>
        <Box rounded="25px" bg="brand.100" p={10}>
          {children}
        </Box>
      </Link>
    </motion.div>
  );
};

export default ExpandableBox;
