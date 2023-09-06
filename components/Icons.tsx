import { FC } from "react";

export const Mail = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="34" height="21" viewBox="0 0 34 21" fill="none">
    <path d="M0.859863 0.859375L16.9199 10.2894L32.8599 0.859375M0.859863 0.859375V19.8594H32.8599V10.5494V0.859375M0.859863 0.859375H32.8599" stroke="white" strokeWidth="1.25" strokeMiterlimit="8" strokeLinecap="square"/>
  </svg>;
};

export const Phone = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
    <path d="M24.44 29.3799C11.77 29.6399 1.25 19.5399 1 6.75987C1 6.75987 1.26 4.16987 4.25 1.66987C5.62 0.629867 6.65 0.889867 7.5 1.83987L11.09 5.20987C11.95 6.15987 11.86 7.62987 10.92 8.48987L9.47 9.69987C8.53 10.5599 8.53 12.0299 9.38 12.9799L17.51 21.2699C18.37 22.1299 19.82 22.2199 20.76 21.3599L22.39 19.5499C23.25 18.6899 24.7 18.7699 25.56 19.7199L29.15 23.0899C30.01 24.0399 29.83 25.3299 29.06 26.3699C26.84 29.1299 24.44 29.3899 24.44 29.3899V29.3799Z" stroke="white" strokeWidth="1.25" strokeMiterlimit="8" strokeLinecap="square"/>
  </svg>;
};

export const Paper = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="25" height="31" viewBox="0 0 25 31" fill="none">
    <path d="M24 8.73L16.33 1M24 8.73V30.01H1V1H16.33M24 8.73H16.33V1" stroke="white" strokeWidth="1.25" strokeMiterlimit="8" strokeLinecap="round"/>
  </svg>;
};

export const Next = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M16.5 12C16.5 12.1918 16.4267 12.3838 16.2803 12.5302L8.7803 20.0302C8.48723 20.3233 8.01267 20.3233 7.7198 20.0302C7.42692 19.7371 7.42673 19.2626 7.7198 18.9697L14.6895 12L7.7198 5.03021C7.42673 4.73714 7.42673 4.26258 7.7198 3.96971C8.01286 3.67683 8.48742 3.67664 8.7803 3.96971L16.2803 11.4697C16.4267 11.6161 16.5 11.8081 16.5 12Z" fill="white"/>
  </svg>;
};

export const Close: FC<{
  hovered: boolean;
}> = ({
  hovered
}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
    <g style={{
      mixBlendMode: 'difference'
    }} filter={hovered ? 'url(#filter0_b_331_1027)' : "url(#filter0_b_331_1032)"}>
      <circle cx="23.5" cy="23.5" r="23.5" fill={"#5E5E5E"} fillOpacity={hovered ? '0.25' : "0.05"}/>
      <circle cx="23.5" cy="23.5" r={hovered ? "23.45" : "23.4284"} stroke={hovered ? 'white' : "#959595"} strokeWidth="0.143293"/>
    </g>
    <line x1="15.8002" y1="16.8707" x2="30.8002" y2="31.8707" stroke={hovered ? 'white' : "#5E5E5E"} strokeWidth="0.365854"/>
    <line x1="15.5415" y1="31.8707" x2="30.5416" y2="16.8706" stroke={hovered ? 'white' : "#5E5E5E"} strokeWidth="0.365854"/>
    <defs>
      <filter id="filter0_b_331_1032" x="-143.293" y="-143.293" width="333.585" height="333.585" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="71.6463"/>
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_331_1032"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_331_1032" result="shape"/>
      </filter>
      <filter id="filter0_b_331_1027" x="-143.293" y="-143.293" width="333.585" height="333.585" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="71.6463"/>
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_331_1027"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_331_1027" result="shape"/>
      </filter>
    </defs>
  </svg>
};

