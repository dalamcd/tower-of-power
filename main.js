document.addEventListener(
	"click", (evt) => {
		if(evt.target.id === "lvl1submit") {
			const inputBox = document.querySelector("#lvl1input")
			if(inputBox.value === "onions") {
				document.location.href = "/level2/"
			}
		}
	}
)