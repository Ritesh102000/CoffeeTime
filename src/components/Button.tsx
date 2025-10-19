import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

const Button = ({ children, className = "", ...rest }: ButtonProps) => (
	<button
		className={`inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 font-Source text-sm uppercase tracking-wide text-white shadow-lg shadow-primary/20 transition-transform transition-colors duration-300 hover:-translate-y-1 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${className}`}
		{...rest}
	>
		{children}
	</button>
);

export default Button;
