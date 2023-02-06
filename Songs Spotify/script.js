// Best viewed in full screen mode: https://codepen.io/jackiezen/full/MWBBawb

// Jackie Zen in collaboration with Daniel Wong

// DOM elements
const scrollLeft = document.querySelector(".scroll-left");
const scrollRight = document.querySelector(".scroll-right");
const heroDiv = document.querySelector(".hero-img");
const sectionContainer = document.querySelector("section");
const bodyContainer = document.querySelector("body");
const emblemDiv = document.querySelector(".emblem");
const albumTitleSpan = document.querySelector(".album-title");
const texts = document.querySelectorAll(".text");
const albumNum = document.querySelector(".album-num");
const spotifyWidget = document.querySelector(".spotify-widget iframe");
const albums = [
	{
		album: "Midnights",
		emblem: "Meet me at midnight",
		"bg-color": ["#53254C", "#0D1827"],
		"accent-color": "#7C2E70",
		url:
			"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F10%2F20%2FMidnights-Taylor-Swift-01-101922.jpg",
		spotify:
			"https://open.spotify.com/embed/album/3lS1y25WAhcqJDATJK70Mq?utm_source=generator"
	},
	{
		album: "Evermore",
		emblem: "Life was a willow",
		"bg-color": ["#66493D", "#32130F"],
		"accent-color": "#B4653C",
		url: "https://i.scdn.co/image/ab67616d0000b27390fd9741e1838115cd90b3b6",
		spotify:
			"https://open.spotify.com/embed/album/6AORtDjduMM3bupSWzbTSG?utm_source=generator"
	},
	{
		album: "Folklore",
		emblem: "lost in the memory",
		"bg-color": ["#535353", "#181818"],
		"accent-color": "#898989",
		url: "https://i.scdn.co/image/ab67616d0000b27395f754318336a07e85ec59bc",
		spotify:
			"https://open.spotify.com/embed/album/1pzvBxYgT6OVwJLtHkrdQK?utm_source=generator"
	},
	{
		album: "Lover",
		emblem: "I only see daylight",
		"bg-color": ["#BDADB0", "#7A4870"],
		"accent-color": "#873D78",
		url:
			"https://lastfm.freetls.fastly.net/i/u/770x0/8f38633dcc27d6a20f8880c5774af9d5.jpg",
		spotify:
			"https://open.spotify.com/embed/album/1NAmidJlEaVgA3MpcPFYGq?utm_source=generator"
	},
	{
		album: "Reputation",
		emblem: "Let the games begin",
		"bg-color": ["#242424", "#070707"],
		"accent-color": "#505050",
		url:
			"https://i.pinimg.com/originals/cc/f4/56/ccf4564928c46baca09fcc0738ca57f2.jpg",
		spotify:
			"https://open.spotify.com/embed/album/6DEjYFkNZh67HP7R9PSZvv?utm_source=generator"
	},
	{
		album: "1989",
		emblem: "Love's a game wanna play",
		"bg-color": ["#A88172", "#653E32"],
		"accent-color": "#DF9882",
		url: "https://i.scdn.co/image/ab67616d0000b273b7fe6e9265a84c3b6eb66d34",
		spotify:
			"https://open.spotify.com/embed/album/34OkZVpuzBa9y40DCy0LPR?utm_source=generator"
	},
	{
		album: "Red",
		emblem: "loving him was red",
		"bg-color": ["#660E11", "#210402"],
		"accent-color": "#9E4E23",
		url: "https://i.scdn.co/image/ab67616d0000b273318443aab3531a0558e79a4d",
		spotify:
			"https://open.spotify.com/embed/album/6kZ42qRrzov54LcAk4onW9?utm_source=generator"
	},
	{
		album: "Speak Now",
		emblem: "sparks flew instantly",
		"bg-color": ["#62252A", "#4B0102"],
		"accent-color": "#E50619",
		url:
			"https://mir-s3-cdn-cf.behance.net/project_modules/fs/73a7cf47610727.588f690bb7f29.jpg",
		spotify:
			"https://open.spotify.com/embed/album/5EpMjweRD573ASl7uNiHym?utm_source=generator"
	},
	{
		album: "Fearless",
		emblem: "baby just say yes",
		"bg-color": ["#a8834a", "#644323"],
		"accent-color": "#CEA766",
		url: "https://i.scdn.co/image/ab67616d0000b273a48964b5d9a3d6968ae3e0de",
		spotify:
			"https://open.spotify.com/embed/album/4hDok0OAJd57SGIT8xuWJH?utm_source=generator"
	},

	{
		album: "Self-Titled",
		emblem: "wishing on a wishing star",
		"bg-color": ["#6F6F4C", "#34351E"],
		"accent-color": "#B2C15E",
		url:
			"https://i.pinimg.com/originals/5a/62/10/5a6210fa476de13afb5a6e07d5ae7dd2.jpg",
		spotify:
			"https://open.spotify.com/embed/album/7mzrIsaAjnXihW3InKjlC3?utm_source=generator"
	}
];

// Add Event Listeners
scrollLeft.addEventListener("click", () => handleClickScroll(-1));
scrollRight.addEventListener("click", () => handleClickScroll(1));
heroDiv.addEventListener("animationend", () => {
	heroDiv.classList.remove("album-transition");
	document.addEventListener("keydown", handleKeyScroll);
	scrollLeft.disabled = false;
	scrollRight.disabled = false;
	scrollLeft.classList.remove("key-press-hover-left");
	scrollRight.classList.remove("key-press-hover-right");

	for (const text of texts) text.classList.add("show-texts");
});

// Event Listeners
const handleClickScroll = (val) => {
	if (index + val >= 0 && index + val < albums.length) {
		updateDisplay((index += val));
	}
};

const handleKeyScroll = (e) => {
	if (e.key == "ArrowLeft") {
		scrollLeft.classList.add("key-press-hover-left");
		handleClickScroll(-1);
	}
	if (e.key == "ArrowRight") {
		scrollRight.classList.add("key-press-hover-right");
		handleClickScroll(1);
	}
};

// Main Function
let index = 0;

const updateDisplay = (index) => {
	// SET DELIMITER
	let DELIMITER = "";

	// delcare album specified by index
	const album = albums[index];

	// reset all animations and disable button
	for (const text of texts) text.classList.remove("show-texts");
	emblemDiv.innerHTML = "";
	scrollLeft.disabled = true;
	scrollRight.disabled = true;
	document.removeEventListener("keydown", handleKeyScroll);

	// add css classes, texts, and styles
	sectionContainer.id = `hero-${album.album.toLowerCase().replace(" ", "-")}`;
	bodyContainer.style.background = `linear-gradient(180deg, ${album["bg-color"][0]} 0%, ${album["bg-color"][1]} 100%)`;
	heroDiv.style.backgroundImage = `url(${album.url})`;
	albumTitleSpan.textContent = album.album;
	spotifyWidget.src = album.spotify;

	const number = albums.length - index;
	albumNum.innerText = number >= 10 ? number + "." : `0${number}.`;
	albumNum.style.color = album["accent-color"];

	// hide arrows
	if (index === 0) scrollLeft.classList.add("hide-arrow");
	else scrollLeft.classList.remove("hide-arrow");

	if (index === 9) scrollRight.classList.add("hide-arrow");
	else scrollRight.classList.remove("hide-arrow");

	// create emblem
	createEmblem(album.emblem, DELIMITER[0] || undefined).forEach((node) =>
		emblemDiv.append(node)
	);

	// add final animations
	heroDiv.classList.add("album-transition");
};

const createEmblem = (string, delimiter = "•") => {
	const spans = [];

	string = string.trim().replaceAll(" ", delimiter) + delimiter;
	const numChars = string.length;
	const degVal = 90 / (numChars / 4);

	string.split("").forEach((char, idx) => {
		const span = document.createElement("span");
		span.innerText = char;
		span.style.transform = `rotate(${180 - degVal * idx}deg)`;
		if (char === delimiter) span.style.color = albums[index]["accent-color"];
		spans.push(span);
	});

	return spans;
};

// Start Script
updateDisplay(index);
