import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { AppGlobalStyles } from '@/styles';
import { RootLayout } from '@/layouts/rootLayout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? (page => page);
	return (
		<RootLayout>
			<AppGlobalStyles />
			{getLayout(<Component {...pageProps ?? {}} />)}
		</RootLayout>
	);
}