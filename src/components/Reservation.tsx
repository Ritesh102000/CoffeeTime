import Button from "./Button";

const Reservation = () => (
	<section
		id="visit"
		className="mx-auto flex w-full max-w-6xl flex-col gap-10 rounded-[32px] border border-border bg-fill px-6 py-14 shadow-inner md:flex-row md:items-center md:justify-between md:px-12"
	>
		<div className="max-w-xl space-y-4">
			<span className="font-Source text-xs uppercase tracking-[0.6em] text-primary">
				Plan Your Visit
			</span>
			<h2 className="font-Bebas text-[52px] text-text">
				We Saved You A Seat
			</h2>
			<p className="font-Source text-base leading-7 text-secondary">
				Table reservations aren’t required, but if you’re planning a meetup or
				celebration, drop us a note. We’ll have your favorite brew ready and
				save the cozy nook by the window.
			</p>
			<div className="font-Source text-sm text-secondary/80">
				<p>📍 174 Market Street, San Francisco, CA</p>
				<p>☎️ +1 (628) 555-0199</p>
				<p>✉️ hello@coffeetimecafe.com</p>
			</div>
		</div>
		<form className="w-full max-w-md space-y-4">
			<input
				type="text"
				placeholder="Name"
				className="w-full rounded-full border border-inputBorder bg-white px-5 py-3 font-Source text-sm outline-none transition-colors duration-200 focus:border-primary"
			/>
			<input
				type="email"
				placeholder="Email"
				className="w-full rounded-full border border-inputBorder bg-white px-5 py-3 font-Source text-sm outline-none transition-colors duration-200 focus:border-primary"
			/>
			<textarea
				placeholder="Tell us about your visit"
				rows={4}
				className="w-full rounded-3xl border border-inputBorder bg-white px-5 py-3 font-Source text-sm outline-none transition-colors duration-200 focus:border-primary"
			/>
			<Button type="button" className="w-full justify-center">
				Send Request
			</Button>
			<p className="text-center font-Source text-xs text-secondary/70">
				This demo form is for display only.
			</p>
		</form>
	</section>
);

export default Reservation;
