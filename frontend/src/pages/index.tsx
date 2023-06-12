import styles from "../styles/Home.module.css";
import Layout from "../Components/Layout/Layout";
import Head from "next/head";
import {
  Flex,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Box,
  ButtonGroup,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import ExpandableBox from "Components/ExpandableBox/ExpandableBox";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Yamato Finance</title>
          {/* <meta name="description" content="noindex,nofollow" /> */}
        </Head>
        <Flex justifyContent="center">
          <Heading
            as="h2"
            fontSize="5rem"
            color="brand.0"
            fontWeight="medium"
            size="lg"
            p="2rem"
            mb="1rem"
            textAlign="center"
          >
            Decentralised Voting for the Future
          </Heading>
        </Flex>
        <SimpleGrid
          spacing={20}
          minChildWidth="140px"
          justifyItems="center"
          alignItems="center"
        >
          <ExpandableBox href="/mint">
            <Image src="/Mint.svg" alt="Mint Yamato Tokens" borderRadius="lg" />
            <Heading color="brand.20" size="md">
              Mint Yamato Tokens
            </Heading>
            <Text fontSize="sm" color="brand.20">
              Mint Yamato governance token to participate in voting
            </Text>
          </ExpandableBox>

          <ExpandableBox href="/vote">
            <Image src="/Vote.svg" alt="Vote" borderRadius="lg" />
            <Heading color="brand.20" size="md">
              Vote on Proposals
            </Heading>
            <Text fontSize="sm" color="brand.20">
              Vote or Delegate your voting Power to other users
            </Text>
          </ExpandableBox>

          <ExpandableBox href="/proposals">
            <Image
              src="/Proposals.svg"
              alt="proposals image"
              borderRadius="lg"
            />
            <Heading color="brand.20" size="md">
              Create Proposals
            </Heading>
            <Text fontSize="sm" color="brand.20">
              Create new proposals for the community to vote on
            </Text>
          </ExpandableBox>

          <ExpandableBox href="/docs">
            <Image src="/Docs.svg" alt="Docs Image" borderRadius="lg" />
            <Heading color="brand.20" size="md">
              Comprehensive Docs
            </Heading>
            <Text fontSize="sm" color="brand.20">
              Review the comprehensive docs on how to setup and use this
              platform.
            </Text>
          </ExpandableBox>
        </SimpleGrid>

        
      </Layout>
    </>
  );
}
// <div>
//   <main className={styles.main}>
//     <InstructionsComponent></InstructionsComponent>
//   </main>
// </div>
