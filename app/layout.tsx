'use client';

import './globals.css';
import { PrivyProvider } from '@privy-io/react-auth';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true}>
				<PrivyProvider
					appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
					config={{
						appearance: {
							theme: 'light',
							accentColor: '#676FFF',
							logo: 'https://cryptologos.cc/logos/flow-flow-logo.png', // Replace with your logo
						},
						embeddedWallets: {
							createOnLogin: 'all-users',
						},
						// Flow EVM configuration
						defaultChain: {
							id: 747,
							name: 'Flow',
							network: 'flow',
							nativeCurrency: {
								name: 'Flow',
								symbol: 'FLOW',
								decimals: 18,
							},
							rpcUrls: {
								default: {
									http: [
										'https://mainnet.evm.nodes.onflow.org',
									],
								},
							},
							blockExplorers: {
								default: {
									name: 'Flowscan',
									url: 'https://evm.flowscan.io/',
								},
							},
						},
						supportedChains: [
							{
								id: 747,
								name: 'Flow',
								network: 'flow',
								nativeCurrency: {
									name: 'Flow',
									symbol: 'FLOW',
									decimals: 18,
								},
								rpcUrls: {
									default: {
										http: [
											'https://mainnet.evm.nodes.onflow.org',
										],
									},
								},
								blockExplorers: {
									default: {
										name: 'Flowscan',
										url: 'https://evm.flowscan.io/',
									},
								},
							},
						],
					}}
				>
					{children}
				</PrivyProvider>
			</body>
		</html>
	);
}
