/*
	Dil değiştirici.
	Seçim localStorage'da saklanır; ilk ziyarette tarayıcı dili kullanılır.
	Metinlerin gizlenip gösterilmesi custom.css içindeki kurallarla yapılır.
*/
(function () {

	var STORAGE_KEY = 'bk-lang',
		root = document.documentElement,
		toggle = document.getElementById('lang-toggle');

	function apply(lang) {
		root.setAttribute('data-lang', lang);
		root.setAttribute('lang', lang);
		if (toggle)
			toggle.setAttribute('aria-label', lang === 'tr' ? 'Switch to English' : 'Türkçeye geç');
		try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
	}

	var saved = null;
	try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}

	if (saved !== 'tr' && saved !== 'en')
		saved = (navigator.language || 'tr').toLowerCase().indexOf('tr') === 0 ? 'tr' : 'en';

	apply(saved);

	if (toggle)
		toggle.addEventListener('click', function () {
			apply(root.getAttribute('data-lang') === 'tr' ? 'en' : 'tr');
		});

	// Telif satırındaki yıl
	var year = document.getElementById('year');
	if (year)
		year.textContent = new Date().getFullYear();

})();
