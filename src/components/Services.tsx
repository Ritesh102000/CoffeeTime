import { services } from "../data";

const Services = () => (
	<section className="mx-auto w-full max-w-6xl px-6 py-16">
		<div className="reveal">
			<h2 className="font-Bebas text-[52px] text-text">What We Offer</h2>
			<p className="max-w-xl font-Source text-base leading-7 text-secondary">
				From the moment you step through the doors, we make sure every detail feels
				calm, intentional, and just the pick-me-up you needed.
			</p>
		</div>
		<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{services.map((item, index) => (
				<div
					key={item.title}
					style={{ transitionDelay: `${index * 80}ms` }}
					className="reveal flex flex-col items-center gap-4 rounded-3xl border border-border bg-white px-6 py-8 text-center shadow-md transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl"
				>
					<img src={item.icon} alt={item.title} className="h-12 w-12 animate-float" />
					<h3 className="font-Source text-lg font-semibold text-text">
						{item.title}
					</h3>
					<p className="font-Source text-sm leading-6 text-secondary/90">
						{item.description}
					</p>
				</div>
			))}
		</div>
	</section>
);

export default Services;
