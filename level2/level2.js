document.addEventListener(
	"click", (evt) => {
		if(evt.target.id === "lvl2submit") {
			const inputBox = document.querySelector("#lvl2input")
			if(inputBox.value === "alabaster") {
				document.location.href = "/level3/"
			}
		}
	}
)