import * as React from 'react';
import { SVGProps } from 'react';

const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    // @ts-ignore
    xmlnsxkrita="http://krita.org/namespaces/svg/krita"
    xmlnsxsodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    width="36.96pt"
    height="61.44pt"
    viewBox="0 0 36.96 61.44"
    fill="none"
    stroke='#888888'
    {...props}
  >
    <defs />
    <path
      id="shape0"
      transform="matrix(1.2658081591424 -0.00734508325443195 0.00734508325443195 1.2658081591424 11.0464288124222 2.7218517498143)"
      strokeWidth={9.6}
      strokeLinecap="round"
      strokeLinejoin="miter"
      strokeMiterlimit={1.92}
      d="M0 0L19.2 19.2"
    />
    <path
      id="shape1"
      transform="matrix(1.26582946955721 0 0 1.26582946955721 11.1208916153712 27.3552480331723)"
      strokeWidth={9.6}
      strokeLinecap="round"
      strokeLinejoin="miter"
      strokeMiterlimit={1.92}
      d="M19.2 0L0 19.2"
    />
  </svg>
);

export default LinkIcon;
