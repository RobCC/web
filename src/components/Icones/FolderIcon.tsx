import type { SVGProps } from 'react';

export default function FolderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        fillRule="evenodd"
        d="M6.182 4.182a.45.45 0 0 1 .636 0l3 3a.45.45 0 0 1 0 .636l-3 3a.45.45 0 1 1-.636-.636L8.864 7.5L6.182 4.818a.45.45 0 0 1 0-.636Z"
        clipRule="evenodd"
      />
    </svg>
  );
}