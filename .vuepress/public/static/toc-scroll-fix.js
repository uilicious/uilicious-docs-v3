// when ui chat bot is installed, it styles the page as a flex container, which breaks the scroll into view for the table of contents component
document.addEventListener("click",(event)=>{
	try{
		let el = event.target
		console.log(el.classList)
		if(el.classList.contains("vuepress-toc-link")){
			console.log("vuewpress link")
			let href = el.getAttribute("href");
			let url = new URL(location.origin + href)
			let headerID = url.hash.substring(1)
			console.log("id:", headerID)
			let headerElement = document.getElementById(headerID)
			headerElement.scrollIntoView()
		}
	}catch(e){
		// ignore errors
		console.error("error scrolling table of content link header into view: ", e)
	}
})