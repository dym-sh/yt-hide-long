// ==UserScript==
// @name		YouTube: Hide LONG Videos
// @namespace	https://source.garden
// @version		1.0
// @license		CC0
// @description	Hide LONG (over 2:00:00 – two hours) videos on YouTube's pages
// @author		Dym Sohin <re@dym.sh>
// @match		https://*.youtube.com/*
// @match		https://youtube.com/*
// @noframes
// @downloadURL	https://source.garden/scripts/yt-hide-long/raw/branch/latest/script.user.js
// @updateURL	https://source.garden/scripts/yt-hide-long/raw/branch/latest/script.meta.js
// ==/UserScript==

(function() {
	'use strict'

	function removeUpcomingVideos(){
		document
			.querySelectorAll( `ytd-item-section-renderer` )
			.forEach( e =>
			{
				const is_long = e.querySelector( `badge-shape[aria-label*="hours,"]` )
				if( is_long )
				{
					e.style.display = 'none'
				}
			})
	}
 
	const observer = new MutationObserver(removeUpcomingVideos)
	observer.observe(
		document.querySelector('#page-manager')
		, { childList:true, subtree:true }
	)

})()
