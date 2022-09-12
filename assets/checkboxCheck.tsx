import * as React from 'react';
import { SVGProps } from 'react';

const CheckboxCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    // @ts-ignore
    xmlnsxkrita="http://krita.org/namespaces/svg/krita"
    xmlnsxsodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    width="61.44pt"
    height="61.44pt"
    viewBox="0 0 61.44 61.44"
    fill="none"
    stroke="#000000"
    {...props}
  >
    <defs />
    <path
      id="shape0"
      transform="matrix(0.944299177289685 0 0 0.944299177289685 13.8555740257949 33.5732646080506)"
      strokeWidth={10.08}
      strokeLinecap="round"
      strokeLinejoin="miter"
      strokeMiterlimit={1.92}
      d="M0 0L12.0274 11.0415"
    />
    <path
      id="shape1"
      transform="matrix(0.944275240880461 0.00672351768974112 -0.00672351768974112 0.944275240880461 25.6067152826766 19.579145384158)"
      strokeWidth={10.08}
      strokeLinecap="round"
      strokeLinejoin="miter"
      strokeMiterlimit={1.92}
      d="M0 25.7986L17.0501 0"
    />
  </svg>
);

export default CheckboxCheck;
