import { services } from "../data";

const Services = () => (
	<section className="mx-auto w-full max-w-6xl px-6 py-16">
		<h2 className="font-Bebas text-[52px] text-text">What We Offer</h2>
		<p className="max-w-xl font-Source text-base leading-7 text-secondary">
			From the moment you step through the doors, we make sure every detail feels
			calm, intentional, and just the pick-me-up you needed.
		</p>
		<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{services.map((item) => (
				<div
					key={item.title}
					className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-white px-6 py-8 text-center shadow-md transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl"
				>
					<img src={item.icon} alt={item.title} className="h-12 w-12" />
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
