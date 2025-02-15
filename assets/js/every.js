AOS.init({
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: "ease", // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const clickSound = new Audio("./assets/sound/click.wav");
const contactFailSound = new Audio("./assets/sound/contact_fail.mp3");
const linkSound = new Audio("./assets/sound/link.mp3");
const sendSound = new Audio("./assets/sound/send.mp3");
const profileSound = new Audio("./assets/sound/profile.mp3");
const resumeSound = new Audio("./assets/sound/resume.mp3");
const skillSound = new Audio("./assets/sound/skills.mp3");

function playClickSound() {
	if (!isMuted) {
		clickSound.currentTime = 0;
		clickSound.play();
	}
}

function playContactFailSound() {
	if (!isMuted) {
		contactFailSound.currentTime = 0;
		contactFailSound.play();
	}
}

function playlinkSound() {
	if (!isMuted) {
		linkSound.currentTime = 0;
		linkSound.play();
	}
}

function playSentSound() {
	if (!isMuted) {
		sendSound.currentTime = 0;
		sendSound.play();
	}
}

function playProfileSound() {
	if (!isMuted) {
		profileSound.currentTime = 0;
		profileSound.play();
	}
}

function playResumeSound() {
	if (!isMuted) {
		resumeSound.currentTime = 0;
		resumeSound.play();
	}
}

function playSkillSound() {
	if (!isMuted) {
		skillSound.currentTime = 0;
		skillSound.play();
	}
}

document.querySelectorAll(".nav-item").forEach((button) => {
	button.addEventListener("click", playClickSound);
});

document.querySelectorAll(".social_icons").forEach((button) => {
	button.addEventListener("click", playlinkSound);
});

document.querySelectorAll(".button--stroke").forEach((button) => {
	button.addEventListener("click", playProfileSound);
});

document.querySelectorAll(".resume_button").forEach((button) => {
	button.addEventListener("click", playResumeSound);
});

document.querySelectorAll(".iconbox").forEach((button) => {
	skillSound.volume = 0.1;
	button.addEventListener("mouseenter", playSkillSound);
});

let isMuted = false;
const sounds = [
	clickSound,
	contactFailSound,
	linkSound,
	sendSound,
	profileSound,
	resumeSound,
	skillSound,
];

function toggleVolume() {
	isMuted = !isMuted;
	sounds.forEach((sound) => {
		sound.muted = isMuted;
	});
}

document.querySelector(".volume-input").addEventListener("change", toggleVolume);
document.addEventListener("contextmenu", function (e) {
	e.preventDefault();
});

const words = ["Hola!", "Hello!", "Ciao!", "Bonjour!"];
let currentWordIndex = 0;
const wordContainer = document.getElementById("word-container");

function animateWord() {
	wordContainer.innerHTML = "";
	const currentWord = words[currentWordIndex].split("");
	currentWord.forEach((char, index) => {
		const span = document.createElement("span");
		span.className = "char";
		span.style.animationDelay = `calc(var(--text-in-delay) * ${index})`;
		span.textContent = char;
		wordContainer.appendChild(span);
	});
	currentWordIndex = (currentWordIndex + 1) % words.length;
	setTimeout(
		animateWord,
		parseFloat(
			getComputedStyle(document.documentElement).getPropertyValue(
				"--duration"
			)
		) * 2000
	);
}

animateWord();

document.addEventListener("keydown", function (event) {
	if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "i") {
		event.preventDefault();
	}
	if (event.ctrlKey && event.key.toLowerCase() === "u") {
		event.preventDefault();
	}
	if (event.key === "F12") {
		event.preventDefault();
	}
});

let originalTitle = document.title;
const titles = [
	"Looking forward to connecting!",
	"Discover more of my work!",
	"Let’s build something great together!",
	"See you back soon!",
	"My portfolio awaits your return",
	"Unlock my projects anytime!",
	"Eager to collaborate?",
	"Dive back into innovation!",
	"Your next hire awaits!",
	"Shaping visions into results!",
	"Collaboration starts with a click!",
	"Let’s elevate our ideas together!",
	"Let’s spark some creativity!",
	"Let’s make magic happen!",
	"Your feedback fuels my passion!",
	"Excited to share my journey!",
	"Transforming ideas into reality!",
	"Crafting solutions together!",
];
function getRandomTitle() {
	const randomIndex = Math.floor(Math.random() * titles.length);
	return titles[randomIndex];
}

document.addEventListener("visibilitychange", function () {
	if (document.hidden) {
		document.title = getRandomTitle() + " 😃";
	} else {
		document.title = originalTitle;
	}
});

document.addEventListener("DOMContentLoaded", function () {
	var el = document.querySelector(".button-bird");
	var text = document.querySelector(".button-bird__text");
	var fe = document.querySelector(".feather");

	el.addEventListener("click", function (event) {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		var name = document.querySelector('input[name="name"]').value;
		var email = document.querySelector('input[name="email"]').value;
		var message = document.querySelector('textarea[name="message"]').value;

		if (name && email && message && emailPattern.test(email)) {
			el.classList.toggle("active");

			if (el.classList.contains("active")) {
				playSentSound();
				text.innerHTML = "Sent!";
				setTimeout(function () {
					let countdown = 2;
					const interval = setInterval(function () {
						fe.style.display = "none";
						text.innerHTML = `Refreshing in ${countdown}..`;
						countdown--;

						if (countdown < 0) {
							clearInterval(interval);
							window.location.href = document.querySelector(
								'input[name="redirect"]'
							).value;
						}
					}, 1000);
				}, 2000);
			}
		}
		if (!name && !email && !message) {
			playContactFailSound();
			text.innerHTML = "Reach Out!";
		} else if (!name || !email || !message || !emailPattern.test(email)) {
			playContactFailSound();
			text.innerHTML = "Hm..Something is wrong";
		}
	});
});

class ArrowPointer {
	constructor() {
		this.root = document.body;
		this.cursor = document.querySelector(".cursor");

		this.position = {
			distanceX: 0,
			distanceY: 0,
			distance: 0,
			pointerX: 0,
			pointerY: 0,
		};
		this.previousPointerX = 0;
		this.previousPointerY = 0;
		this.angle = 0;
		this.previousAngle = 0;
		this.angleDisplace = 0;
		this.degrees = 57.296;
		this.cursorSize = 25;

		this.cursorStyle = {
			boxSizing: "border-box",
			position: "fixed",
			top: "0px",
			left: `${-this.cursorSize / 2}px`,
			zIndex: "2147483647",
			width: `${this.cursorSize}px`,
			height: `${this.cursorSize}px`,
			transition: "250ms, transform 82ms",
			userSelect: "none",
			pointerEvents: "none",
			opacity: "1",
		};

		this.init(this.cursor, this.cursorStyle);
		this.addActiveInactiveListeners();
	}

	init(el, style) {
		Object.assign(el.style, style);
		this.cursor.removeAttribute("hidden");
	}

	move(event) {
		this.previousPointerX = this.position.pointerX;
		this.previousPointerY = this.position.pointerY;
		this.position.pointerX =
			event.pageX + this.root.getBoundingClientRect().x;
		this.position.pointerY =
			event.pageY + this.root.getBoundingClientRect().y;
		this.position.distanceX =
			this.previousPointerX - this.position.pointerX;
		this.position.distanceY =
			this.previousPointerY - this.position.pointerY;
		this.distance = Math.sqrt(
			this.position.distanceY ** 2 + this.position.distanceX ** 2
		);

		this.cursor.style.transform = `translate3d(${this.position.pointerX}px, ${this.position.pointerY}px, 0)`;

		if (this.distance > 1) {
			this.rotate(this.position);
		} else {
			this.cursor.style.transform += ` rotate(${this.angleDisplace}deg)`;
		}
	}

	rotate(position) {
		let unsortedAngle =
			Math.atan(
				Math.abs(position.distanceY) / Math.abs(position.distanceX)
			) * this.degrees;
		let modAngle;
		const style = this.cursor.style;
		this.previousAngle = this.angle;

		if (position.distanceX <= 0 && position.distanceY >= 0) {
			this.angle = 90 - unsortedAngle + 0;
		} else if (position.distanceX < 0 && position.distanceY < 0) {
			this.angle = unsortedAngle + 90;
		} else if (position.distanceX >= 0 && position.distanceY <= 0) {
			this.angle = 90 - unsortedAngle + 180;
		} else if (position.distanceX > 0 && position.distanceY > 0) {
			this.angle = unsortedAngle + 270;
		}

		if (isNaN(this.angle)) {
			this.angle = this.previousAngle;
		} else {
			if (this.angle - this.previousAngle <= -270) {
				this.angleDisplace += 360 + this.angle - this.previousAngle;
			} else if (this.angle - this.previousAngle >= 270) {
				this.angleDisplace += this.angle - this.previousAngle - 360;
			} else {
				this.angleDisplace += this.angle - this.previousAngle;
			}
		}
		style.transform += ` rotate(${this.angleDisplace}deg)`;

		setTimeout(() => {
			modAngle =
				this.angleDisplace >= 0
					? this.angleDisplace % 360
					: 360 + (this.angleDisplace % 360);
			if (modAngle >= 45 && modAngle < 135) {
				style.left = `${-this.cursorSize}px`;
				style.top = `${-this.cursorSize / 2}px`;
			} else if (modAngle >= 135 && modAngle < 225) {
				style.left = `${-this.cursorSize / 2}px`;
				style.top = `${-this.cursorSize}px`;
			} else if (modAngle >= 225 && modAngle < 315) {
				style.left = "0px";
				style.top = `${-this.cursorSize / 2}px`;
			} else {
				style.left = `${-this.cursorSize / 2}px`;
				style.top = "0px";
			}
		}, 0);
	}

	addActiveInactiveListeners() {
		document.addEventListener("mouseenter", () => {
			this.cursor.style.opacity = "1";
		});
		document.addEventListener("mouseleave", () => {
			this.cursor.style.opacity = "0";
		});
	}

	remove() {
		this.cursor.remove();
	}
}

(() => {
	const cursor = new ArrowPointer();
	if (
		!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)
	) {
		document.onmousemove = function (event) {
			cursor.move(event);
		};
	} else {
		cursor.remove();
	}
})();

class Button {
	constructor(buttonElement) {
		this.block = buttonElement;
		this.init();
		this.initEvents();
	}

	init() {
		const el = gsap.utils.selector(this.block);

		this.DOM = {
			button: this.block,
			flair: el(".button__flair"),
		};

		this.xSet = gsap.quickSetter(this.DOM.flair, "xPercent");
		this.ySet = gsap.quickSetter(this.DOM.flair, "yPercent");
	}

	getXY(e) {
		const { left, top, width, height } =
			this.DOM.button.getBoundingClientRect();

		const xTransformer = gsap.utils.pipe(
			gsap.utils.mapRange(0, width, 0, 100),
			gsap.utils.clamp(0, 100)
		);

		const yTransformer = gsap.utils.pipe(
			gsap.utils.mapRange(0, height, 0, 100),
			gsap.utils.clamp(0, 100)
		);

		return {
			x: xTransformer(e.clientX - left),
			y: yTransformer(e.clientY - top),
		};
	}

	initEvents() {
		this.DOM.button.addEventListener("mouseenter", (e) => {
			const { x, y } = this.getXY(e);

			this.xSet(x);
			this.ySet(y);

			gsap.to(this.DOM.flair, {
				scale: 1,
				duration: 0.4,
				ease: "power2.out",
			});
		});

		this.DOM.button.addEventListener("mouseleave", (e) => {
			const { x, y } = this.getXY(e);

			gsap.killTweensOf(this.DOM.flair);

			gsap.to(this.DOM.flair, {
				xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
				yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
				scale: 0,
				duration: 0.3,
				ease: "power2.out",
			});
		});

		this.DOM.button.addEventListener("mousemove", (e) => {
			const { x, y } = this.getXY(e);

			gsap.to(this.DOM.flair, {
				xPercent: x,
				yPercent: y,
				duration: 0.4,
				ease: "power2",
			});
		});
	}
}

const buttonElements = document.querySelectorAll('[data-block="button"]');

buttonElements.forEach((buttonElement) => {
	new Button(buttonElement);
});