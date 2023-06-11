import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { ChakraProvider } from "@chakra-ui/react";

import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, useAccount, WagmiConfig } from "wagmi";
import { mainnet, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
//import MainLayout from "../layout/mainLayout";
import { useRouter } from "next/router";

import myTheme from "../theme/theme";

// FONT FOR WEB APP & CHAKRA UI
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RainbowKitChain } from "@rainbow-me/rainbowkit/dist/components/RainbowKitProvider/RainbowKitChainContext";

const { chains, provider } = configureChains(
  [mainnet, goerli],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Yamato",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export { WagmiConfig, RainbowKitProvider };

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const initialChain: number | RainbowKitChain = parseInt(
    process.env.NEXT_PUBLIC_DEFAULT_CHAIN
  );
  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      if (!isReconnected) router.reload();
    },
  });
  return (
    <ChakraProvider theme={myTheme}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          theme={midnightTheme({
            accentColor: "#1b98e0",
            accentColorForeground: "white",
            borderRadius: "medium",
            fontStack: "rounded",
            overlayBlur: "small",
          })}
          modalSize="wide"
          initialChain={parseInt(process.env.NEXT_PUBLIC_DEFAULT_CHAIN)}
          chains={chains}
        >
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default MyApp;
{
  /* <MainLayout>
<Component {...pageProps} />
</MainLayout> */
}
