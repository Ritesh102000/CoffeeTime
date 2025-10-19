import bgImg from "../assets/bg.png";
import Button from "./Button";

const Header = () => (
	<section
		id="home"
		className="relative flex h-[520px] items-end justify-center overflow-hidden bg-cover bg-center px-4"
		style={{ backgroundImage: `url(${bgImg})` }}
	>
		<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/25" />
		<div className="pointer-events-none absolute -left-32 top-16 h-48 w-48 rounded-full bg-primary/30 blur-3xl animate-float" />
		<div className="pointer-events-none absolute -right-24 bottom-12 h-60 w-60 rounded-full bg-secondary/20 blur-3xl animate-float" />

		<div className="relative z-10 mb-[-90px] flex w-full max-w-5xl flex-col gap-8 rounded-[18px] border border-border/70 bg-fill/95 px-8 py-12 shadow-2xl backdrop-blur-sm md:flex-row md:items-center md:justify-between md:px-12">
			<div className="max-w-xl space-y-5 reveal">
				<span className="font-Source text-xs uppercase tracking-[0.6em] text-primary">
					San Francisco - Est. 2016
				</span>
				<h1 className="font-Bebas text-[54px] leading-none text-text md:text-[68px]">
					Find Your Moment At Coffee Time
				</h1>
				<p className="font-Source text-sm leading-6 text-secondary md:text-base">
					We roast in small batches and bake each morning so every visit feels
					handcrafted. Grab a seat, sip slow, and linger over pastries baked
					right here in the heart of the city.
				</p>
				<Button
					className="mt-3 shadow-lg shadow-primary/20"
					onClick={() =>
						document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
					}
				>
					View Menu
				</Button>
			</div>
			<div className="w-full max-w-xs space-y-3 border-t border-border pt-4 reveal-right md:max-w-sm md:border-l md:border-t-0 md:pl-8 md:pt-0">
				<h2 className="font-Bebas text-2xl uppercase tracking-wide text-text">
					Brewing Hours
				</h2>
				<div className="space-y-2 font-Source text-sm text-secondary">
					<div className="flex justify-between">
						<span>Mon - Fri</span>
						<span>7:00am - 7:00pm</span>
					</div>
					<div className="flex justify-between">
						<span>Sat - Sun</span>
						<span>8:00am - 8:00pm</span>
					</div>
					<p className="text-xs text-secondary/70">
						Walk-ins welcome - Last call 30 minutes before close
					</p>
				</div>
			</div>
		</div>
	</section>
);

export default Header;
