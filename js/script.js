// スライドメニュー
jQuery(".header__sp-menu").on("click", function(e) {
  e.preventDefault();
  jQuery(".slide-menu").toggleClass("is-checked");
});

jQuery(".slide-menu__header-button").on("click", function(e) {
  e.preventDefault();
  jQuery(".slide-menu").removeClass("is-checked");
});

jQuery(".slide-menu__nav-link").on("click", function(e) {
  e.preventDefault();
  jQuery(".slide-menu").removeClass("is-checked");
});

