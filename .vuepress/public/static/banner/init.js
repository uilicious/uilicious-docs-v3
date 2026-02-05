// create banner
if(window.createBanner){
  console.log('Creating banner')
	window.createBanner(
		`<b>We’ve moved!</b> This documentation is no longer maintained. Check out our new docs with improved guides and updated references. 👉 <a href="/scripting/"><b>Go to new docs</b></a>`
		, {
		insertBeforeSelector: "#app > .theme-container > header",
		textAlign: 'left',
	});
}