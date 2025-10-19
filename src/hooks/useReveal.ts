import { useEffect } from "react";

const useReveal = (selector: string) => {
	useEffect(() => {
		const elements = document.querySelectorAll<HTMLElement>(selector);
		if (!elements.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("show");
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.15,
			},
		);

		elements.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, [selector]);
};

export default useReveal;
