type Props = {
  className?: string;
};

/** https://www.figma.com/community/file/768673354734944365 */
// https://github.com/microsoft/vscode-codicons
export default function IconSettingsTab({ className = '' }: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 2H2.5V7H3.5V2ZM9.6 7H6.4L6 6.45V5.45L6.4 5H9.6L10 5.5V6.5L9.6 7ZM4.6 10H1.4L1 9.5V8.5L1.4 8H4.6L5 8.5V9.5L4.6 10ZM8.5 2H7.5V4H8.5V2ZM7.5 8H8.5V14H7.5V8ZM3.5 11H2.5V14H3.5V11ZM11.4 11H14.59L14.99 10.5V9.55005L14.59 9.05005H11.4L11 9.55005V10.5L11.4 11ZM13.5 2H12.5V8H13.5V2ZM12.5 12H13.5V14H12.5V12Z"
        fill="currentColor"
      />
    </svg>
  );
}
