const texts = ["Loading.", "Loading..", "Loading..."]
let count = 0

setInterval(() => {
    count = (count + 1) % texts.length
    document.querySelector(".loadingtext").innerText = texts[count]
}, 1000)