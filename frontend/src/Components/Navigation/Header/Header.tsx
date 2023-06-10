import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./Header.module.css";
import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      h="6.4rem"
      color="brand.0"
      borderRadius="0.4rem"
      overflow="hidden"
      mb="1.2rem"
    >
      <Link href="/dashboard" shallow>
        <a>
          <Box w="25rem" flexShrink="0">
            <Image
              className={styles.yamato_logo}
              src="../../../assets/Yamato-logo.png"
              alt="Yamato Logo"
              // width={500}
              // height={300}
            />
          </Box>
        </a>
      </Link>
      <ConnectButton></ConnectButton>
    </Flex>
  );
}
