import type { SVGProps } from 'react';

/** Name: octicon:info-16. */
function IconUser(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="9" r="3" />
        <circle cx="12" cy="12" r="10" />
        <path
          strokeLinecap="round"
          d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"
        />
      </g>
    </svg>
  );
}

export default IconUser;
