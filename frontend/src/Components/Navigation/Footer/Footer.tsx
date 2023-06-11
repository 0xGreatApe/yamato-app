import { Box, ButtonGroup, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaMedium, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex
      as="footer"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      fontWeight="thin"
      color="brand.0"
      mt="2rem"
      p="1.6rem"
    >
      <Box>
        <Text fontSize="sm">
          Copyright © {new Date().getFullYear()} 0xGreatApe inc.
        </Text>
      </Box>
      <br />
      <Flex>
        <ButtonGroup variant="ghost" gap={4}>
          {/* ******** TWITTER ******** */}
          <IconButton
            as="a"
            href="https://twitter.com/0xGreatApe"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="3rem" color="white" />}
            _hover={{ bg: "brand.40" }}
          />
          {/* ******** MEDIUM ******** */}
          <IconButton
            as="a"
            href="https://medium.com/@0xgreatape"
            aria-label="YouTube"
            icon={<FaMedium fontSize="3rem" color="white" />}
            _hover={{ bg: "brand.40" }}
          />
          {/* ******** GITHUB ******** */}
          <IconButton
            as="a"
            href="https://github.com/0xGreatApe"
            aria-label="Github"
            icon={<FaGithub fontSize="3rem" color="white" />}
            _hover={{ bg: "brand.40" }}
          />
        </ButtonGroup>
      </Flex>
      <Flex>
        <Box>
          <Text fontSize="sm" fontWeight="thin">
            <a
              href="https://twitter.com/0xGreatApe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Support
            </a>
          </Text>
        </Box>
        <Box ml="3rem">
          <Text fontSize="sm" fontWeight="thin">
            <a href=" " target="_blank" rel="noopener noreferrer">
              Privacy policy
            </a>
          </Text>
        </Box>
        <Box ml="3rem">
          <Text fontSize="md" fontWeight="thin">
            <a href=" " target="_blank" rel="noopener noreferrer">
              Terms &amp; conditions
            </a>{" "}
            {/* | All trademarks and copyrights belong to their respective owners. */}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Footer;
