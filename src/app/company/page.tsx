import Introduction from '@/components/about/introduction'
import Founder from '@/components/about/founder'
import Recognition from '@/components/about/recognition'
import OurMission from '@/components/about/our-mission'

export const metadata = {
  title: "About Us",
  description: "Learn more about US AIR TECH, our mission, and our founder Dr. Patrick Gbele.",
};

const AboutUsPage = () => {
  return (
    <div className='bg-white rounded-2xl md:mx-10'>
        <Introduction/>
        <OurMission/>
        <Founder/>
        <Recognition/>
    </div>
  )
}

export default AboutUsPage
