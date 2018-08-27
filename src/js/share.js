Share = {
	vkontakte: function() {
		url  = 'http://vkontakte.ru/share.php?';
		url += 'url='          + encodeURIComponent(window.location.href);
		Share.popup(url);
	},
	facebook: function() {
		url  = 'http://www.facebook.com/sharer.php?s=100';
		url += '&p[url]='       + encodeURIComponent(window.location.href);
		Share.popup(url);
	},
	mail: function() {
		url  = 'mailto:?';
		url += 'subject=' + window.location.href + '&amp;body=' + window.location.href;
		Share.popup(url);
    },
    google: function() {
		url  = 'https://plus.google.com/share?';
		url += 'url='          + encodeURIComponent(window.location.href);
		Share.popup(url);
	},

	popup: function(url) {
		window.open(url,'','toolbar=0,status=0,width=626,height=436');
	}
};