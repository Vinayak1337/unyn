import Banner from '@ui/Home/Banner/Banner';
import { homeBannerData, individualYouthData } from '@lib/home';
import IndividualYouth from '@ui/Home/IndividualYouth/IndividualYouth';
import Empower from '@ui/Home/Empower/Empower';
import PotentialImpact from '@ui/Home/PotentialImpact/PotentialImpact';
import Testimonials from '@ui/Home/Testimonials/Testimonials';
import EmpoweringPotential from '@ui/Home/EmpoweringPotential/EmpoweringPotential';
import Newsletter from '@ui/Home/Newsletter/Newsletter';

// Didn't have time to write types properly for context components such as banner

export default function Home() {
	return (
		<main className='mt-14 center-container flex flex-col items-center gap-40'>
			<Banner {...homeBannerData} />
			<IndividualYouth {...individualYouthData} />
			<Empower />
			<PotentialImpact />
			<Testimonials />
			<EmpoweringPotential />
			<Newsletter />
		</main>
	);
}
