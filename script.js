/**
 * UrlCut Landing Page - Core Script
 * - i18n Internationalization Engine (KO / EN)
 * - Live URL Link Cleaner Simulator
 * - Multi-Platform Screenshot Showcase Gallery (macOS, iOS, Android)
 * - Accessibility & Navigation Handlers
 */

// ==========================================================================
// 1. i18n Dictionary Definition
// ==========================================================================
const messages = {
  ko: {
    "meta.title": "UrlCut | 깔끔하고 안전한 링크 공유",
    "brand.home": "UrlCut 홈",
    "nav.menuToggle": "메뉴 열기",
    "nav.label": "주요 메뉴",
    "nav.demo": "직접 체험하기",
    "nav.screenshots": "앱 화면",
    "nav.howItWorks": "사용 방법",
    "nav.features": "주요 기능",
    "nav.download": "다운로드",
    "nav.faq": "FAQ",
    "nav.downloadCta": "macOS 앱 다운로드",
    "language.label": "언어 선택",

    "hero.eyebrow": "더 깔끔하고 안전한 링크 공유",
    "hero.title": "지저분한 웹 주소는 그만!<br>링크 공유의 시작과 끝을 깔끔하게, <span class=\"highlight\">UrlCut</span>",
    "hero.description": "쇼핑몰, 유튜브, 뉴스 기사 링크를 공유할 때 주소 뒤에 붙은 복잡하고 긴 광고 추적 코드를 자동으로 지워줍니다. 더 깔끔하고, 더 안전하게 링크를 공유하세요.",
    "hero.downloadCta": "macOS용 무료 다운로드",
    "hero.mobileCta": "iOS & Android 출시 예정",

    "cleaner.widgetTitle": "✨ 실시간 링크 정제 체험하기",
    "cleaner.subtitle": "샘플 링크를 클릭하거나 길고 지저분한 URL을 직접 입력해보세요:",
    "cleaner.btnClean": "정제하기",
    "cleaner.beforeLabel": "정제 전",
    "cleaner.afterLabel": "정제 후",
    "cleaner.btnCopy": "복사",
    "cleaner.copied": "복사됨!",
    "cleaner.removedCount": "추적 파라미터 {count}개 제거 완료",

    "screenshots.eyebrow": "APP SHOWCASE",
    "screenshots.title": "모든 기기에서 만나는 UrlCut",
    "screenshots.description": "macOS, iOS, Android 어떤 기기에서든 직관적이고 깔끔한 경험을 선사합니다.",

    "comparison.eyebrow": "HOW IT WORKS",
    "comparison.title": "주소창의 불필요한 거품을 뺍니다",
    "comparison.before.label": "정제 전 (Before)",
    "comparison.before.description": "메신저 창을 가득 채우는 지저분하고 긴 마케팅 추적 코드",
    "comparison.after.label": "정제 후 (After)",
    "comparison.after.description": "핵심 주소만 남아 깔끔하고 보기 편한 링크",

    "features.eyebrow": "KEY FEATURES",
    "features.title": "링크를 다루는 더 똑똑한 방법",
    "features.share.title": "보내기 전에 터치 한 번으로 끝!",
    "features.share.description": "링크를 복사하고 앱을 열어서 붙여넣을 필요가 없습니다. 모바일이나 맥북에서 브라우저나 앱의 '공유하기' 버튼을 누르고 UrlCut을 선택하면 즉시 정제된 주소로 상대방에게 보낼 수 있습니다.",
    "features.media.title": "인스타그램 사진과 영상도 바로 저장",
    "features.media.description": "인스타그램 링크를 공유하면 사진이나 릴스 영상을 고화질 그대로 내 갤러리에 다운로드할 수 있습니다. 따로 다운로드 사이트를 찾아 헤매지 마세요.",
    "features.sync.title": "로그인 없이, 인터넷이 안 되어도 기기 간 전송",
    "features.sync.description": "복잡한 회원가입이나 클라우드 연결 없이도, 같은 와이파이 망에 연결된 내 맥북, 아이폰, 안드로이드 폰 간에 클릭 한 번으로 모아둔 링크를 바로 주고받을 수 있습니다.",
    "features.organize.title": "기억하기 쉽게 나만의 폴더 정리",
    "features.organize.description": "정제된 링크를 폴더별로 나누어 저장해 두고 나중에 다시 찾아볼 수 있습니다. 각 주소마다 내가 알아보기 쉬운 제목으로 편집해 나만의 링크 북마크를 완성해 보세요.",

    "privacy.eyebrow": "PRIVACY FIRST",
    "privacy.title": "내 링크 데이터는 내 기기에 안전하게",
    "privacy.protection.title": "100% 프라이버시 보호",
    "privacy.protection.description": "UrlCut은 사용자가 저장하고 공유하는 링크를 외부 서버에 전송하거나 저장하지 않습니다.",
    "privacy.offline.title": "오프라인 우선 (Offline-First)",
    "privacy.offline.description": "모든 데이터는 내 스마트폰과 Mac 기기 내부 저장소에만 안전하게 보관되므로 유출 걱정 없이 안심하고 사용하실 수 있습니다.",

    "download.eyebrow": "DOWNLOAD",
    "download.title": "지금 UrlCut을 시작해 보세요",
    "download.requirement": "지원 사양: macOS 12.0 이상 지원",
    "download.macosCta": "UrlCut for macOS 다운로드 (v1.0.6)",
    "download.appStoreTag": "출시 예정",
    "download.googlePlayTag": "출시 예정",

    "faq.eyebrow": "FAQ",
    "faq.title": "자주 묻는 질문",
    "faq.q1": "링크의 뒷부분을 지우면 링크가 깨지거나 작동하지 않나요?",
    "faq.a1": "아닙니다. 상품 번호나 페이지 정보 등 접속에 꼭 필요한 주소는 안전하게 유지하고, 광고나 방문 추적을 위해 덧붙여진 불필요한 정보만 골라 제거하기 때문에 안전하게 작동합니다.",
    "faq.q2": "로그인이나 회원가입이 필요한가요?",
    "faq.a2": "전혀 필요하지 않습니다. 설치 후 즉시 사용 가능하며 어떠한 개인정보도 요구하지 않습니다.",
    "faq.q3": "윈도우(Windows) 버전도 지원하나요?",
    "faq.a3": "현재는 macOS, Android, iOS 플랫폼을 우선 지원하고 있으며, 추후 지원 플랫폼을 확장할 예정입니다.",

    "footer.contact": "이메일 문의: glorymint@gmail.com",
    "footer.copyright": "© 2026 UrlCut. All rights reserved."
  },
  en: {
    "meta.title": "UrlCut | Clean & Private Link Sharing",
    "brand.home": "UrlCut Home",
    "nav.menuToggle": "Open Menu",
    "nav.label": "Primary Navigation",
    "nav.demo": "Try Live Demo",
    "nav.screenshots": "App Screens",
    "nav.howItWorks": "How It Works",
    "nav.features": "Features",
    "nav.download": "Download",
    "nav.faq": "FAQ",
    "nav.downloadCta": "Download for macOS",
    "language.label": "Select Language",

    "hero.eyebrow": "CLEAN & PRIVATE LINK SHARING",
    "hero.title": "No more messy web addresses.<br>Share links cleanly with <span class=\"highlight\">UrlCut</span>",
    "hero.description": "UrlCut automatically strips cluttered tracking & marketing codes from shopping, YouTube, and news links. Share cleaner, safer URLs instantly.",
    "hero.downloadCta": "Free Download for macOS",
    "hero.mobileCta": "iOS & Android Coming Soon",

    "cleaner.widgetTitle": "✨ Try Live Link Cleaning",
    "cleaner.subtitle": "Click a sample link or paste your own messy URL:",
    "cleaner.btnClean": "Clean Link",
    "cleaner.beforeLabel": "Before",
    "cleaner.afterLabel": "After",
    "cleaner.btnCopy": "Copy",
    "cleaner.copied": "Copied!",
    "cleaner.removedCount": "Removed {count} tracking parameters",

    "screenshots.eyebrow": "APP SHOWCASE",
    "screenshots.title": "UrlCut on Every Device",
    "screenshots.description": "Enjoy a clean, intuitive experience across macOS, iOS, and Android.",

    "comparison.eyebrow": "HOW IT WORKS",
    "comparison.title": "Cut the fluff out of your address bar",
    "comparison.before.label": "Before Cleaning",
    "comparison.before.description": "Long, messy marketing tracking codes that fill up chat windows",
    "comparison.after.label": "After Cleaning",
    "comparison.after.description": "Only essential address elements remain—clean and easy to read",

    "features.eyebrow": "KEY FEATURES",
    "features.title": "A Smarter Way to Handle Links",
    "features.share.title": "One-Tap Clean via Share Extension",
    "features.share.description": "No manual copy-pasting required. Simply tap 'Share' in your browser or app and pick UrlCut to send clean links immediately.",
    "features.media.title": "Save Instagram Photos & Reels",
    "features.media.description": "Share Instagram links to download original high-res photos and Reels directly to your gallery without extra websites.",
    "features.sync.title": "Local Cross-Device Sync Without Accounts",
    "features.sync.description": "Instantly transfer collected links between your Mac, iPhone, and Android over local Wi-Fi without cloud servers or sign-ins.",
    "features.organize.title": "Organize in Custom Folders",
    "features.organize.description": "Categorize cleaned links in custom folders, edit titles for quick reference, and build your personalized bookmark library.",

    "privacy.eyebrow": "PRIVACY FIRST",
    "privacy.title": "Your Link Data Stays Securely on Your Device",
    "privacy.protection.title": "100% Privacy Protection",
    "privacy.protection.description": "UrlCut never uploads or stores your links on external cloud servers.",
    "privacy.offline.title": "Offline-First Design",
    "privacy.offline.description": "All data is saved strictly inside your local device storage, eliminating data leak concerns.",

    "download.eyebrow": "DOWNLOAD",
    "download.title": "Get Started with UrlCut Today",
    "download.requirement": "Requirements: macOS 12.0 or later",
    "download.macosCta": "Download UrlCut for macOS (v1.0.6)",
    "download.appStoreTag": "Coming Soon",
    "download.googlePlayTag": "Coming Soon",

    "faq.eyebrow": "FAQ",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "Does stripping URL parameters break the link?",
    "faq.a1": "No. UrlCut preserves essential parameters (such as item IDs and page paths) while safely stripping only unnecessary ad & click trackers.",
    "faq.q2": "Do I need to create an account or sign in?",
    "faq.a2": "Not at all. UrlCut works immediately upon installation with zero sign-in or personal data required.",
    "faq.q3": "Will there be a Windows version?",
    "faq.a3": "Currently, we prioritize macOS, Android, and iOS, with plans for additional platforms in future releases.",

    "footer.contact": "Contact: glorymint@gmail.com",
    "footer.copyright": "© 2026 UrlCut. All rights reserved."
  }
};

// ==========================================================================
// 2. Language State Management
// ==========================================================================
const PREFERENCE_KEY = "urlcut-language";
let currentLanguage = getInitialLanguage();

function getInitialLanguage() {
  const saved = localStorage.getItem(PREFERENCE_KEY);
  if (saved && messages[saved]) return saved;
  return navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en";
}

function setLanguage(lang) {
  if (!messages[lang]) return;
  currentLanguage = lang;
  const dict = messages[lang];

  // Update text elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = dict[key];
    if (value !== undefined) {
      if (el.tagName === "TITLE" || el.dataset.i18n === "hero.title") {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    }
  });

  // Update ARIA labels
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.dataset.i18nAriaLabel;
    const value = dict[key];
    if (value) el.setAttribute("aria-label", value);
  });

  document.documentElement.lang = lang;
  document.querySelectorAll("[data-language]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.language === lang));
  });

  localStorage.setItem(PREFERENCE_KEY, lang);

  // Refresh dynamic screenshot gallery for current language
  renderScreenshotGallery();
}

document.querySelectorAll("[data-language]").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.language));
});

// ==========================================================================
// 3. Live URL Cleaner Engine Simulator
// ==========================================================================
const SAMPLE_URLS = {
  smartstore: "https://smartstore.naver.com/shop/products/123456?NaPm=ct%3Dl5v9z0...&utm_source=naver&utm_medium=pcs&utm_campaign=shop_campaign",
  youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&si=AbCdEfGhIjKlMnOp&feature=shared",
  coupang: "https://www.coupang.com/vp/products/987654321?itemId=12345678&vendorItemId=87654321&src=1042503&spec=10304982&addtag=400&ctag=987654321&lptag=P987654321&itime=20260815",
  instagram: "https://www.instagram.com/reel/C1234567890/?igsh=MWZ4NmYxY2R0Zg==&utm_source=ig_web_copy_link"
};

const TRACKING_PARAMS = [
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "utm_id",
  "NaPm", "si", "feature", "igsh", "igshid", "fbclid", "gclid", "gclsrc",
  "src", "spec", "addtag", "ctag", "lptag", "itime", "ref", "referrer", "spm", "_hsenc"
];

function cleanUrl(rawUrlString) {
  try {
    const parsed = new URL(rawUrlString);
    let removedCount = 0;
    const keysToDelete = [];

    parsed.searchParams.forEach((_, key) => {
      const isTracking = TRACKING_PARAMS.some(
        (param) => key === param || key.startsWith("utm_")
      );
      if (isTracking) {
        keysToDelete.push(key);
      }
    });

    keysToDelete.forEach((key) => {
      parsed.searchParams.delete(key);
      removedCount++;
    });

    return {
      cleaned: parsed.toString().replace(/\?$/, ""),
      removedCount
    };
  } catch (e) {
    return {
      cleaned: rawUrlString,
      removedCount: 0
    };
  }
}

function processCleanerDemo(urlVal) {
  const inputEl = document.getElementById("raw-url-input");
  const beforeTextEl = document.getElementById("before-url-text");
  const afterTextEl = document.getElementById("after-url-text");
  const badgeEl = document.getElementById("removed-badge");

  if (!urlVal) urlVal = inputEl.value;
  inputEl.value = urlVal;

  const result = cleanUrl(urlVal);

  beforeTextEl.textContent = urlVal;
  afterTextEl.textContent = result.cleaned;

  const templateMsg = messages[currentLanguage]["cleaner.removedCount"] || "Removed {count} params";
  badgeEl.textContent = templateMsg.replace("{count}", result.removedCount);
}

// Attach event listeners for Cleaner Demo
document.querySelectorAll(".pill-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelectorAll(".pill-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const sampleKey = btn.dataset.sample;
    if (SAMPLE_URLS[sampleKey]) {
      processCleanerDemo(SAMPLE_URLS[sampleKey]);
    }
  });
});

document.getElementById("cleaner-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = document.getElementById("raw-url-input").value;
  processCleanerDemo(inputVal);
});

document.getElementById("raw-url-input")?.addEventListener("input", (e) => {
  processCleanerDemo(e.target.value);
});

document.getElementById("btn-copy-url")?.addEventListener("click", () => {
  const afterText = document.getElementById("after-url-text").textContent;
  if (!afterText) return;
  navigator.clipboard.writeText(afterText).then(() => {
    const copyBtn = document.getElementById("btn-copy-url");
    const originalText = copyBtn.textContent;
    copyBtn.textContent = messages[currentLanguage]["cleaner.copied"] || "Copied!";
    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 2000);
  });
});

// Initial demo run
processCleanerDemo(SAMPLE_URLS.smartstore);

// ==========================================================================
// 4. App Screenshot Showcase Gallery Controller
// ==========================================================================
let currentPlatform = "macos";

const SCREENSHOT_MANIFEST = {
  macos: Array.from({ length: 10 }, (_, i) => ({
    ko: `assets/macos/mac_screenshot_ko_${i + 1}.png`,
    en: `assets/macos/mac_screenshot_en_${i + 1}.png`
  })),
  iOS: [
    { ko: "assets/iOS/screenshot_ko.png", en: "assets/iOS/screenshot_en.png" },
    ...Array.from({ length: 6 }, (_, i) => ({
      ko: `assets/iOS/screenshot_ko_${i + 1}.png`,
      en: `assets/iOS/screenshot_en_${i + 1}.png`
    }))
  ],
  Android: Array.from({ length: 6 }, (_, i) => ({
    ko: `assets/Android/play_store_screenshot_ko_${i + 1}.png`,
    en: `assets/Android/play_store_screenshot_en_${i + 1}.png`
  }))
};

function renderScreenshotGallery() {
  const trackEl = document.getElementById("gallery-track");
  const dotsEl = document.getElementById("gallery-dots");
  if (!trackEl || !dotsEl) return;

  const items = SCREENSHOT_MANIFEST[currentPlatform] || [];
  const langKey = currentLanguage === "ko" ? "ko" : "en";

  trackEl.innerHTML = "";
  dotsEl.innerHTML = "";

  items.forEach((item, index) => {
    const imgSrc = item[langKey];

    // Create card element
    const card = document.createElement("div");
    card.className = `screenshot-card ${currentPlatform === "macos" ? "macos" : "mobile"}`;
    card.innerHTML = `<img src="${imgSrc}" alt="UrlCut ${currentPlatform} screenshot ${index + 1}" loading="lazy" />`;
    trackEl.appendChild(card);

    // Create pagination dot
    const dot = document.createElement("div");
    dot.className = `gallery-dot ${index === 0 ? "active" : ""}`;
    dot.addEventListener("click", () => {
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    });
    dotsEl.appendChild(dot);
  });
}

// Platform Tabs Event Listeners
document.querySelectorAll(".tab-btn").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    currentPlatform = tab.dataset.platform;
    renderScreenshotGallery();
  });
});

// Gallery Scroll Navigation
document.getElementById("btn-gallery-prev")?.addEventListener("click", () => {
  const trackEl = document.getElementById("gallery-track");
  if (trackEl) trackEl.scrollBy({ left: -320, behavior: "smooth" });
});

document.getElementById("btn-gallery-next")?.addEventListener("click", () => {
  const trackEl = document.getElementById("gallery-track");
  if (trackEl) trackEl.scrollBy({ left: 320, behavior: "smooth" });
});

// Sync scroll position to dots
document.getElementById("gallery-track")?.addEventListener("scroll", () => {
  const trackEl = document.getElementById("gallery-track");
  const dots = document.querySelectorAll(".gallery-dot");
  if (!trackEl || !dots.length) return;

  const scrollLeft = trackEl.scrollLeft;
  const itemWidth = trackEl.firstElementChild ? trackEl.firstElementChild.offsetWidth + 20 : 320;
  const activeIndex = Math.round(scrollLeft / itemWidth);

  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === activeIndex);
  });
});

// Initial gallery render
renderScreenshotGallery();

// ==========================================================================
// 5. Mobile Navigation & Accordion Controls
// ==========================================================================
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("#primary-navigation");

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("is-open", !isOpen);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  });
});

// Single-open accordion logic for FAQ
document.querySelectorAll(".faq-container details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll(".faq-container details").forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

// Initialize Language on DOM Load
setLanguage(currentLanguage);
