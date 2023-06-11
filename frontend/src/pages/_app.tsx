import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { ChakraProvider } from "@chakra-ui/react";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  DisclaimerComponent,
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

const Disclaimer: DisclaimerComponent = ({ Text, Link }) => (
  <Text>
    By connecting your wallet, you agree to the{" "}
    <Link href="https://termsofservice.xyz">Terms of Service</Link> and
    acknowledge you have read and understand the protocol{" "}
    <Link href="https://disclaimer.xyz">Disclaimer</Link>
  </Text>
);

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
          appInfo={{
            appName: "Yamato Finance",
            disclaimer: Disclaimer,
          }}
          theme={darkTheme({
            accentColor: "#006494",
            accentColorForeground: "white",
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
