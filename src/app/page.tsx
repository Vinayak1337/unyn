import Banner from '@ui/Home/Banner/Banner';
import { homeBannerData, individualYouthData } from '@lib/home';
import IndividualYouth from '@ui/Home/IndividualYouth/IndividualYouth';
import Empower from '@ui/Home/Empower/Empower';
import PotentialImpact from '@ui/Home/PotentialImpact/PotentialImpact';

// Didn't have time to write types properly for context components such as banner

export default function Home() {
	return (
		<div className='mt-14 center-container flex flex-col items-center'>
			<Banner {...homeBannerData} />
			<IndividualYouth {...individualYouthData} />
			<Empower />
			<PotentialImpact />
		</div>
	);
}
