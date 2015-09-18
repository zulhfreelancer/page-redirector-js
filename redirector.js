var linkList = 	[
				"http://google.com",
				"http://yahoo.com",
				"http://facebook.com",
				"http://twitter.com",
				"http://ebay.com",
				"http://youtube.com"
			];

var randomLink = linkList[Math.floor(Math.random()*linkList.length)];

window.location.href = randomLink;