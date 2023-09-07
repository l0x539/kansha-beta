import Image from "next/image";
import { Footer } from "./PartnersPage";
import FooterContent from "../FooterContent";

const PortfolioLaPalma = () => {
  return (
    <div className="relative">
      <div className="h-full mt-40 flex justify-center">
        <div className="w-[94.5rem]">
          <div className="mx-8 flex justify-between">
            <h1 className="text-right text-8xl text-white">La Palma</h1>
            <div className="grid grid-cols-2 gap-x-28 gap-y-8">
              <div className="flex items-end text-white text-lg pb-4">
                Business design
              </div>
              <div className="flex items-end text-white text-lg">
                Website <br />
                Dashboard
              </div>
              <div className="text-white text-lg">Brand design</div>
              <div className="text-white text-lg">
                Branding <br />
                Social Media
              </div>
            </div>
          </div>
          <div className="mx-14 grid grid-cols-2 mt-44 text-lg">
            <div className="relative">
              <h6 className="w-96 text-white">Introduction</h6>
            </div>
            <div>
              <p className="text-white leading-[normal]">
                La Palma FC stands as a pioneering decentralized football 
                <br />club, where decisions are collaboratively crafted by its 
                <br />member community.
              </p>
              <Image
                className="mt-[-5rem] ml-4 mix-blend-exclusion"
                src={"/assets/images/lapalma_bg_balls.png"}
                width={726.511}
                height={623}
                alt="LaPalma soccer balls background by Kansha"
              />
            </div>
          </div>
          <div className="mx-8 mt-[-29.5rem] relative">
            <Image
              src={"/assets/images/lapalma_desktop.png"}
              width={1467}
              height={879}
              alt="LaPalma Desktop preview by Kansha"
            />
            <Image
              className="absolute top-80 right-32 shadow-[0px_3.2964px_206.02493px_32.96399px_rgba(0,_0,_0,_0.60)]"
              src={"/assets/images/lapalma_mobile.png?qsd"}
              width={308.213}
              height={595}
              alt="LaPalma mobile preview by Kansha"
            />
          </div>
          <div className="mx-8 mt-56 grid grid-cols-2 gap-x-10">
            <div className="flex justify-center">
              <Image
                className="rounded-[37.72px] shadow-[0px_-5.29px_165.43px_0px_rgba(83,83,83,0.7)]"
                src={"/assets/images/lapalma_web3.png"}
                width={420.18}
                height={489}
                alt="LaPalma web3 by Kansha"
              />
            </div>
            <div className="flex justify-center">
              <Image
                className="rounded-[49.55px] shadow-[0px_2.75px_172.04px_0px_rgba(83,83,83,0.5)]"
                src={"/assets/images/lapalma_selection.png"}
                width={662}
                height={502.35}
                alt="LaPalma selection by Kansha"
              />
            </div>
          </div>
          <div className="mx-8 mt-60 grid grid-cols-2">
            <div>
              <h5 className="text-[#999] font-semibold">Lorem Ipsum</h5>
              <p className="mt-11 text-white leading-[normal] text-lg font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
                <br />nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit 
                <br />laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo 
                <br />posuere malesuada. Curabitur at cursus justo. 
                <br />
                <br />Sed auctor justo sed massa convallis, in rhoncus odio gravida. 
                <br />Nam vitae diam vitae felis tincidunt tristique.
              </p>
            </div>
            <div className="relative z-10 flex gap-3 flex-nowrap">
              <Image
                className="rounded-[0.875rem]"
                src={"/assets/images/lapalma_card1.png"}
                width={163}
                height={292}
                alt="LaPalma Card one by Kansha"
              />
              <Image
                className="rounded-[0.875rem]"
                src={"/assets/images/lapalma_card2.png"}
                width={163}
                height={292}
                alt="LaPalma Card two by Kansha"
              />
              <Image
                className="rounded-[0.875rem]"
                src={"/assets/images/lapalma_card3.png"}
                width={163}
                height={292}
                alt="LaPalma Card three by Kansha"
              />
              <Image
                className="rounded-[0.875rem]"
                src={"/assets/images/lapalma_card4.png"}
                width={163}
                height={292}
                alt="LaPalma Card four by Kansha"
              />
              <Image
                className="rounded-[0.875rem]"
                src={"/assets/images/lapalma_card5.png"}
                width={163}
                height={292}
                alt="LaPalma Card five by Kansha"
              />
            </div>
          </div>
          <div className="mx-8 relative flex justify-end">
            <Image
              className="mt-[-18.5rem] mr-[-1.5rem] mix-blend-exclusion"
              src={"/assets/images/lapalma_bg_balls.png"}
              width={726.511}
              height={623}
              alt="LaPalma soccer balls background by Kansha"
            />
          </div>
          <div className="mx-8">
            <Image
              src={"/assets/images/lapalma_mobile_preview.png"}
              width={1448}
              height={898}
              alt="LaPalma mobile preview banner by Kansha"
            />
          </div>
          <div className="mx-8 mt-16 grid grid-cols-2">
            <div>
              <h5 className="text-[#999] font-semibold">Lorem Ipsum</h5>
              <p className="mt-11 text-white leading-[normal] text-lg font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
                <br />nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit 
                <br />laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo 
                <br />posuere malesuada. Curabitur at cursus justo. 
                <br />
                <br />Sed auctor justo sed massa convallis, in rhoncus odio gravida. 
                <br />Nam vitae diam vitae felis tincidunt tristique.
              </p>
            </div>
            <div className="ml-32">
              <h5 className="text-[#999] font-semibold">Lorem Ipsum</h5>
              <p className="mt-11 text-white leading-[normal] text-lg font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
                <br />nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit 
                <br />laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo 
                <br />posuere malesuada. Curabitur at cursus justo. 
                <br />
                <br />Sed auctor justo sed massa convallis, in rhoncus odio gravida. 
                <br />Nam vitae diam vitae felis tincidunt tristique.
              </p>
            </div>
          </div>
          <div className="mt-40">
            <Image
              src={"/assets/images/lapalma_long_banner.png"}
              width={1516}
              height={1671}
              alt="LaPalma long banner by Kansha"
            />
          </div>
          <div className="mx-10 mt-[-2.9rem] flex justify-end">
            <p className="text-5xl text-white leading-[3.62569rem] tracking-[-0.01444rem] text-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              <br />Sed nec interdum erat. Nulla facilisi. Fusce tincidunt ante 
              <br />in velit laoreet, ut pellentesque nunc eleifend. 
            </p>
          </div>
          <div className="mx-8 mt-32">
            <p className="text-white leading-[normal] text-lg font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
              <br />nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit 
              <br />laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo 
              <br />posuere malesuada. Curabitur at cursus justo. 
              <br />
              <br />Sed auctor justo sed massa convallis, in rhoncus odio gravida. 
              <br />Nam vitae diam vitae felis tincidunt tristique.
            </p>
          </div>
          <div className="flex gap-x-5">
            <div className="relative flex flex-col gap-y-5">
              <div className="flex gap-x-5">
                <Image
                  src={"/assets/images/lapalma_thentball.png"}
                  width={469}
                  height={411}
                  alt="LaPalma THE N TBALL by Kansha"
                />
                <Image
                  src={"/assets/images/lapalma_newdefi.png"}
                  width={592}
                  height={411}
                  alt="LaPalma the new dotball defi by Kansha"
                />
              </div>
              <div className="flex-inline flex gap-x-5">
                <Image
                  src={"/assets/images/lapalma_universe.png"}
                  width={714}
                  height={367}
                  alt="LaPalma universe by Kansha"
                />
                <div className="absolute w-[347px] flex justify-center bottom-0 right-0">
                  <Image
                    src={"/assets/images/lapalma_mobile_web3.png"}
                    width={282}
                    height={577.955}
                    alt="LaPalma universe by Kansha"
                  />
                </div>
              </div>
            </div>
            <Image
              src={"/assets/images/lapalma_mobile_long_preview.png"}
              width={282}
              height={577.955}
              alt="LaPalma universe by Kansha"
            />
          </div>
          <div className="mx-8 mt-14 grid grid-cols-2">
            <div></div>
            <p className="text-white leading-[normal] text-lg font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec interdum erat. 
              <br />Nulla facilisi. Fusce tincidunt ante in velit laoreet, ut pellentesque nunc eleifend. 
              <br />Cras et ex eget justo posuere malesuada. Curabitur at cursus justo. 
              <br />
              <br />Sed auctor justo sed massa convallis, in rhoncus odio gravida. Nam vitae 
              <br />diam vitae felis tincidunt tristique.
            </p>
          </div>
          <div className="mt-20 flex justify-center mx-[-9rem] mix-blend-exclusion">
            <Image
              src={"/assets/images/lapalma_footer_banner.png"}
              width={1765}
              height={457.593}
              alt="LaPalma footer banner by Kansha"
            />
          </div>
        </div>
      </div>
      <Footer className="mt-20" />
      <FooterContent />
    </div>
  );
};

export default PortfolioLaPalma;
