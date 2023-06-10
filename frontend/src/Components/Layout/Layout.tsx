import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Container from "../Container/Container";
import Footer from "../Navigation/Footer/Footer";
import Header from "../Navigation/Header/Header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Yamato Voting</title>
      </Head>
      <Flex
        flex="1 0"
        bgGradient="linear(to-l, #04080e, #0b192a)"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center-top"
        bgAttachment="fixed"
        p="0 0 4rem"
        zIndex="-1"
      >
        <Container>
          <Header />
          <Flex
            direction="column"
            minH="85vh"
            bgGradient="linear(to-l, #04080e, #0b192a)"
          >
            <Box
              bgGradient="linear(to-l, #04080e, #0b192a"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              backgroundPosition="center-top"
              backgroundAttachment="fixed"
              p="0 0 4rem"
            >
              {children}
            </Box>
            <Footer />
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
