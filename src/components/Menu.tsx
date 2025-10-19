import { menuSections } from "../data";

const Menu = () => (
	<section
		id="menu"
		className="mx-auto w-full max-w-6xl px-6 py-16"
	>
		<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
			<h2 className="font-Bebas text-[52px] text-text">Signature Menu</h2>
			<p className="max-w-xl font-Source text-base leading-7 text-secondary">
				Our menu is crafted to highlight fresh roasts, seasonal ingredients, and
				classics you’ll crave again tomorrow.
			</p>
		</div>

		<div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
			{menuSections.map((section) => (
				<div key={section.title} className="space-y-6">
					<h3 className="font-Bebas text-[34px] text-text">
						{section.title}
					</h3>
					<div className="space-y-6">
						{section.items.map((item) => (
							<div
								key={item.title}
								className="gap-with-dash flex flex-col gap-3"
							>
								<div className="flex items-center gap-3">
									<span className="font-Source text-lg font-semibold text-text">
										{item.title}
									</span>
									<span className="font-Source text-base text-secondary">
										${item.price.toFixed(2)}
									</span>
								</div>
								<p className="font-Source text-sm leading-6 text-secondary/90">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	</section>
);

export default Menu;
