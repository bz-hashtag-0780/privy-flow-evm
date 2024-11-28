'use client';

import { usePrivy } from '@privy-io/react-auth';

export default function LoginWithPrivy() {
	const { ready, authenticated, login, logout, user } = usePrivy();

	if (!ready) return <p>Loading...</p>;

	return (
		<div>
			{authenticated ? (
				<div>
					{user?.email && <p>Welcome, {String(user?.email)}!</p>}
					<p>Connected Wallet: {user?.wallet?.address}</p>
					<button onClick={logout}>Logout</button>
				</div>
			) : (
				<button onClick={login}>Login with Privy</button>
			)}
		</div>
	);
}
