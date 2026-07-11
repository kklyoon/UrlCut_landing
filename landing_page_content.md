# UrlCut Landing Page Content & Design Specification

This document contains the copy and design specifications for the **UrlCut** landing page. It is structured for an AI webpage generator to convert into a premium, responsive static website.

---

## 🎨 Design System Guide (For Webpage Generator)

To ensure the landing page reflects the actual app's premium visual brand, please implement the static website using the following styles:
* **Brand Logo Color**: `#0064ff` (Official Brand Blue - Pantone 2175C)
* **Primary Accent Color (UI)**: `#3182f6` (Optimistic Cerulean Blue - `blue500`)
* **Background Canvas**: `#ffffff` (Pure White)
* **Alternate Section Backgrounds / Surface**: `#f2f4f6` (`grey100`) or `#f9fafb` (`grey50`)
* **Text / Headings Color**: `#191f28` (`grey900` Charcoal Black)
* **Body Text / Descriptions Color**: `#4e5968` (`grey600` Muted Dark Gray)
* **Dividers / Borders**: `#e5e8eb` (`grey200` Light Gray)
* **Success Green** (For after-cleaning indicators): `#03b26c` (`green500`)
* **Error Red** (For tracker indicators / alerts): `#f04452` (`red500`)
* **Typography**: Modern Sans-serif (e.g., *Inter* or *Outfit* via Google Fonts)
  - Hero Display: Bold, large line-height (1.33)
* **Layout Radii & Shadows**:
  - Button Corner Radius: `16px` (Matches app button styling)
  - Card Corner Radius: `12px` (Standard Card) or `16px` (Featured Card)
  - Card Shadow: `0px 2px 8px rgba(0,0,0,0.08)` (Standard Shadow)

---

## 🚀 Landing Page Content (Copywriting)

### 1. 헤더 (Navigation Bar)
* **로고**: `UrlCut`
* **메뉴**:
  - 주요 기능 (Features)
  - 사용 방법 (How it Works)
  - 다운로드 (Download)
  - 자주 묻는 질문 (FAQ)
* **우측 버튼**: `macOS 앱 다운로드` (Primary Accent Button)

---

### 2. 히어로 영역 (Hero Section)
> **디자인 제안**: 깨끗한 흰색 배경에 중앙 정렬 레이아웃. 헤드라인은 크게 배치하고 아래에 부드러운 앱 화면 목업(Mockup) 일러스트가 놓이는 구성.

* **메인 헤드라인**: 
  > **지저분한 웹 주소는 그만!**  
  > **링크 공유의 시작과 끝을 깔끔하게, UrlCut**
* **서브 카피**:  
  쇼핑몰, 유튜브, 뉴스 기사 링크를 공유할 때 주소 뒤에 붙은 복잡하고 긴 광고 추적 코드를 자동으로 지워줍니다. 더 깔끔하고, 더 안전하게 링크를 공유하세요.
* **콜 투 액션 (CTA) 버튼**:
  - 📥 **macOS용 무료 다운로드** (Primary Blue 채우기 버튼)
  - 📱 **iOS & Android 출시 예정** (연한 그레이 테두리 버튼)

---

### 3. 링크 정제 비교 영역 (Interactive Link Cleaner Visual)
> **디자인 제안**: "전"과 "후"의 주소 카드를 나란히 배치하여 시각적 대비를 보여주는 인터랙션 컴포넌트 구성.

* **비교 타이틀**: **주소창의 불필요한 거품을 뺍니다**
* **정제 전 (Before)**:
  - 🔴 `https://smartstore.naver.com/shop/products/123456?NaPm=ct%3Dl5v...&utm_source=naver&utm_medium=pcs...`
  - *설명: 메신저 창을 가득 채우는 지저분하고 긴 마케팅 추적 코드*
* **정제 후 (After)**:
  - 🟢 `https://smartstore.naver.com/shop/products/123456`
  - *설명: 핵심 주소만 남아 깔끔하고 보기 편한 링크*

---

### 4. 주요 기능 소개 영역 (Key Features)
> **디자인 제안**: 2x2 그리드 카드 또는 지그재그 레이아웃으로 배치. 아이콘은 선형(Linear) 스타일의 부드러운 블루 계열 사용.

#### **Feature 1. 보내기 전에 터치 한 번으로 끝! (공유하기 연동)**
* **상세 설명**: 링크를 복사하고 앱을 열어서 붙여넣을 필요가 없습니다. 모바일이나 맥북에서 브라우저나 앱의 **'공유하기'** 버튼을 누르고 **UrlCut**을 선택하면 즉시 정제된 주소로 상대방에게 보낼 수 있습니다.

#### **Feature 2. 인스타그램 사진과 영상도 바로 저장 (미디어 다운로더)**
* **상세 설명**: 인스타그램 링크를 공유하면 사진이나 릴스 영상을 고화질 그대로 내 갤러리에 다운로드할 수 있습니다. 따로 다운로드 사이트를 찾아 헤매지 마세요.

#### **Feature 3. 로그인 없이, 인터넷이 안 되어도 기기 간 전송 (로컬 기기 동기화)**
* **상세 설명**: 복잡한 회원가입이나 클라우드 연결 없이도, 같은 와이파이 망에 연결된 내 맥북, 아이폰, 안드로이드 폰 간에 클릭 한 번으로 모아둔 링크를 바로 주고받을 수 있습니다.

#### **Feature 4. 기억하기 쉽게 나만의 폴더 정리 (링크 관리)**
* **상세 설명**: 정제된 링크를 폴더별로 나누어 저장해 두고 나중에 다시 찾아볼 수 있습니다. 각 주소마다 내가 알아보기 쉬운 제목으로 편집해 나만의 링크 북마크를 완성해 보세요.

---

### 5. 신뢰 및 보안 영역 (Privacy & Offline-First)
> **디자인 제안**: 부드러운 파란색이나 어두운 톤의 백그라운드 카드를 사용하여 신뢰감을 주는 영역.

* **타이틀**: **내 링크 데이터는 내 기기에 안전하게**
* **설명**: 
  - **100% 프라이버시 보호**: UrlCut은 사용자가 저장하고 공유하는 링크를 외부 서버에 전송하거나 저장하지 않습니다.
  - **오프라인 우선 (Offline-First)**: 모든 데이터는 내 스마트폰과 Mac 기기 내부 저장소에만 안전하게 보관되므로 유출 걱정 없이 안심하고 사용하실 수 있습니다.

---

### 6. 다운로드 영역 (Download Center)
> **디자인 제안**: 큰 카드 형태의 레이아웃. macOS는 다운로드 버튼을 활성화하고, iOS와 Android는 앱스토어 준비 중 뱃지로 시각화.

* **타이틀**: **지금 UrlCut을 시작해 보세요**
* **macOS**:
  - 버튼: `UrlCut for macOS 다운로드 (v1.0.6)`
  - *지원 사양: macOS 12.0 이상 지원*
* **iOS / Android**:
  - 뱃지: `App Store 출시 예정` / `Google Play 출시 예정`

---

### 7. 자주 묻는 질문 (FAQ)
> **디자인 제안**: 아코디언(Accordion) 스타일의 UI를 사용하여 사용자가 질문을 누르면 답변이 아래로 슬라이드 다운되는 구성.

* **Q1. 링크의 뒷부분을 지우면 링크가 깨지거나 작동하지 않나요?**
  - **A**. 아닙니다. 상품 번호나 페이지 정보 등 접속에 꼭 필요한 주소는 안전하게 유지하고, 광고나 방문 추적을 위해 덧붙여진 불필요한 정보만 골라 제거하기 때문에 안전하게 작동합니다.
* **Q2. 로그인이나 회원가입이 필요한가요?**
  - **A**. 전혀 필요하지 않습니다. 설치 후 즉시 사용 가능하며 어떠한 개인정보도 요구하지 않습니다.
* **Q3. 윈도우(Windows) 버전도 지원하나요?**
  - **A**. 현재는 macOS, Android, iOS 플랫폼을 우선 지원하고 있으며, 추후 지원 플랫폼을 확장할 예정입니다.

---

### 8. 푸터 (Footer)
* 로고: `UrlCut`
* 이메일 문의: `glorymint@gmail.com`
* 저작권 표시: `© 2026 UrlCut. All rights reserved.`
