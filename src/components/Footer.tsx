const Footer = () => (
	<footer className="mt-16 bg-secondary py-8 text-fill">
		<div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left">
			<div>
				<p className="font-Bebas text-3xl">
					Coffee <span className="text-primary">Time</span>
				</p>
				<p className="mt-2 font-Source text-sm text-fill/80">
					Handcrafted coffee, freshly baked treats, and a space built for slow
					moments.
				</p>
			</div>
			<div className="font-Source text-xs uppercase tracking-[0.4em] text-fill/70">
				© {new Date().getFullYear()} Coffee Time · Demo Experience
			</div>
		</div>
	</footer>
);

export default Footer;
