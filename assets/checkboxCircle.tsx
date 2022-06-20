import * as React from 'react';
import { SVGProps } from 'react';

const CheckboxCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    // @ts-ignore
    xmlnsxkrita="http://krita.org/namespaces/svg/krita"
    xmlnsxsodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    width="15pt"
    height="15pt"
    viewBox="0 0 15 15"
    fill="none"
    stroke='#000000'
    {...props}
  >
    <defs />
    <circle
      id="shape0"
      transform="matrix(0.999999981488625 0 0 0.999999981488625 1.31999997556498 1.31999997556498)"
      r={6.6}
      cx={6.6}
      cy={6.6}
      strokeWidth={1}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default CheckboxCircle;
