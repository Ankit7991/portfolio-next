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



interface ITechnologies {
	imageUrl: string;
	link: string;
	text: string;
}

export const technologyData: ITechnologies[] = [
	{ imageUrl: '/images/technologies/node.jpg', link: '', text: 'Node.JS' },
	{ imageUrl: '/images/technologies/react.png', link: '', text: 'React' },
	{ imageUrl: '/images/technologies/angular.png', link: '', text: 'Angular' },
	{ imageUrl: '/images/technologies/html-css-js.jpg', link: '', text: 'HTML / CSS / JS' },
	{ imageUrl: '/images/technologies/mysql.png', link: '', text: 'MySQL' },
	{ imageUrl: '/images/technologies/postgre.jpg', link: '', text: 'PostgreSQL' },
	{ imageUrl: '/images/technologies/ts.png', link: '', text: 'Typescript' }
];

