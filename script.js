/* ==========================================================================
   Austinverse — Portfolio Scaffold
   Vanilla JS: i18n toggle, work card expand, scroll reveal.
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
      "sidebar.photoPlaceholder": "[PROFILE_PHOTO]",
      "sidebar.roleTag": "[ROLE_TAG_ZH]",
      "sidebar.tagline": "[SIDEBAR_TAGLINE_ZH]",
      "sidebar.bio": "[SIDEBAR_BIO_ZH]",
      "sidebar.focusLabel": "擅長",
      "sidebar.focusValue": "[FOCUS_VALUE_ZH]",
      "sidebar.flowLabel": "合作方式",
      "sidebar.flowValue": "[FLOW_VALUE_ZH]",
      "hero.label": "INTRO",
      "hero.statement": "[HERO_STATEMENT_ZH]",
      "hero.subtitle": "[HERO_SUBTITLE_ZH]",
      "work.label": "SELECTED WORK",
      "work.sectionTitle": "[WORK_SECTION_TITLE_ZH]",
      "work.viewLabel": "VIEW",
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
      "about.label": "ABOUT",
      "about.sectionTitle": "[ABOUT_SECTION_TITLE_ZH]",
      "about.narrative": "[ABOUT_NARRATIVE_ZH]",
      "about.contactLabel": "CONTACT",
      "about.emailLabel": "EMAIL",
      "about.emailValue": "[CONTACT_EMAIL_VALUE_ZH]",
      "about.linkedinLabel": "LINKEDIN",
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
      "sidebar.photoPlaceholder": "[PROFILE_PHOTO]",
      "sidebar.roleTag": "[ROLE_TAG_EN]",
      "sidebar.tagline": "[SIDEBAR_TAGLINE_EN]",
      "sidebar.bio": "[SIDEBAR_BIO_EN]",
      "sidebar.focusLabel": "Focus",
      "sidebar.focusValue": "[FOCUS_VALUE_EN]",
      "sidebar.flowLabel": "Process",
      "sidebar.flowValue": "[FLOW_VALUE_EN]",
      "hero.label": "INTRO",
      "hero.statement": "[HERO_STATEMENT_EN]",
      "hero.subtitle": "[HERO_SUBTITLE_EN]",
      "work.label": "SELECTED WORK",
      "work.sectionTitle": "[WORK_SECTION_TITLE_EN]",
      "work.viewLabel": "VIEW",
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
      "about.label": "ABOUT",
      "about.sectionTitle": "[ABOUT_SECTION_TITLE_EN]",
      "about.narrative": "[ABOUT_NARRATIVE_EN]",
      "about.contactLabel": "CONTACT",
      "about.emailLabel": "EMAIL",
      "about.emailValue": "[CONTACT_EMAIL_VALUE_EN]",
      "about.linkedinLabel": "LINKEDIN",
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

  /* ---------- Work card expand/collapse ---------- */
  function toggleWorkDetail(targetId) {
    var detail = document.getElementById(targetId);
    if (!detail) return;
    var isHidden = detail.hasAttribute("hidden");
    if (isHidden) {
      detail.removeAttribute("hidden");
    } else {
      detail.setAttribute("hidden", "");
    }
    var toggleBtn = document.querySelector(
      '.work-card-toggle[aria-controls="' + targetId + '"]'
    );
    if (toggleBtn) {
      toggleBtn.setAttribute("aria-expanded", String(isHidden));
    }
  }

  document.querySelectorAll(".work-card-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      toggleWorkDetail(btn.getAttribute("aria-controls"));
    });
  });

  document.querySelectorAll(".work-card-view").forEach(function (btn) {
    btn.addEventListener("click", function () {
      toggleWorkDetail(btn.getAttribute("data-target"));
    });
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".work-card, .contact-card");
  if ("IntersectionObserver" in window && revealEls.length) {
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
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
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
