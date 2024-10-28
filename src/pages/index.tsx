import { NextPageWithLayout } from '@/pages/_app';
import { ReactElement } from 'react';

const IndexPage: NextPageWithLayout = () => {
	return <h1>1</h1>
};

IndexPage.getLayout = (page: ReactElement) => {
	return (
		<div className="layout">
			{page}
		</div>
	);
};

export default IndexPage;