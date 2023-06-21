import Layout from "../Components/Layout/Layout";
import Head from "next/head";
import { Flex, Image, Heading, Text, Box, SimpleGrid } from "@chakra-ui/react";
import CardButton from "Components/CardButton/CardButton";
import styles from "../styles/Home.module.css";
import DarkBackground from "Components/DarkBackground/DarkBackground";
import { tokenService } from "./api/tokenService";
import { useEffect, useState } from "react";

export default function Home() {
  const [totalSupply, setTotalSupply] = useState(null);
  const [error, setError] = useState("");

  const fetchTotalSupply = async () => {
    try {
      const data = await tokenService.getTotalSupply();
      setTotalSupply(data);
    } catch (error) {
      setError("Error fetching total supply.");
    }
  };

  useEffect(() => {
    fetchTotalSupply();
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <title>Yamato Finance</title>
        </Head>
        <Heading className="heading" fontSize="5rem" color="brand.20">
          Decentralised Voting for the Future
        </Heading>
        <SimpleGrid className={styles.simpleGrid} minChildWidth="140px">
          <CardButton href="/mint">
            <Image src="/Mint.svg" alt="Mint Yamato Tokens" />
            <Heading color="brand.20" size="md">
              Mint Yamato Tokens
            </Heading>
            <Text fontSize="sm" color="brand.20">
              Mint Yamato governance token to participate in voting
            </Text>
          </CardButton>

          <CardButton href="/vote">
            <Image src="/Vote.svg" alt="Vote" />
            <Heading color="brand.20" size="md">
              Vote on Proposals
            </Heading>
            <Text fontSize="sm" color="brand.20">
              Vote or Delegate your voting Power to other users
            </Text>
          </CardButton>

          <CardButton href="/proposals">
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
          </CardButton>

          <CardButton href="https://github.com/0xGreatApe/yamato-app">
            <Image src="/Docs.svg" alt="Docs Image" />
            <Heading color="brand.20" size="md">
              Comprehensive Docs
            </Heading>
            <Text fontSize="sm" color="brand.20">
              Review the comprehensive docs on how to setup and use this
              platform.
            </Text>
          </CardButton>
        </SimpleGrid>
        <Flex className={styles.flexContainer}>
          <DarkBackground>
            <Box overflow="hidden" p={4}>
              <Flex flexDirection={["column", "row"]} mt={4} alignItems="start">
                <Box mr={8}>
                  <Image
                    className={styles.image}
                    src="yamato-icon.svg"
                    alt="Yamato Logo"
                    width={200}
                    height={200}
                  />
                </Box>
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  mb={4}
                  width="80%"
                >
                  <Heading
                    className={styles.heading1}
                    fontWeight="bold"
                    color="brand.20"
                  >
                    YAMATO TOKEN STATS
                  </Heading>

                  <Box flex="1" mt={4} width="100%">
                    <Flex justifyContent="space-around">
                      <Box textAlign="center">
                        <Text className="heading2">Tokens Minted</Text>
                        <Text className="body">
                          {totalSupply && <p> {totalSupply}</p>}
                          {error && <p>Error: {error}</p>}
                        </Text>
                      </Box>

                      <Box textAlign="center">
                        <Text className="heading2">Total Proposals</Text>
                        <Text className="body">5</Text>
                      </Box>

                      <Box textAlign="center">
                        <Text className="heading2">Votes Cast</Text>
                        <Text className="body">400</Text>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </DarkBackground>
        </Flex>
      </Layout>
    </>
  );
}
