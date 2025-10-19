import { useState } from "react";

const sections = [
	{ label: "Home", href: "#home" },
	{ label: "About", href: "#about" },
	{ label: "Menu", href: "#menu" },
	{ label: "Visit", href: "#visit" },
];

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-40 bg-fill/90 shadow-sm backdrop-blur animate-slideDown">
			<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
				<a
					href="#home"
					className="font-Bebas text-3xl uppercase tracking-wide text-text transition-colors duration-200 hover:text-primary"
				>
					Coffee <span className="text-primary">Time</span>
				</a>
				<nav className="hidden items-center gap-6 font-Source text-sm uppercase tracking-[0.35em] text-secondary/80 md:flex">
					{sections.map((section) => (
						<a
							key={section.href}
							href={section.href}
							className="transition-colors duration-200 hover:text-primary"
						>
							{section.label}
						</a>
					))}
				</nav>
				<button
					type="button"
					className="md:hidden"
					onClick={() => setOpen((prev) => !prev)}
					aria-label="Toggle menu"
				>
					<span className="font-Source text-sm uppercase tracking-[0.35em] text-secondary">
						Menu
					</span>
				</button>
			</div>
			{open && (
				<nav className="md:hidden animate-slideDown">
					<ul className="space-y-3 border-t border-border bg-fill px-6 py-4 font-Source text-sm uppercase tracking-[0.35em] text-secondary">
						{sections.map((section) => (
							<li key={section.href}>
								<a
									href={section.href}
									className="block py-2 transition-colors duration-200 hover:text-primary"
									onClick={() => setOpen(false)}
								>
									{section.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Navbar;
