import { defineChain, createThirdwebClient } from "thirdweb";
import { Chain, arbitrumSepolia } from "thirdweb/chains";

const integrationChain = defineChain({
    id: 997,
    rpc: "https://rpc.testnet.5ire.network",
});

export const twClient = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
});

import USDC_A from "./abis/usdc";
import FIAT_TOKEN_A from "./abis/fiat-token-v-2-2";
import VIA_A from "./abis/via";

export { USDC_A as USDC_ABI, FIAT_TOKEN_A as FIAT_TOKEN_ABI, VIA_A as VIA_ABI };

export const SOURCE_CHAIN: Chain = arbitrumSepolia;
// export const SOURCE_CHAIN_RPC: string = PolygonAmoyTestnet.rpc[0];
export const SOURCE_CHAIN_ID: number = arbitrumSepolia.id;
export const SOURCE_CHAIN_NAME: string = "Arbitrum Sepolia";
export const SOURCE_USDC_TOKEN_CONTRACT: string =
    "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d";
export const SOURCE_USDC_TOKEN_NAME: string = "USDC";

export const INTEGRATION_CHAIN: Chain = integrationChain;
// export const INTEGRATION_CHAIN_RPC: string =
//     integrationChain.rpc[0];
export const INTEGRATION_CHAIN_ID: number = integrationChain.id;
export const INTEGRATION_CHAIN_NAME: string = "5ire";
export const INTEGRATION_USDC_TOKEN_CONTRACT: string =
    "0x84126A2D8dF65Bb32E6952c351f877E59e02a17f";
export const INTEGRATION_USDC_TOKEN_NAME: string = "tUSDC.arb";

export const INTEGRATION_BRAND_NAME: string = "5ire";

export const SOURCE_MESSAGING_CONTRACT: string =
    "0x448811d70486296d4e2B60E4258328957C94EaA7";
export const INTEGRATION_MESSAGING_CONTRACT: string =
    "0x28d03e97e68Fb138a2318A2627806dfAF9972755";

export const LOGO_URL: string =
    "https://5ire-frontend.vercel.app/images/logo-white.png";
