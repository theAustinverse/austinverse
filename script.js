/* ==========================================================================
   Austinverse — Portfolio
   Vanilla JS: i18n toggle, mobile nav, work card expand, scroll reveal.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- i18n ---------- */
  /* Real copy where provided; [BRACKETED] keys are still placeholders. */
  var translations = {
    zh: {
      "nav.services": "服務",
      "nav.work": "作品",
      "nav.about": "關於",
      "nav.contact": "聯絡",
      "lang.toggleLabel": "EN",
      "hero.label": "INTRO",
      "hero.statement": "客製化的網站與自動化系統，值得被好好對待的事業與憧憬，就讓我們與AI共舞，帶著你的品味走向未來！",
      "hero.ctaLabel": "查看作品 →",
      "hero.subtitle": "客製化網站與自動化系統——親自操刀，不假手他人、不批量生產。",
      "services.label": "SERVICES",
      "services.sectionTitle": "服務項目",
      "services.item1.title": "客製化網站建置",
      "services.item1.desc": "不用制式模板，依你的事業實際需求設計與開發。每個案子由我親自處理、不外包、不量產。",
      "services.item2.title": "自動化流程導入",
      "services.item2.desc": "把重複性的手動作業，轉換成可靠、可維護的自動化系統。",
      "services.item3.title": "長期維護與資安強化",
      "services.item3.desc": "上線不是終點。持續的更新、備份與存取管理，讓你的網站禁得起時間的考驗。",
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
      "about.sectionTitle": "關於 Austinverse",
      "about.narrative": "我是 Austin，Austinverse 的創辦人。\n\n2020~2026我在軍中服務，並曾經擔任中英雙語傳譯，執行超過 100 場次的口譯任務——這份工作沒有「大概對」的空間，一個字的誤差都可能造成實質後果，正是這種對精確度的要求磨練出自身對於事業以及品味的標準。\n\n我也在 Web3 領域主導過完整專案交付：在 MightyDAO 與夥伴們一同設計並帶領一套穩定幣教育課程從零到有到實際上線Pressplay Academy，協調跨部門與外部合作夥伴完成交付。\n\nAustinverse 不是一間量產網站的工廠，每個案子由我親手蒐集客戶需求，釐清個案的目標與夢想，不假手他人、不外包給不知名的團隊。如果你要的是一個真正肯花時間了解你事業、聽你的品牌故事並願意長期負責的夥伴，這就是我能提供給你的價值。",
      "about.contactCta": "聯絡我 →",
      "contact.label": "CONTACT",
      "contact.sectionTitle": "聯絡方式",
      "contact.emailValue": "austinwu.0716@gmail.com",
      "contact.telegramValue": "Telegram · @austinwu_0716",
      "contact.linkedinValue": "LinkedIn ↗",
      "footer.rights": "[FOOTER_RIGHTS_ZH]",
      "footer.social1": "[SOCIAL_LINK_1_LABEL_ZH]",
      "footer.social2": "[SOCIAL_LINK_2_LABEL_ZH]",
      "footer.social3": "[SOCIAL_LINK_3_LABEL_ZH]"
    },
    en: {
      "nav.services": "Services",
      "nav.work": "Work",
      "nav.about": "About",
      "nav.contact": "Contact",
      "lang.toggleLabel": "中",
      "hero.label": "INTRO",
      "hero.statement": "Custom-built websites and automation systems — because your business and your ambitions deserve to be treated with care. Let's dance with AI and carry your taste into the future.",
      "hero.ctaLabel": "View Work →",
      "hero.subtitle": "Custom-built websites and automation — handled personally, not mass-produced.",
      "services.label": "SERVICES",
      "services.sectionTitle": "Services",
      "services.item1.title": "Custom Website Development",
      "services.item1.desc": "No off-the-shelf templates. Every site is designed and built around your business's real needs — handled personally by me, never outsourced, never mass-produced.",
      "services.item2.title": "Automation & Workflow Integration",
      "services.item2.desc": "Turning repetitive manual work into reliable, maintainable automated systems.",
      "services.item3.title": "Long-Term Maintenance & Security",
      "services.item3.desc": "Launch isn't the finish line. Ongoing updates, backups, and access management keep your site standing the test of time.",
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
      "about.sectionTitle": "About Austinverse",
      "about.narrative": "I'm Austin, the founder of Austinverse.\n\nFrom 2020 to 2026 I served in the military, working as a bilingual (Mandarin/English) interpreter across more than 100 assignments. That job left no room for \"roughly right\" — a single word off could carry real consequences, and it's exactly that demand for precision that shaped my standards for both business and taste.\n\nI've also led full project delivery in Web3: at MightyDAO, I worked with a team to design and lead a stablecoin education course from scratch through to launch on Pressplay Academy, coordinating across departments and external partners to see it through.\n\nAustinverse isn't a website factory. Every project starts with me personally gathering requirements and understanding your goals and vision — never handed off, never outsourced to an anonymous team. If you're looking for a partner who will actually take the time to understand your business, hear your brand's story, and stay accountable for the long haul, that's what I bring to the table.",
      "about.contactCta": "Get in Touch →",
      "contact.label": "CONTACT",
      "contact.sectionTitle": "Get in Touch",
      "contact.emailValue": "austinwu.0716@gmail.com",
      "contact.telegramValue": "Telegram · @austinwu_0716",
      "contact.linkedinValue": "LinkedIn ↗",
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

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
