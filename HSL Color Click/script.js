PR.prettyPrint();

// Click Fun! //

document.addEventListener("click", () => 
gsap.set("body", {duration:0.3,
	background: `hsla(
		${"random(0, 360)"}, 
		${"random(50, 100)"}%, 
		${"random(25, 75)"}%)`
}))

// learn loads of awesome creative coding tips with me at: https://www.creativeCodingClub.com 
// unlock over 200 premium lessons and get new lessons each week

