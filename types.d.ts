/// <reference types="next" />
/// <reference types="next/image-types/global" />

interface WithLink {
	href: __next_route_internal_types__.RouteImpl<string>;
	label: string;
	children?: React.ReactNode;
}

interface WithChildren {
	children: React.ReactNode;
	href?: __next_route_internal_types__.RouteImpl<string>;
	label?: string;
}
