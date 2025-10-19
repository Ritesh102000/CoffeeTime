import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

const Button = ({ children, className = "", ...rest }: ButtonProps) => (
	<button
		className={`inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 font-Source text-sm uppercase tracking-wide text-white shadow-sm transition-colors duration-200 hover:bg-primary/90 ${className}`}
		{...rest}
	>
		{children}
	</button>
);

export default Button;
