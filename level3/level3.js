document.addEventListener(
	"click", (evt) => {
		if(evt.target.id === "lvl3submit") {
			const inputBox = document.querySelector("#lvl3input")
			if(inputBox.value.toLowerCase() === "argentina") {
				document.location.href = "/level4/"
			}
		}
	}
)

const letters ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=!@#$%^&*()"

const tmp = "DontDoThisByHandOrYouWillHaveAReallyBadTimeThePasswordIsArgentina"

let convertedStr = ""

for(let i = 0; i < tmp.length; i++) {
	convertedStr += tmp[i]
	for(let j = 0; j < 11; j++) {
		const idx = Math.floor(Math.random()*letters.length)
		convertedStr += letters[idx]
	}
}

console.log(convertedStr)


let prt = ""
for(let i = 0; i < 12*tmp.length; i += 12) {
	prt += convertedStr[i]
}

let passPhrase = 'Dc4fJsb0nScao!LffE94YnOmnn97FHwpLH7atRd1cpqqXZ3WDGUFZ^hmk@wwowsWg-EED7)=TSlfGh=WiPB1hmikLhjC$tHGi4uNLSvAqz1zs$mf=DZ9PR$mBq@dgu@d$5=-yJzn19Y)W80dHBmXG*Zg-NccaIexOPINZqP1nfqzX5FYh3j$d3(sjD@H9xjEO7@Yxs4cAsaxryfgGhhEY$40YjT6jzzxeMLtoczq1pRplM2Xu8BeI7gL83nDW0AlYw%VJKP@iUlo@v7xiBkZlBn6A3Pj2!)#lqaMvY39wvkGHsCXb^XdzGoQawg*gow%eIo6vFy2Ksj)ey-teZ#@u(RzK3ELAFs0uUvpzU%IRNrg9V-$WI%0evRsTKqKgX^-auzG#o$S2bJmlCuUP4)8Nwz9l9WwfpUBLRv0yO@3mkL$X@OhB$Mo^4friKU7awS8lln=3!jXd7P1LmKa7c@6TwKz^ioql^K0i!P-G9lfQK*imthnUYbxL^20exke)ySBIIGJT8OVr*XcbkEuhPNMBQ@nM-MJe#l*7%pd$t(FPaxWdyN1j8x3aR)sh!2CDFcHsQeg4wbKMa!gs)jk(0i7t0#Ww8!DHWgvarj0oCgQSpr-tUtErNX5pKQ^dZVXdnCfnbH$w92rI9ktr@og&Ar5sZFGOJuh*53xAmb9xCKBZgbCrqXMsJqA6WJWg4s4^f=Ug8RvefJIVr=l9pA7nHo^d(oZF5#Rtbl$YFZoUJ61iyER3Gjxh95KnS$=gZ157Kv#alR#AiiN1P*w'