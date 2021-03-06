import { FC } from 'react';

interface MapPinProps {
	color?: string;
	size?: number;
}

export const MapPin: FC<MapPinProps> = ({
	color = '#FFF',
	size = 18
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}height={size}
		viewBox={`0 0 24 24`}
		fill="none"
		stroke={color}
		stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
			<circle cx="12" cy="10" r="3"></circle>
	</svg>
);
