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
      {/* this is the whole screen background*/}
      <Flex
        flex="1 0"
        bgColor="#13293d"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center-top"
        bgAttachment="fixed"
        p="0 0 4 0rem"
        zIndex="-1"
      >
        <Container>
          <Header />
          <Flex direction="column" minH="85vh" textAlign="center">
            <Box
              bg="transparent"
              backgroundSize="cover"
              backgroundAttachment="fixed"
              p="0 0 4 0rem"
            >
              {children}
            </Box>
          </Flex>
          <Footer />
        </Container>
      </Flex>
    </>
  );
}
