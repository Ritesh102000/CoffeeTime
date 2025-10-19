import aboutImage from "../assets/aboutImage.png";

const AboutUs = () => (
	<section
		id="about"
		className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 pt-40 pb-16 md:flex-row md:items-center md:justify-between"
	>
		<img
			src={aboutImage}
			alt="Interior of Coffee Time cafe"
			className="h-[320px] w-[320px] rounded-3xl object-cover shadow-lg reveal-left md:h-[380px] md:w-[380px]"
		/>
		<div className="flex max-w-xl flex-col gap-4 text-center reveal-right md:text-left">
			<span className="font-Source text-xs uppercase tracking-[0.6em] text-primary">
				Our Story
			</span>
			<h2 className="font-Bebas text-[56px] leading-none text-text md:text-[64px]">
				Brewed With Heart
			</h2>
			<p className="font-Source text-base leading-7 text-secondary">
				Coffee Time began as a tiny kiosk on Market Street, driven by the belief
				that a great cup of coffee can rescue any day. Over the years we grew
				into a neighborhood haven where laptops hum, friends reconnect, and the
				pastry case empties faster than we can fill it.
			</p>
			<p className="font-Source text-base leading-7 text-secondary">
				Every drink is roasted in-house, every pastry baked with California
				ingredients, and every guest welcomed like a regular. Pull up a chair
				and stay awhile.
			</p>
		</div>
	</section>
);

export default AboutUs;
