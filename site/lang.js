// Language switch of the public pages (README.md, "Languages"): every page holds English, German
// and French in sections marked lang="en|de|fr". Without JavaScript all three show one after the
// other; with it, the reader's browser language (or the #en, #de or #fr in the address) picks one.
(function () {
  var langs = ["en", "de", "fr"];
  function pick() {
    var hash = location.hash.replace("#", "");
    if (langs.indexOf(hash) >= 0) return hash;
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return langs.indexOf(nav) >= 0 ? nav : "en";
  }
  function show(lang) {
    document.querySelectorAll("section[lang]").forEach(function (s) {
      s.hidden = s.getAttribute("lang") !== lang;
    });
    document.querySelectorAll("nav.lang a").forEach(function (a) {
      a.setAttribute("aria-current", a.getAttribute("href") === "#" + lang ? "true" : "false");
    });
    document.documentElement.lang = lang;
  }
  document.documentElement.classList.add("js");
  // Sections carry no id, so #de picks a language without scrolling past the language buttons.
  window.addEventListener("hashchange", function () { show(pick()); });
  show(pick());
})();
