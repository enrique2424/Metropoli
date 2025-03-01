import * as React from "react";
import IconProps from 'types/icon';

const Megafono = ({ className }: IconProps) => (
    <svg
    width="60px"
    height="60px"
    viewBox="0 0 14 14"
    role="img"
    focusable="false"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
    transform="rotate(0)"
    className={`svg-inject icon-svg ${className || 'icon-svg-md text-primary mb-3'}`}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g id="SVGRepo_iconCarrier">
      <path
        fill="#8bc53f"
        d="M5.1230769 9.67458367h-.73846154V8.44381443H5.6153846l.12307692.46153847c.0923077.4-.21538461.76923077-.61538462.76923077zm6.03076928.92307693S7.52307692 8.44381443 5.6153846 8.44381443V4.13612209c1.7846154 0 5.53846158-2.15384617 5.53846158-2.15384617v8.61538468z"
      />
      <g
        fill="#00733b"
        transform="translate(-.23076929 -.47926256) scale(.3077)"
      >
        <circle cx={9} cy={22} r={5} />
        <path d="M40 19h-3v6h3c1.7 0 3-1.3 3-3s-1.3-3-3-3zM18.6 41.2c-.9.6-2.5 1.2-4.6 1.4-.6.1-1.2-.3-1.4-1L8.2 27.9S17 21.7 17 29c0 5.5 1.5 8.4 2.2 9.5.5.7.5 1.6 0 2.3-.2.2-.4.3-.6.4z" />
      </g>
      <path
        fill="#00733b"
        d="M2.5384615 8.44381443h3.0769231V4.13612209H2.5384615c-.33846154 0-.61538462.27692308-.61538462.61538462v3.0769231c0 .33846154.27692308.61538462.61538462.61538462z"
      />
      <path
        fill="#8bc53f"
        d="M11.46153849 11.21304522c-.33846154 0-.61538462-.27692308-.61538462-.61538462V1.98227592c0-.33846154.27692308-.61538462.61538462-.61538462.33846154 0 .61538462.27692308.61538462.61538462v8.61538468c0 .33846154-.27692308.61538462-.61538462.61538462z"
      />
    </g>
  </svg>
);
export default Megafono;