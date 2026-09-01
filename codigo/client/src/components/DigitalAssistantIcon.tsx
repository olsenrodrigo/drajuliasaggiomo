interface DigitalAssistantIconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

/**
 * Marca do canal "Atendimento Digital": balão de conversa em traço fino
 * com um brilho de quatro pontas. Herda a cor via currentColor.
 */
export default function DigitalAssistantIcon({
  size = 18,
  className,
  strokeWidth = 1.5,
}: DigitalAssistantIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M20.4 11.6c0 4.4-3.8 8-8.4 8-1.1 0-2.1-.2-3.1-.6l-5.3 1.6 1.8-4.5c-.8-1.3-1.2-2.9-1.2-4.5 0-4.4 3.8-8 8.4-8s7.8 3.6 7.8 8Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M12 7.2 Q12.65 10.95 16.4 11.6 Q12.65 12.25 12 16 Q11.35 12.25 7.6 11.6 Q11.35 10.95 12 7.2 Z"
        fill="currentColor"
      />
    </svg>
  );
}
