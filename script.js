/* ==========================================================================
   Austinverse — Portfolio
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
      "nav.contact": "聯絡",
      "lang.toggleLabel": "EN",
      "hero.label": "INTRO",
      "hero.statement": "[HERO_STATEMENT_ZH]",
      "hero.ctaLabel": "查看作品 ↓",
      "hero.subtitle": "[HERO_SUBTITLE_ZH]",
      "work.label": "SELECTED WORK",
      "work.sectionTitle": "[WORK_SECTION_TITLE_ZH]",
      "work.viewLabel": "VIEW",
      "work.expandLabel": "[EXPAND_LABEL_ZH]",
      "work.card1.title": "XX年度盛會售票系統",
      "work.card1.desc": "打造一個可以讓團隊夥伴體驗搶票刺激感的網站。",
      "work.card1.tag1": "Claude Code",
      "work.card1.tag2": "Vibe Coding",
      "work.card1.tag3": "Google Sheets",
      "work.card1.detail": "這套系統是我不斷跟 Claude Code 對話迭代出來的成果,過程中裝好各種開發環境並串接到 GitHub 進行版本控管,Google Sheets 則用來匯出報名與購票數據。從零到上線大約花了一週,最大的挑戰是環境安裝與層出不窮的 bug;介面風格則是不斷參考其他網站,再依照使用者實際回饋持續調整而成。上線後,團隊第一次擺脫過去用 Google 表單登記票券的方式,體驗到真正的搶票節奏與刺激感——這也是我第一次完整走過 vibe coding 流程的作品,奠定了後續運用 AI 協作開發的基礎。",
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
      "about.focusLabel": "FOCUS",
      "about.focusValue": "[FOCUS_VALUE_ZH]",
      "about.flowLabel": "PROCESS",
      "about.flowValue": "[FLOW_VALUE_ZH]",
      "about.emailValue": "[CONTACT_EMAIL_VALUE_ZH]",
      "about.linkedinValue": "[LINKEDIN_URL_ZH]",
      "footer.rights": "[FOOTER_RIGHTS_ZH]",
      "footer.social1": "[SOCIAL_LINK_1_LABEL_ZH]",
      "footer.social2": "[SOCIAL_LINK_2_LABEL_ZH]",
      "footer.social3": "[SOCIAL_LINK_3_LABEL_ZH]"
    },
    en: {
      "nav.work": "Work",
      "nav.about": "About",
      "nav.contact": "Contact",
      "lang.toggleLabel": "中",
      "hero.label": "INTRO",
      "hero.statement": "[HERO_STATEMENT_EN]",
      "hero.ctaLabel": "View Work ↓",
      "hero.subtitle": "[HERO_SUBTITLE_EN]",
      "work.label": "SELECTED WORK",
      "work.sectionTitle": "[WORK_SECTION_TITLE_EN]",
      "work.viewLabel": "VIEW",
      "work.expandLabel": "[EXPAND_LABEL_EN]",
      "work.card1.title": "Annual Event Ticketing System",
      "work.card1.desc": "Built to give teammates the real rush of a live ticket race.",
      "work.card1.tag1": "Claude Code",
      "work.card1.tag2": "Vibe Coding",
      "work.card1.tag3": "Google Sheets",
      "work.card1.detail": "Built by iterating in conversation with Claude Code — setting up the dev environment from scratch and wiring it to GitHub for version control, with Google Sheets handling registration and ticket-purchase data exports. It took about a week from zero to launch. The biggest challenges were environment setup and a steady stream of bugs; the interface evolved by studying other sites and adjusting based on real user feedback. Once live, the team moved past the old Google Form sign-up process and experienced a real ticket rush for the first time — this was also my first complete vibe-coding project, and the foundation for how I've worked with AI since.",
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
      "about.focusLabel": "FOCUS",
      "about.focusValue": "[FOCUS_VALUE_EN]",
      "about.flowLabel": "PROCESS",
      "about.flowValue": "[FLOW_VALUE_EN]",
      "about.emailValue": "[CONTACT_EMAIL_VALUE_EN]",
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
  var mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.addEventListener("click", function (event) {
      if (event.target.tagName === "A" || event.target.closest("a")) {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
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
  var revealEls = document.querySelectorAll(".work-card");
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
