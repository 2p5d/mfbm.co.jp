function businessHover() {
	const navigationTriggers = document.querySelectorAll(
			".business-fields__navigation [data-modal-trigger]"
		),
		mapTriggers = document.querySelectorAll(
			".business-fields__map-triggers-and-over-images [data-modal-trigger]"
		),
		hoverNavigationTrigger = (event) => {
			const trigger = event.currentTarget,
				triggerId = trigger.dataset.modalTrigger;

			for (let i = 0; i < mapTriggers.length; i++) {
				const mapTriggerId = mapTriggers[i].dataset.modalTrigger;

				if (mapTriggers[i].classList.contains("--hover")) {
					mapTriggers[i].classList.remove("--hover");
				} else if (triggerId === mapTriggerId) {
					mapTriggers[i].classList.add("--hover");
				}
			}
		},
		leaveNavigationTrigger = (event) => {
			mapTriggers.forEach((trigger) => {
				if (trigger.classList.contains("--hover")) {
					trigger.classList.remove("--hover");
				}
			});
		},
		hoverMapTrigger = (event) => {
			console.log(event.currentTarget);
			const trigger = event.currentTarget,
				triggerId = trigger.dataset.modalTrigger;

			for (let i = 0; i < navigationTriggers.length; i++) {
				const navigationTriggerId = navigationTriggers[i].dataset.modalTrigger;

				if (navigationTriggers[i].classList.contains("--hover")) {
					navigationTriggers[i].classList.remove("--hover");
				} else if (triggerId === navigationTriggerId) {
					navigationTriggers[i].classList.add("--hover");
				}
			}
		},
		leaveMapTrigger = (event) => {
			navigationTriggers.forEach((trigger) => {
				if (trigger.classList.contains("--hover")) {
					trigger.classList.remove("--hover");
				}
			});
		};

	navigationTriggers.forEach((trigger) => {
		trigger.addEventListener("mouseenter", hoverNavigationTrigger);
		trigger.addEventListener("mouseleave", leaveNavigationTrigger);
	});

	mapTriggers.forEach((trigger) => {
		trigger.addEventListener("mouseenter", hoverMapTrigger);
		trigger.addEventListener("mouseleave", leaveMapTrigger);
	});
}

export { businessHover };
