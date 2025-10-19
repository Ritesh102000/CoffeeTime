import { useEffect, useState } from "react";
import comma from "../assets/comma.svg";

const testimonials = [
	{
		text: "Coffee Time is my morning ritual. The macadamia latte is indulgent without being too sweet, and the staff knows my name before I even reach the counter.",
		author: "Sofia Bennett",
	},
	{
		text: "The space is inviting, the playlists are mellow, and the pastries are gone by noon for a reason. Their strawberry cake tastes like summer evenings.",
		author: "Marcus Lin",
	},
	{
		text: "Weekends at Coffee Time feel like a treat - brunch specials, smiling baristas, and the best mocha in the city. It's our go-to spot for slow Sundays.",
		author: "Daniela Ruiz",
	},
];

const Comments = () => {
	const [index, setIndex] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = window.setInterval(() => {
			setVisible(false);
			window.setTimeout(() => {
				setIndex((prev) => (prev + 1) % testimonials.length);
				setVisible(true);
			}, 400);
		}, 5000);

		return () => {
			window.clearInterval(timer);
		};
	}, []);

	const { text, author } = testimonials[index];

	return (
		<section className="mx-auto w-full max-w-6xl px-6 py-16">
			<div className="reveal flex flex-col items-center gap-6 rounded-[32px] border border-border bg-white px-8 py-12 text-center shadow-lg md:flex-row md:items-start md:text-left">
				<img
					src={comma}
					alt="Quotation mark graphic"
					className="h-14 w-14 flex-shrink-0 rounded-full bg-backgrounds p-3 animate-float"
				/>
				<div className="space-y-4">
					<p
						className={`font-Source text-base italic leading-7 text-text transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
					>
						{text}
					</p>
					<p
						className={`font-Source text-sm uppercase tracking-[0.4em] text-secondary/80 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
					>
						— {author}
					</p>
				</div>
			</div>
		</section>
	);
};

export default Comments;
