import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  useToken,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  const backgroundColor = useToken("colors", "brand.80"); // Navy blue
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      console.log(`Scrolled: ${isScrolled}`);
      setScrolled(isScrolled);
    };

    // Only add the event listener if window is defined (i.e., we're on the client side)
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      // Clean up the event listener when the component is unmounted
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Flex
      as="nav"
      minWidth="max-content"
      gap="2"
      className={styles.header}
      style={{
        backgroundColor,
        borderBottom: scrolled ? "1px solid #e8f1f2" : "none",
      }}
    >
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
      <Spacer></Spacer>
      <ButtonGroup variant="ghost" gap="2">
        <Link href="/mint" shallow>
          <Button
            color="brand.0"
            _hover={{
              borderColor: "brand.40",
              borderBottomWidth: "2px",
              borderRadius: "1px",
              transition: "ease-in-out 0.2s",
            }}
          >
            Mint Tokens
          </Button>
        </Link>

        <Link href="/vote" shallow>
          <Button
            color="brand.0"
            aria-current="page"
            _hover={{
              borderColor: "brand.40",
              borderBottomWidth: "2px",
              borderRadius: "0",
              transition: "ease-in-out 0.2s",
            }}
          >
            Vote
          </Button>
        </Link>

        <Link href="/proposals" shallow>
          <Button
            color="brand.0"
            _hover={{
              borderColor: "brand.40",
              borderBottomWidth: "2px",
              borderRadius: "0",
              transition: "ease-in-out 0.2s",
            }}
          >
            Proposals
          </Button>
        </Link>

        <Link href="/docs" shallow>
          <Button
            color="brand.0"
            _hover={{
              borderColor: "brand.40",
              borderBottomWidth: "2px",
              borderRadius: "0",
              transition: "ease-in-out 0.2s",
            }}
          >
            Docs
          </Button>
        </Link>
      </ButtonGroup>
      <Spacer />
      <Spacer />
      <ConnectButton
        showBalance={{
          smallScreen: false,
          largeScreen: true,
        }}
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "full",
        }}
      />
    </Flex>
  );
}
