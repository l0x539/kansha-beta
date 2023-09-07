'use client'
import Image from "next/image";
import { Footer } from "./PartnersPage";
import FooterContent from "../FooterContent";
import { useSearchParams } from "next/navigation";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const PortfolioSoyRada = () => {
  const searchParams = useSearchParams();

  return (
    <div className="relative">
      <div className="h-full mt-40 flex justify-center">
        <div className="w-[94.5rem]">
          <div className="mx-14 flex justify-between">
            <h1 className="text-right text-8xl text-white">
              Soy Rada<br />La Caja Mágica
            </h1>
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
          <div className="mx-8 grid grid-cols-2 mt-44 text-lg">
            <div>
              <h6 className="w-96 text-white">Introduction</h6>
              <Image
                className="relative left-8 mt-[-7.5rem]"
                src={"/assets/images/soyrada_mobiles.png"}
                width={713}
                height={895.369}
                alt="SoyRada Mobiles preview main view by Kansha"
              />
            </div>
            <div>
              <p className="text-white leading-[normal]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
                <br />nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit 
                <br />laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo 
                <br />posuere malesuada. Curabitur at cursus justo. 
                <br />
                <br />Sed auctor justo sed massa convallis, in rhoncus odio gravida. 
                <br />Nam vitae diam vitae felis tincidunt tristique.
              </p>
              <div className="flex mt-28">
                <div className="flex flex-col items-end">
                  <Image
                    src={"/assets/images/soyrada_app_header.png?qsd"}
                    width={347}
                    height={51.871}
                    alt="SoyRada App header by Kansha"
                  />
                  <div className="mt-14">
                    <Image
                      src={"/assets/images/soyrada_tutorial_button.png"}
                      width={177}
                      height={38.618}
                      alt="SoyRada Tutorial button by Kansha"
                    />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="mx-8">
            {
              searchParams.has('soyradabg') ?
              <Image
                className="relative"
                src={"/assets/images/soyrada_desktop_bg.png"}
                width={1447}
                height={1137}
                alt="SoyRada Desktop preview by Kansha"
              /> 
              :
              <Image
                className="relative"
                src={"/assets/images/soyrada_desktop.png"}
                width={1447}
                height={921.691}
                alt="SoyRada Desktop preview by Kansha"
              />
            }
          </div>
          <div className="mx-8 mt-32 flex-col">
            <div className="flex">
              <Image
                src={"/assets/images/soyrada_gradient1.png"}
                width={365.725}
                height={425.032}
                alt="SoyRada Gradient purple to blue (
                  #24017D
                  71, 99, 0, 51
                  36, 1, 125
                  ) color palette by Kansha"
              />
              <div>
                <Image
                  src={"/assets/images/soyrada_gradient2.png"}
                  width={358.536}
                  height={212.067}
                  alt="SoyRada Gradient pink (
                    #E00081
                    0, 100, 42, 12
                    224, 0, 129
                    ) color palette by Kansha"
                />
                <Image
                  src={"/assets/images/soyrada_gradient3.png"}
                  width={358.536}
                  height={212.965}
                  alt="SoyRada Gradient dark blue (
                    #24017D
                    71, 99, 0, 51
                    36, 1, 125
                    ) color palette by Kansha"
                />
              </div>
              <div>
                <Image
                  src={"/assets/images/soyrada_gradient4.png"}
                  width={356.739}
                  height={141.078}
                  alt="SoyRada Gradient purple (
                    #7C58E0
                    45, 61, 0, 12
                    124, 88, 224
                    ) color palette by Kansha"
                />
                <Image
                  src={"/assets/images/soyrada_gradient5.png"}
                  width={356.739}
                  height={142.875}
                  alt="SoyRada Gradient blue (
                    #24017D
                    71, 99, 0, 51
                    36, 1, 125
                    ) color palette by Kansha"
                />
                <Image
                  src={"/assets/images/soyrada_gradient6.png"}
                  width={356.739}
                  height={139.281}
                  alt="SoyRada Gradient white (
                    #24017D
                    71, 99, 0, 51
                    36, 1, 125
                    ) color palette by Kansha"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 mt-32 text-lg">
              <div>
                <h6 className="w-96 text-white">Color Palette</h6>
              </div>
              <div>
                <p className="text-white leading-[normal]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  <br />Sed nec interdum erat. Nulla facilisi. Fusce tincidunt 
                  <br />ante in velit laoreet, ut pellentesque nunc eleifend. Cras 
                  <br />et ex eget justo posuere malesuada. Curabitur at 
                  <br />cursus justo. 
                  <br />
                  <br />Sed auctor justo sed massa convallis, in rhoncus odio 
                  <br />gravida. Nam vitae diam vitae felis tincidunt tristique.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-56 grid grid-cols-[1fr_2fr] gap-6">
            <Image
              className="mt-[-14rem] pl-10"
              src="/assets/images/soyrada_app_view.png"
              width={635}
              height={1063.754}
              alt="Soyrada Mobile Class App view by Kansha"
            />
            <div>
              <div className="flex gap-2.5">
                <Image
                  src="/assets/images/soyrada_video1.png"
                  width={461}
                  height={320}
                  alt="Soyrada Magica Video by Kansha"
                />
                <Image
                  src="/assets/images/soyrada_video2.png"
                  width={461}
                  height={320}
                  alt="Soyrada Magica Video by Kansha"
                />
              </div>
              <p className="text-white text-lg leading-[normal] ml-16 mt-40">
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

          <div className={`mt-40 grid grid-cols-2 mx-8 font-soyrada relative`}>
            <div className="pr-28">
              <div className="text-white">
                <h1 className="text-9xl pb-1 border-b border-b-[#5E5E5E]">
                  H1
                </h1>
                <div className="flex justify-between mt-3">
                  <span className="text-lg">
                    Montserrat <br />
                    Regular
                  </span>
                  <span className="text-white text-[2rem]">
                    Montserrat Regular - abc12!
                  </span>
                </div>
              </div>

              <div className="mt-14 pb-6 border-b border-b-[#5E5E5E]">
                <h1 className="font-bold text-[#E22490] text-9xl pb-1 text-[#222] border-b border-b-[#E22490]">
                  H2
                </h1>
                <div className="flex justify-between mt-3">
                  <span className="text-[#E22490] text-lg">
                    Montserrat <br />
                    Bold
                  </span>
                  <span className="text-[#E22490] font-bold text-[2rem]">
                    Montserrat Bold - abc123!
                  </span>
                </div>

                <div className="flex justify-end mt-8">
                  <div>
                    <div className="flex justify-between mt-3 border-b border-b-[#5E5E5E]">
                      <span className="text-[#808080] text-xs">
                        Montserrat <br />
                        Medium
                      </span>
                      <span className="ml-16 text-[#808080] font-medium text-[1.75rem]">
                        Montserrat Medium!
                      </span>
                    </div>
                    <div className="flex justify-between mt-3">
                      <span className="text-[#808080] text-xs">
                        Montserrat <br />
                        Light
                      </span>
                      <span className="ml-16 text-[#808080] font-light text-[1.75rem]">
                        Montserrat Light!
                      </span>
                    </div>
                    <div className="flex mt-3 mb-4">
                      <span className="text-[#E22490] font-bold text-xs">
                        <span className=" border-b border-b-[#E22490] pb-1.5">CTA Hover</span>
                        <span className="ml-4 font-normal text-white">CTA</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <Image
                className="absolute mt-[-6.5rem] ml-[-9rem]"
                src="/assets/images/soyrada_mobile_desktop.png"
                width={919}
                height={798.641}
                alt="Soyrada Mobile And Phone Image by Kansha"
              />
            </div>
          </div>
          <div className="mx-8 mt-40 flex gap-5">
            <Image
              src="/assets/images/soyrada_mobile_tutorial.png"
              width={592}
              height={753}
              alt="Soyrada App on two Mobiles showing tutorial by Kansha"
            />
            <div className="w-full flex flex-col">
              <p className="text-white text-lg leading-[normal]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
                <br />nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit 
                <br />laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo 
                <br />posuere malesuada. Curabitur at cursus justo. 
                <br />
                <br />Sed auctor justo sed massa convallis, in rhoncus odio gravida. 
                <br />Nam vitae diam vitae felis tincidunt tristique.
              </p>
              <div className="mt-52 flex justify-evenly">
                <Image
                  src="/assets/images/soyrada_class.png"
                  width={296.}
                  height={300}
                  alt="Soyrada Class by Kansha"
                />
                <Image
                  src="/assets/images/soyrada_dejugar.png"
                  width={296}
                  height={300}
                  alt="Soyrada Class by Kansha"
                />
              </div>
            </div>
          </div>
          <div className="mx-8 mt-48 flex gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex gap-5">
                <Image
                  src="/assets/images/soyrada_trailer.png"
                  width={469}
                  height={411}
                  alt="Soyrada Trailer by Kansha"
                />
                <Image
                  src="/assets/images/soyrada_podcast.png"
                  width={592.}
                  height={411}
                  alt="Soyrada Podcast by Kansha"
                />
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col gap-5">
                  <Image
                    src="/assets/images/soyrada_class1.png"
                    width={212.}
                    height={177}
                    alt="Soyrada Class one by Kansha"
                  />
                  <Image
                    src="/assets/images/soyrada_class2.png"
                    width={212.}
                    height={177}
                    alt="Soyrada Class one by Kansha"
                  />
                </div>
                <Image
                  src="/assets/images/soyrada_card_tab.png"
                  width={489.}
                  height={360.461}
                  alt="Soyrada tutorial card and menu by Kansha"
                />
                <Image
                  src="/assets/images/soyrada_pack.png"
                  width={347.}
                  height={367}
                  alt="Soyrada Pack by Kansha"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <Image
                src="/assets/images/soyrada_telleva.png"
                width={347}
                height={260.427}
                alt="Soyrada La Magia Telleva by Kansha"
              />
              <Image
                src="/assets/images/soyrada_tablet.png"
                width={347}
                height={516}
                alt="Soyrada Tablet view by Kansha"
              />
            </div>
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
          <div className="mt-20 flex justify-center">
            <Image
              src={"/assets/images/soyrada_footer_banner.png"}
              width={1765}
              height={457.593}
              alt="SoyRada footer banner by Kansha"
            />
          </div>
        </div>
      </div>
      <Footer />
      <FooterContent />
    </div>
  );
};

export default PortfolioSoyRada;