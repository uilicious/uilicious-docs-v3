/*
 * createBanner(message, options)
 * - message: string or HTML string to show inside the banner
 * - options: {
 *     id, className, fixed (true|false), background, color, padding,
 *     zIndex, textAlign, fontSize, dismissible (true|false), autoDismiss (ms),
 *     insertBeforeSelector, onDismiss: fn
 *   }
 *
 * Exposes:
 * - window.createBanner(message, options) in browsers
 * - module.exports = createBanner for CommonJS
 *
 * Lightweight, dependency-free, safe for inclusion in static sites.
 */
(function (global) {
	// Provide a no-op in non-browser environments (SSR/build) to avoid crashes
	if (typeof document === 'undefined') {
		var noop = function () { return null; };
		try { if (typeof module !== 'undefined' && module.exports) module.exports = noop; } catch (e) {}
		try { global.createBanner = noop; } catch (e) {}
		return;
	}

	function createBanner(message, options) {
		if (!message && message !== 0) return null;
		options = options || {};

		var id = options.id || 'site-banner';
		// If a banner with same id exists, return it (avoid duplicates)
		var existing = document.getElementById(id);
		if (existing) return existing;

		var banner = document.createElement('div');
		banner.id = id;
		banner.className = options.className || 'site-banner';

		// Basic inline styles so this works without external CSS
		var fixed = options.fixed !== false; // default true
		banner.style.position = fixed ? 'fixed' : 'relative';
		if(options.background){
			banner.style.background = options.background;
		}
		if(options.color){
			banner.style.color = options.color;
		}
		if(options.padding){
			banner.style.padding = options.padding;
		}
		if(options.boxShadow){
			banner.style.boxShadow = options.boxShadow;
		}
		if(options.zIndex){
			banner.style.zIndex = String(options.zIndex);
		}
		if(options.textAlign){
			banner.style.textAlign = options.textAlign;
		}

		// Content container
		var content = document.createElement('div');
		content.style.flex = '1 1 auto';
		if(options.textAlign){
			content.style.textAlign = options.textAlign;
		}
		if (typeof message === 'string') content.innerHTML = message;
		else content.appendChild(message); // allow passing DOM node
		banner.appendChild(content);

		// Dismiss button
		if (options.dismissible !== false) {
			var close = document.createElement('button');
			close.type = 'button';
			close.setAttribute('aria-label', 'Dismiss banner');
			close.innerHTML = '\u00d7'; // ×
			// minimal styles
			close.style.position = 'absolute';
			close.style.right = '8px';
			close.style.top = '50%';
			close.style.transform = 'translateY(-50%)';
			close.style.border = 'none';
			close.style.background = 'transparent';
			close.style.fontSize = options.closeFontSize || '20px';
			close.style.cursor = 'pointer';
			close.style.color = options.closeColor || banner.style.color;
			close.style.padding = '4px 8px';
			close.addEventListener('click', function () {
				if (banner.parentNode) banner.parentNode.removeChild(banner);
				if (typeof options.onDismiss === 'function') options.onDismiss();
			});
			banner.appendChild(close);
		}

		// Insert near top of document. If user supplied a selector to insert before, try that first.
		try {
			console.log("options.insertBeforeSelector:", options.insertBeforeSelector)
			if (options.insertBeforeSelector) {
				var ref = document.querySelector(options.insertBeforeSelector);
				if (ref && ref.parentNode) ref.parentNode.insertBefore(banner, ref);
				else document.body.insertBefore(banner, document.body.firstChild);
			} else {
				// place before first child to ensure it's at top
				document.body.insertBefore(banner, document.body.firstChild);
			}
		} catch (e) {
			// fallback
			document.body.insertBefore(banner, document.body.firstChild);
		}

		// optional auto-dismiss
		if (options.autoDismiss && typeof options.autoDismiss === 'number') {
			setTimeout(function () {
				if (banner.parentNode) banner.parentNode.removeChild(banner);
				if (typeof options.onDismiss === 'function') options.onDismiss();
			}, options.autoDismiss);
		}

		return banner;
	}

	// Expose to window and CommonJS
	try { global.createBanner = createBanner; } catch (e) {}
	try { if (typeof module !== 'undefined' && module.exports) module.exports = createBanner; } catch (e) {}

})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));

