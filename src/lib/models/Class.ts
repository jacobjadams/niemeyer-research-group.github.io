
export type Class = {
	id: string;
	alt: string;
	link?: string;
	number: string;
	level: "undergraduate" | "graduate" | "slash";
	title: string;
	description: string;
	hours: number;
	links: { description: string; link: string; }[];
	offerings: { term: 1 | 2 | 3; size: number; year: number; responses: number; score1: number | null; score2: number | null }[];
};
