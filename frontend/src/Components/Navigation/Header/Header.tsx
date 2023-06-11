import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./Header.module.css";
import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <Flex className={styles.header}>
      <Link href="/" shallow>
        <Box className={styles.logo_container}>
          <Image
            className={styles.yamato_logo}
            src="yamato_logo_light.svg"
            alt="Yamato Logo"
            width={2000}
            height={400}
          />
        </Box>
      </Link>
      <ConnectButton></ConnectButton>
    </Flex>
  );
}
