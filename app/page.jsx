import { Footer, Navbar } from '../components/shared';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World, Test, Skill } from '../components/cards';

const page = () => {
  return (
    <div className="bg-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <Skill />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <div className="relative">
      <Test />
      <div className="gradient-custom z-0" />
      {/* <WhatsNew /> */}
    </div>
    {/* <World /> */}
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
  )
}

export default page