import { IPortfolioItemParam } from "@/app/my/portfolio/blox/projects/portfolio-item";


interface IPortfolioData {
	imageUrl: string;
	appLink?: string;
	navigateTo?: string;
	displayText: string;
};

export const portfolioList: IPortfolioData[] = [
	{
		imageUrl: '/images/alive-podcast.png',
		appLink: 'https://alivepodcastnetwork.com/',
		displayText: 'alive podcast',
	},
	{
		imageUrl: '/images/surveybooker-crm.png',
		appLink: 'https://sandbox.surveybooker.co.uk/',
		displayText: 'surveybooker',
	},
	{
		imageUrl: '/images/sim-gym.png',
		appLink: 'https://play.google.com/store/apps/details?id=com.simgym&pli=1',
		displayText: 'sim gym',
	},
	{
		imageUrl: '/images/projects/video-streaming.jpg',
		appLink: '',
		displayText: 'Video Streaming',
	},
	{
		imageUrl: '/images/projects/pdf-generator-with-graph.jpg',
		appLink: '',
		displayText: 'Pdf Generator and Schedular',
	},
	{
		imageUrl: '/images/projects/nomadic-insight.png',
		appLink: 'https://nomadicsurveys.com/',
		displayText: 'Nomadic Surveys',
	},
];



export interface GenericExternalData {
	imageUrl?: string;
	link: string;
	text: string;
}

export const technologyData: GenericExternalData[] = [
	{ imageUrl: '/images/technologies/node.jpg', link: '', text: 'Node.JS' },
	{ imageUrl: '/images/technologies/react.png', link: '', text: 'React' },
	{ imageUrl: '/images/technologies/angular.png', link: '', text: 'Angular' },
	{ imageUrl: '/images/technologies/html-css-js.jpg', link: '', text: 'HTML / CSS / JS' },
	{ imageUrl: '/images/technologies/mysql.png', link: '', text: 'MySQL' },
	{ imageUrl: '/images/technologies/postgre.jpg', link: '', text: 'PostgreSQL' },
	{ imageUrl: '/images/technologies/ts.png', link: '', text: 'Typescript' }
];



export const profileListData: GenericExternalData[] = [
	{ imageUrl: '/images/profiles/Linkedin.png', link: 'https://www.linkedin.com/in/findankit/', text: 'Linkedin' },
	{ imageUrl: '/images/profiles/Github.png', link: 'https://github.com/Ankit7991', text: 'Github' },
	{ imageUrl: '/images/profiles/hackerrank.png', link: 'https://www.hackerrank.com/profile/m_findankit', text: 'HackerRank' },
	{ imageUrl: '/images/profiles/codewars.png', link: 'https://www.codewars.com/users/Ankit7991', text: 'Codewars' },
	{ imageUrl: '/images/profiles/Leetcode.png', link: 'https://leetcode.com/u/ankit7991/', text: 'Leetcode' },
];
