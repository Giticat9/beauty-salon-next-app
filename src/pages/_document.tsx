import Document, { Head, Html, Main, NextScript } from 'next/document';
import { StyledComponentRegistry } from '@/lib/styledRegistry';

class AppDocument extends Document {
	render() {
		return (
			<Html lang="ru">
				<Head />
				<body>
				<StyledComponentRegistry>
					<Main />
				</StyledComponentRegistry>
				<NextScript />
				</body>
			</Html>
		);
	}
}

export default AppDocument;