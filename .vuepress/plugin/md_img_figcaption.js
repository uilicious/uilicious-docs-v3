
/*************************************************************************************************
 *
 * markdown-it plugin function, which extends the default image renderer, to add figcaption
 *
 *************************************************************************************************/
export default (md, pluginOptions) => {
	// Skip if already configured
	if( md.renderer.rules.image.isFigCaption ) {
		return;
	}

	// Get the default renderer
	let oriRenderer = md.renderer.rules.image;

	// Add the new renderer
	md.renderer.rules.image = function(tokenArr, idx, options, env, slf) {
		// Lets get the token we are supposed to process
		let token = tokenArr[idx];

		// Lets extract the image text (when possible)
		let imgText = token.content || null;

		// Get the original render string
		let ori = oriRenderer( tokenArr, idx, options, env, slf );

		// Lets handle this conditionally
		if( imgText == null ) {
			return ori;
		} else {
			return `<div class="image-figwrap">`+
				`<figure class="image-figure">${ori}</figure>`+
				`<figcaption class="image-figcaption">${imgText}</figcaption>`+
				`</div>`;
		}
	}

	// Flag to prevent double loading
	md.renderer.rules.image.isFigCaption = true;
}
