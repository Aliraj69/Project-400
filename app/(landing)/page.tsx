import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { BentoGrid } from "@/components/bento-grid";
import Testimonials from "@/components/testimonials";

const LandingPage = () => {
  return ( 
    <div className="h-full ">
      <LandingNavbar />
			<LandingHero />
			<BentoGrid />
			<Testimonials />
    </div>
   );
}
 
export default LandingPage;
