'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var alpha = exports.alpha = {
  'en-US': /^[A-Z]+$/i,
  'de-DE': /^[A-ZÄÖÜß]+$/i,
  'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'nl-NL': /^[A-ZÉËÏÓÖÜ]+$/i,
  'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[А-ЯЁа-яё]+$/i,
  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var alphaspecial = exports.alphaspecial = {
		  'en-US': /^[A-Z-]+$/i,
		  'de-DE': /^[A-Z-ÄÖÜß]+$/i,
		  'es-ES': /^[A-Z-ÁÉÍÑÓÚÜ]+$/i,
		  'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
		  'nl-NL': /^[A-ZÉËÏÓÖÜ]+$/i,
		  'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
		  'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
		  'ru-RU': /^[А-ЯЁа-яё]+$/i,
		  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
		  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
		};
var alphanumeric = exports.alphanumeric = {
  'en-US': /^[0-9A-Z]+$/i,
  'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
  'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'nl-NL': /^[0-9A-ZÉËÏÓÖÜ]+$/i,
  'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[0-9А-ЯЁа-яё]+$/i,
  'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var alphanumericSpecial = exports.alphanumericSpecial = {
		  'en-US': /^[0-9A-Z-]+$/i,
		  'de-DE': /^[0-9A-Z-ÄÖÜß]+$/i,
		  'es-ES': /^[0-9A-Z-ÁÉÍÑÓÚÜ]+$/i,
		  'fr-FR': /^[0-9A-Z-ÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
		  'nl-NL': /^[0-9A-Z-ÉËÏÓÖÜ]+$/i,
		  'pl-PL': /^[0-9A-Z-ĄĆĘŚŁŃÓŻŹ]+$/i,
		  'pt-PT': /^[0-9A-Z-ÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
		  'ru-RU': /^[0-9А-ЯЁа-яё-]+$/i,
		  'tr-TR': /^[0-9A-Z-ÇĞİıÖŞÜ]+$/i,
		  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
		};

var englishLocales = exports.englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];

for (var locale, i = 0; i < englishLocales.length; i++) {
  locale = 'en-' + englishLocales[i];
  alpha[locale] = alpha['en-US'];
  alphanumeric[locale] = alphanumeric['en-US'];
  alphaspecial[locale] = alphaspecial['en-US'];
}

var arabicLocales = exports.arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];

for (var locale, i = 0; i < arabicLocales.length; i++) {
  locale = 'ar-' + arabicLocales[i];
  alpha[locale] = alpha.ar;
  alphanumeric[locale] = alphanumeric.ar;
  alphaspecial[locale] = alphaspecial.ar;
}