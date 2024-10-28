import React from 'react';

export const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<div className="RootLayout">
			{children}
		</div>
	)
}