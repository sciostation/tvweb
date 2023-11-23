(function (window) {
	try {
		const MGC = $MGC({
			icon: "./img/stationlogo.jpg",
			name: "natio",
			info: "streaming",
			z_index: 9999,
			blur: ".container",
			lang: "zh-CN",
			mini: true,
			darkmode: 2,
			maxWidth: "30rem",
			defaultClosed: true,
			hitokoto: {
				enable: true
			},
			links: [{
				"title": "website",
				"url": "https://sciostation.github.io/",
				"type": "primary",
				"target": "_blank"
			}, {
				"title": "autor",
				"url": "https://stackblog.cf/tv/",
				"type": "dark",
				"target": "_blank"
			}, {
				"title": "Stack TV Usage",
				"url": "https://github.com/Uyukisan/StackTV",
				"target": "_blank"
			}]
		});
	} catch (e) {
		console.error("MG");
	}
	const STACKTV = $ASTV({
		selector: ".container",
		showAbout: false,
		lazyLoadSize: 20,
		autoPlay: true,
		// showLog: false
	});
	let url = new URL(location.href).searchParams.get("url") || "https://raw.githubusercontent.com/sciostation/tv/main/streaming.m3u8";
	let playUrl = new URL(location.href).searchParams.get("playUrl") || "";
	url = url.trim();
	playUrl = playUrl.trim();
	if (playUrl.length > 0) {
		try {
			STACKTV.loadUrl(playUrl);
			console.info("info：" + playUrl);
		} catch (err) {
			console.error("error:" + playUrl);
			console.error(err)
		}

		return;
	}
	STACKTV.fetchM3U(url);
})(window)
