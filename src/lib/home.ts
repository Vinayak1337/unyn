export const homeBannerData = {
	title: 'Empowering Youth for a Brighter Future',
	description: `United Youth Network (UNYN) is a dynamic and impactful international
    student society committed to nurturing the talents and potential of
    young individuals across colleges and universities of different
    countries. Join us today to be a part of our mission to create a
    brighter and more promising future.`,

	cta: {
		text: 'Join',
		href: '?popup=join' as const
	},
	learnMore: '/' as const,
	carousel: {
		title: 'Empower the Youth Today',
		description: 'Unlock Your Potential and Make a Difference',
		images: ['/banner.png', '/banner.png', '/banner.png']
	}
};

export const individualYouthData = {
	title: [
		'Empowering Youth for a Brighter Future: ',
		'UNYN’s Impact on Youth Individuals'
	] as [string, string],
	description: `United Youth Network (UNYN) is dedicated to empowering young
	individuals by providing them with opportunities for growth and development. Through our international student society, we aim to nurture their talents and unlock their full potential. By investing in the youth today,
	we believe that we can create a brighter and more promising future for tomorrow.`,
	image: '/individual.png'
};
