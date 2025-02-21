import Introduction from '@/components/about/introduction'
import Founder from '@/components/about/founder'
import Recognition from '@/components/about/recognition'

export const metadata = {
  title: "About Us",
  description: "Learn more about US AIR TECH, our mission, and our founder Dr. Patrick Gbele.",
};

const AboutUsPage = () => {
  return (
    <div>
      <div className='max-w-[2000px] mx-auto px-4 md:px-16'>
        <Introduction/>
        <Founder/>
        <Recognition/>
        </div>
    </div>
  )
}

export default AboutUsPage
