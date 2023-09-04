import { FC, useMemo } from "react";

const OurMethodTab: FC<{
  tab: number;
}> = ({
  tab = 0
}) => {
  const {
    titleClassName,
    title,
    ourProcess,
    description
  } = useMemo(() => {
    return {
      titleClassName: tab === 0 ? 'transition-transform translate-y-[0vh] w-fit	h-fit' :  
      tab === 1 ? 'transition-transform translate-y-[40vh] w-fit	h-fit' :
      tab === 2 ? 'transition-transform translate-y-[0vh] w-fit	h-fit':
      tab === 3 ? 'transition-transform translate-y-[8vh] w-fit	h-fit': 
      'transition-transform translate-y-[40vh] w-fit	h-fit',
      title: tab === 0 ? 'Research\n&Discovery' :  
      tab === 1 ? 'Strategy\n& Direction' :
      tab === 2 ? 'Design\n& Development':
      tab === 3 ? 'Finesse\n& Launch': 
      'Support\n& Management',
      ourProcess: tab === 0 ? ' transition-transform -translate-y-0 translate-x-[0vw] w-fit	h-fit' :  
      tab === 1 ? ' transition-transform -translate-y-60 translate-x-[30vw] w-fit	h-fit' :
      tab === 2 ? ' transition-transform -translate-y-0 translate-x-[0vw] w-fit	h-fit':
      tab === 3 ? ' transition-transform -translate-y-32 translate-x-[30vw] w-fit	h-fit': 
      ' transition-transform -translate-y-60 translate-x-[30vw] w-fit	h-fit',
      description: tab === 0 ? <><p className="ml-16 w-[410px] text-white font-light">
      Every project that we work on starts with a period of research and discovery. This involves looking into your goals and objectives, researching your industry and target audience, competitors, latest trends and insights. We also look into existing brand collateral to ensure that any new design or strategy is in line with your existing messaging.
      </p></> :  
      tab === 1 ? <><p className="ml-16 w-[410px] text-white font-light">
      Once we understand the project goals, our next step is to begin developing a comprehensive brand strategy and creative direction.<br /> <br />We will craft a blueprint if needed that guides decisions related to messaging, design, user experience, search marketing, audience segmentation, and more. This ensures all decisions are made in line with your needs and that each deliverable will contribute to its success
      </p></> :
      tab === 2 ? <><p className="ml-16 w-[410px] text-white font-light">
      Welcome to the enchanting realm where the magic unfolds! The third step in our process is where the real creation begins.<br /> <br />We start from scratch, building a captivating brand identity, designing a user-friendly website, curating compelling content, and launching strategic search marketing campaigns.
      </p>
      <p className="ml-18 w-[410px] text-white font-light">
      Every aspect is meticulously tailored to align with your objectives and capture the hearts of your target audience. Get ready to witness the transformation and see your vision come to life in the most extraordinary way.
      </p></>:
      tab === 3 ? <><p className="ml-16 w-[410px] text-white font-light">
      Moving onto the fourth and final step of our process, it{"'"}s time to add those finishing touches. Any additional tweaks or adjustments that may be required will be carefully addressed at this stage. <br/><br/> Once everything has been approved, we{"'"}re all set for the big launch! Rest assured, We{"'"}ll provide you with all the essential brand assets and files, including logos, social media templates, font files, and brand guidelines. 
      <br/><br/>
      I{"'"}m fully committed to ensuring that you have all the necessary elements at your fingertips to achieve remarkable success on the day of your launch.

      </p></>: 
      <><p className="ml-16 w-[410px] text-white font-light">
      We offer extensive training and dedicated support to assist my clients in implementing their brand or product and digital strategy effectively. With our comprehensive services, you can trust that your product will thrive with sustained success.
      </p></>,
    }
  }, [tab])
  return (
    <div className="flex w-screen justify-center">
      <div className="animate-fade-in mt-40 2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] pl-14">
        <h1 className={`mb-[15vh] duration-500 2xl:text-8xl xl:text-6xl text-white font-semibold leading-[86.558px] tracking-[-0.456px] whitespace-pre 
        ${titleClassName}`}>
          {title}
        </h1>
        <div className={`flex duration-500 ${ourProcess}`}>
          <span className="w-[153px] text-lg text-white font-semibold leading-[21.156px] tracking-[-0.09px]">
            (Our Process)
          </span>
          {description}
        </div>
      </div>
    </div>
  );
};

export default OurMethodTab;