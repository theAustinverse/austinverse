/* ==========================================================================
   Austinverse — Portfolio Scaffold
   Vanilla JS: i18n toggle, mobile nav, work card expand, scroll reveal.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- i18n ---------- */
  /* Placeholder copy only. Real content to be filled in later per key. */
  var translations = {
    zh: {
      "nav.work": "作品",
      "nav.about": "關於",
      "lang.toggleLabel": "EN",
      "hero.statement": "[HERO_STATEMENT_ZH]",
      "hero.subtitle": "[HERO_SUBTITLE_ZH]",
      "work.sectionTitle": "[WORK_SECTION_TITLE_ZH]",
      "work.expandLabel": "[EXPAND_LABEL_ZH]",
      "work.card1.title": "[WORK_1_TITLE_ZH]",
      "work.card1.desc": "[WORK_1_DESC_ZH]",
      "work.card1.tag1": "[WORK_1_TAG_1_ZH]",
      "work.card1.tag2": "[WORK_1_TAG_2_ZH]",
      "work.card1.tag3": "[WORK_1_TAG_3_ZH]",
      "work.card1.detail": "[WORK_1_DETAIL_ZH]",
      "work.card2.title": "[WORK_2_TITLE_ZH]",
      "work.card2.desc": "[WORK_2_DESC_ZH]",
      "work.card2.tag1": "[WORK_2_TAG_1_ZH]",
      "work.card2.tag2": "[WORK_2_TAG_2_ZH]",
      "work.card2.tag3": "[WORK_2_TAG_3_ZH]",
      "work.card2.detail": "[WORK_2_DETAIL_ZH]",
      "work.card3.title": "[WORK_3_TITLE_ZH]",
      "work.card3.desc": "[WORK_3_DESC_ZH]",
      "work.card3.tag1": "[WORK_3_TAG_1_ZH]",
      "work.card3.tag2": "[WORK_3_TAG_2_ZH]",
      "work.card3.tag3": "[WORK_3_TAG_3_ZH]",
      "work.card3.detail": "[WORK_3_DETAIL_ZH]",
      "about.sectionTitle": "[ABOUT_SECTION_TITLE_ZH]",
      "about.narrative": "[ABOUT_NARRATIVE_ZH]",
      "about.contactTitle": "[CONTACT_TITLE_ZH]",
      "about.emailLabel": "[CONTACT_EMAIL_LABEL_ZH]",
      "about.emailValue": "[CONTACT_EMAIL_VALUE_ZH]",
      "about.linkedinLabel": "[CONTACT_LINKEDIN_LABEL_ZH]",
      "about.linkedinValue": "[LINKEDIN_URL_ZH]",
      "footer.rights": "[FOOTER_RIGHTS_ZH]",
      "footer.social1": "[SOCIAL_LINK_1_LABEL_ZH]",
      "footer.social2": "[SOCIAL_LINK_2_LABEL_ZH]",
      "footer.social3": "[SOCIAL_LINK_3_LABEL_ZH]"
    },
    en: {
      "nav.work": "Work",
      "nav.about": "About",
      "lang.toggleLabel": "中",
      "hero.statement": "[HERO_STATEMENT_EN]",
      "hero.subtitle": "[HERO_SUBTITLE_EN]",
      "work.sectionTitle": "[WORK_SECTION_TITLE_EN]",
      "work.expandLabel": "[EXPAND_LABEL_EN]",
      "work.card1.title": "[WORK_1_TITLE_EN]",
      "work.card1.desc": "[WORK_1_DESC_EN]",
      "work.card1.tag1": "[WORK_1_TAG_1_EN]",
      "work.card1.tag2": "[WORK_1_TAG_2_EN]",
      "work.card1.tag3": "[WORK_1_TAG_3_EN]",
      "work.card1.detail": "[WORK_1_DETAIL_EN]",
      "work.card2.title": "[WORK_2_TITLE_EN]",
      "work.card2.desc": "[WORK_2_DESC_EN]",
      "work.card2.tag1": "[WORK_2_TAG_1_EN]",
      "work.card2.tag2": "[WORK_2_TAG_2_EN]",
      "work.card2.tag3": "[WORK_2_TAG_3_EN]",
      "work.card2.detail": "[WORK_2_DETAIL_EN]",
      "work.card3.title": "[WORK_3_TITLE_EN]",
      "work.card3.desc": "[WORK_3_DESC_EN]",
      "work.card3.tag1": "[WORK_3_TAG_1_EN]",
      "work.card3.tag2": "[WORK_3_TAG_2_EN]",
      "work.card3.tag3": "[WORK_3_TAG_3_EN]",
      "work.card3.detail": "[WORK_3_DETAIL_EN]",
      "about.sectionTitle": "[ABOUT_SECTION_TITLE_EN]",
      "about.narrative": "[ABOUT_NARRATIVE_EN]",
      "about.contactTitle": "[CONTACT_TITLE_EN]",
      "about.emailLabel": "[CONTACT_EMAIL_LABEL_EN]",
      "about.emailValue": "[CONTACT_EMAIL_VALUE_EN]",
      "about.linkedinLabel": "[CONTACT_LINKEDIN_LABEL_EN]",
      "about.linkedinValue": "[LINKEDIN_URL_EN]",
      "footer.rights": "[FOOTER_RIGHTS_EN]",
      "footer.social1": "[SOCIAL_LINK_1_LABEL_EN]",
      "footer.social2": "[SOCIAL_LINK_2_LABEL_EN]",
      "footer.social3": "[SOCIAL_LINK_3_LABEL_EN]"
    }
  };

  var LANG_STORAGE_KEY = "austinverse-lang";
  var htmlEl = document.documentElement;

  function getInitialLang() {
    var saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === "zh" || saved === "en") return saved;
    return "zh";
  }

  function applyLang(lang) {
    var dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });
    htmlEl.setAttribute("lang", lang === "zh" ? "zh-Hant" : "en");
    htmlEl.setAttribute("data-lang", lang);
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  }

  var currentLang = getInitialLang();
  applyLang(currentLang);

  var langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      currentLang = currentLang === "zh" ? "en" : "zh";
      applyLang(currentLang);
    });
  }

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Work card expand/collapse ---------- */
  document.querySelectorAll(".work-card-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var targetId = btn.getAttribute("aria-controls");
      var detail = document.getElementById(targetId);
      if (!detail) return;
      var isHidden = detail.hasAttribute("hidden");
      if (isHidden) {
        detail.removeAttribute("hidden");
      } else {
        detail.setAttribute("hidden", "");
      }
      btn.setAttribute("aria-expanded", String(isHidden));
    });
  });

  /* ---------- Scroll reveal for work cards ---------- */
  var cards = document.querySelectorAll(".work-card");
  if ("IntersectionObserver" in window && cards.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach(function (card) {
      observer.observe(card);
    });
  } else {
    cards.forEach(function (card) {
      card.classList.add("is-visible");
    });
  }

  /* ---------- LinkedIn link placeholder ---------- */
  var linkedinLink = document.getElementById("linkedinLink");
  if (linkedinLink) {
    linkedinLink.setAttribute("href", "PLACEHOLDER_LINKEDIN_URL");
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
