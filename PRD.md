# PRODUCT REQUIREMENTS DOCUMENT

## EXECUTIVE SUMMARY

**Product Name:** Aging at Home Hub

**Product Vision:** Aging at Home Hub empowers older adults, caregivers, and adult children to make informed decisions about aging in place by providing personalized home safety recommendations through a friendly, accessible quiz experience. The platform delivers immediate, actionable guidance connected to verified Orange County resources, reducing overwhelm and enabling confident next steps toward safer home environments.

**Core Purpose:** Solves the problem of information overload and uncertainty when planning for aging in place. Users often don't know where to start, what questions to ask, or which resources are trustworthy. The Hub provides a clear entry point, personalized guidance, and direct connections to local help in under 5 minutes.

**Target Users:** 
- **Primary:** Older adults (65+) planning to age in their current homes
- **Secondary:** Adult children and caregivers researching safety improvements for aging family members

**Key MVP Features:**
- Guided Home Safety Quiz (5-7 questions) - User-Generated Content
- Personalized Safety Report - System Data
- Pre-loaded Orange County Resource Cards - System Data
- Cost Range Indicators - Configuration
- Who to Ask & What to Ask Guidance - System Data
- Shareable Results Link - System Data

**Platform:** Web application (responsive design, accessible via browser on desktop, tablet, and mobile devices)

**Complexity Assessment:** Simple
- State Management: Local (localStorage for quiz responses and results)
- External Integrations: None required for MVP
- Business Logic: Simple (quiz logic with predefined mappings to recommendations)

**MVP Success Criteria:**
- 80% of users complete the full quiz workflow
- Users generate personalized safety reports with 3-5 recommendations
- Shareable links work correctly across devices
- Responsive design functions on mobile, tablet, and desktop
- All resource cards display correctly with filtering

---

## 1. USERS & PERSONAS

**Primary Persona:**
- **Name:** Margaret, the Proactive Planner (72 years old)
- **Context:** Recently widowed, living alone in a two-story home she's owned for 40 years. Wants to stay independent but knows she needs to make some changes after a minor fall last month. Tech-comfortable (uses email, Facebook) but prefers simple, clear interfaces.
- **Goals:** Understand what home modifications are most important, find trustworthy local resources without endless research, get cost estimates to plan her budget, share findings with her daughter who lives out of state
- **Pain Points:** Overwhelmed by generic online advice, unsure which changes to prioritize, doesn't know who to call or what questions to ask, worried about being taken advantage of by contractors

**Secondary Persona:**
- **Name:** David, the Concerned Adult Child (48 years old)
- **Context:** Lives 50 miles away from his 78-year-old father who refuses to move. Wants to help make the home safer but doesn't know where to start. Needs concrete recommendations he can discuss with his dad and implement together.
- **Goals:** Get specific, actionable recommendations based on his father's situation, find reputable local resources quickly, have conversation starters to discuss changes without seeming pushy
- **Pain Points:** Limited time for research, doesn't know local Orange County resources, wants evidence-based recommendations his father will trust

---

## 2. FUNCTIONAL REQUIREMENTS

### 2.1 Core MVP Features (Priority 0)

**FR-001: Guided Home Safety Quiz**
- **Description:** Multi-step questionnaire (5-7 questions) that gathers information about the user's home environment, mobility, and safety concerns through conversational prompts with button-based selections
- **Entity Type:** User-Generated Content
- **Operations:** Create (take quiz), View (review answers), Edit (retake quiz), List (see quiz history in localStorage)
- **Key Rules:** All questions required before generating report; answers stored in localStorage; users can retake quiz anytime to update recommendations
- **Acceptance:** Users complete quiz in 3-5 minutes, see progress indicator, can navigate back to change answers, and receive immediate report upon completion

**FR-002: Personalized Safety Report**
- **Description:** Dynamic report displaying top 3-5 home safety recommendations based on quiz responses, grouped by implementation type (DIY, low-cost, professional) with priority indicators
- **Entity Type:** System Data
- **Operations:** View (see generated report), Export (download as PDF or print)
- **Key Rules:** Report regenerates when quiz is retaken; recommendations ranked by urgency based on quiz answers; each recommendation includes description, cost range, and related resources
- **Acceptance:** Users see personalized report immediately after quiz completion with clear action items and can export results for offline reference

**FR-003: Pre-loaded Orange County Resource Cards**
- **Description:** Curated database of 15-20 verified local resources (Area Agencies on Aging, occupational therapists, contractors, funding programs) with contact information and service descriptions
- **Entity Type:** System Data
- **Operations:** View (browse resources), List (see all resources), Search (filter by category or service type)
- **Key Rules:** Resources pre-loaded as static JSON data; filtered display based on recommendation type; each card shows name, contact info, services, and cost range
- **Acceptance:** Users can browse all resources, filter by category (funding, contractors, support services), and see relevant resources highlighted in their personalized report

**FR-004: Cost Range Indicators**
- **Description:** Visual cost indicators ($ to $$$) displayed on each recommendation and resource card to set budget expectations
- **Entity Type:** Configuration
- **Operations:** View (see cost ranges on recommendations and resources)
- **Key Rules:** $ = Under $100 (DIY/low-cost), $$ = $100-$1,000 (moderate investment), $$$ = $1,000+ (professional installation); cost ranges pre-assigned in data
- **Acceptance:** Users see clear cost indicators on all recommendations and resources, understand budget implications at a glance

**FR-005: Who to Ask & What to Ask Guidance**
- **Description:** Expandable guidance sections providing conversation starters and key questions for each resource type (occupational therapists, contractors, Area Agencies on Aging)
- **Entity Type:** System Data
- **Operations:** View (read guidance), List (see all guidance topics)
- **Key Rules:** Pre-written questions tailored to each resource category; guidance appears contextually with related recommendations
- **Acceptance:** Users can expand guidance cards to see specific questions to ask professionals, feel empowered to initiate conversations with service providers

**FR-006: Shareable Results Link**
- **Description:** Unique URL generation that encodes quiz results and recommendations, allowing users to share their personalized report with family members or caregivers
- **Entity Type:** System Data
- **Operations:** Create (generate shareable link), View (access shared report via link), Copy (copy link to clipboard)
- **Key Rules:** Link encodes quiz responses in URL parameters; results persist in localStorage for original user; shared links display read-only report
- **Acceptance:** Users can generate and copy shareable link, recipients can view full report without taking quiz, links work across devices and browsers

**FR-007: User Profile & Quiz History**
- **Description:** Basic user profile storing quiz history and saved reports in localStorage for returning users
- **Entity Type:** Configuration
- **Operations:** Create (first quiz completion), View (see profile and history), Edit (update name/email for sharing), Delete (clear all data)
- **Key Rules:** Optional name/email for personalization; quiz history shows date taken and summary; users can clear all data from browser
- **Acceptance:** Returning users see their previous quiz results, can retake quiz to update recommendations, and can manage their stored data

---

## 3. USER WORKFLOWS

### 3.1 Primary Workflow: Complete Quiz and Receive Personalized Recommendations

**Trigger:** User clicks "Get Started" button on landing page
**Outcome:** User receives personalized safety report with 3-5 actionable recommendations and relevant Orange County resources

**Steps:**
1. User lands on homepage, reads brief value proposition, clicks "Get Started" button
2. System displays first quiz question with 3-4 button options and progress indicator (Question 1 of 7)
3. User selects answer, system advances to next question with smooth transition
4. User completes all 7 questions, system stores responses in localStorage
5. System generates personalized report by matching quiz answers to recommendation logic, displays top 3-5 recommendations grouped by type (DIY, low-cost, professional)
6. User reviews recommendations with cost indicators, expands resource cards to see contact details
7. User clicks "Share My Results" to generate shareable link, copies link to send to family member

### 3.2 Key Supporting Workflows

**Retake Quiz:** User clicks "Retake Quiz" button on report page → system clears previous answers → user completes quiz again → sees updated recommendations

**Filter Resources:** User navigates to Resources section → applies category filter (Funding, Contractors, Support Services) → sees filtered resource cards in real-time

**Expand Guidance:** User clicks "What to Ask" button on recommendation card → guidance section expands → user reads pre-written questions for that resource type

**Export Report:** User clicks "Download Report" button → system generates PDF of personalized recommendations → user saves file for offline reference

**Access Shared Link:** Recipient clicks shared URL → system decodes quiz results from URL parameters → displays read-only report with recommendations and resources

---

## 4. BUSINESS RULES

### 4.1 Entity Lifecycle Rules

| Entity | Type | Who Creates | Who Edits | Who Deletes | Delete Action |
|--------|------|-------------|-----------|-------------|---------------|
| Quiz Response | User-Generated | User | User (retake) | User | Soft delete (clear localStorage) |
| Safety Report | System Data | System | System (regenerate) | User | Soft delete (clear localStorage) |
| Resource Card | System Data | Admin (pre-loaded) | None | None | Not allowed |
| Cost Indicator | Configuration | Admin (pre-assigned) | None | None | Not allowed |
| Guidance Content | System Data | Admin (pre-written) | None | None | Not allowed |
| Shareable Link | System Data | System | None | User | Expires after 90 days |
| User Profile | Configuration | User | User | User | Hard delete (clear all data) |

### 4.2 Data Validation Rules

| Entity | Required Fields | Key Constraints |
|--------|-----------------|-----------------|
| Quiz Response | all 7 questions | Must select one option per question |
| Safety Report | quiz responses | Minimum 3 recommendations, maximum 5 |
| Resource Card | name, contact, category | Phone or website required |
| Shareable Link | encoded quiz data | URL length under 2000 characters |
| User Profile | none (optional) | Email format if provided |

### 4.3 Access & Process Rules
- Users can only view/edit their own quiz responses and reports stored in their browser's localStorage
- Shareable links are read-only; recipients cannot modify the original user's quiz responses
- Resource cards are static data; users cannot add, edit, or delete resources in MVP
- Quiz must be completed in sequence; users cannot skip questions but can navigate back to change answers
- Reports regenerate automatically when quiz is retaken; previous reports are overwritten
- Shared links expire after 90 days of inactivity to prevent stale data
- Users can clear all their data from localStorage at any time via profile settings

---

## 5. DATA REQUIREMENTS

### 5.1 Core Entities

**QuizResponse**
- **Type:** User-Generated Content | **Storage:** localStorage
- **Key Fields:** id, userId (optional), responses (array of 7 answers), completedAt, updatedAt
- **Relationships:** generates one SafetyReport
- **Lifecycle:** Create (take quiz), View (review answers), Edit (retake quiz), Delete (clear data)

**SafetyReport**
- **Type:** System Data | **Storage:** localStorage (generated dynamically)
- **Key Fields:** id, quizResponseId, recommendations (array of 3-5 items), generatedAt, shareableLink
- **Relationships:** belongs to QuizResponse, references multiple ResourceCards
- **Lifecycle:** View (see report), Export (download PDF), Share (generate link)

**Recommendation**
- **Type:** System Data | **Storage:** Static JSON (pre-defined logic)
- **Key Fields:** id, title, description, priority, costRange, category (DIY/low-cost/professional), relatedResources (array of resource IDs), guidanceId
- **Relationships:** references multiple ResourceCards, references one GuidanceContent
- **Lifecycle:** View only (displayed in reports based on quiz logic)

**ResourceCard**
- **Type:** System Data | **Storage:** Static JSON (pre-loaded)
- **Key Fields:** id, name, category, contactPhone, contactEmail, website, address, servicesOffered, costRange, description
- **Relationships:** referenced by multiple Recommendations
- **Lifecycle:** View (browse resources), List (see all), Search (filter by category)

**GuidanceContent**
- **Type:** System Data | **Storage:** Static JSON (pre-written)
- **Key Fields:** id, resourceType, whoToAsk, questionsToAsk (array of strings), tipsForConversation
- **Relationships:** referenced by Recommendations
- **Lifecycle:** View only (expandable sections in UI)

**UserProfile**
- **Type:** Configuration | **Storage:** localStorage
- **Key Fields:** id, name (optional), email (optional), quizHistory (array of quiz IDs), createdAt, preferences
- **Relationships:** has many QuizResponses
- **Lifecycle:** Create (first quiz), View (see profile), Edit (update info), Delete (clear all data)

### 5.2 Data Storage Strategy
- **Primary Storage:** localStorage for user-generated quiz responses, reports, and profile data
- **Capacity:** localStorage ~5-10MB per domain (sufficient for quiz history and reports)
- **Persistence:** Data persists across sessions until user clears browser data or explicitly deletes profile
- **Static Data:** Resource cards, recommendations logic, and guidance content stored as JSON files loaded at runtime
- **Audit Fields:** All entities include createdAt and updatedAt timestamps for tracking

---

## 6. INTEGRATION REQUIREMENTS

No external integrations required for MVP. All functionality operates client-side with static data and localStorage.

---

## 7. VIEWS & NAVIGATION

### 7.1 Primary Views

**Landing Page** (`/`) - Hero section with value proposition, "Get Started" CTA button, brief explanation of how it works (3 steps), trust indicators (e.g., "Based on occupational therapy best practices")

**Quiz View** (`/quiz`) - Multi-step form with one question per screen, large button options for answers, progress indicator (Question X of 7), back/next navigation, high-contrast design with large fonts

**Report View** (`/report`) - Personalized safety report with top 3-5 recommendations, each showing title, description, cost range, priority indicator, expandable "What to Ask" guidance, related resources section, "Share Results" and "Download Report" buttons

**Resources View** (`/resources`) - Grid of resource cards with category filters (All, Funding, Contractors, Support Services), search bar, each card showing name, contact info, services, cost range, expandable details

**Profile View** (`/profile`) - Optional name/email fields, quiz history with dates and summaries, "Retake Quiz" button, "Clear All Data" button, data privacy explanation

### 7.2 Navigation Structure

**Main Nav:** Home | Resources | My Profile
**Quiz Flow:** Linear progression with back button, exit to save progress
**Report Actions:** Share | Download | Retake Quiz | View All Resources
**Default Landing:** Landing page with "Get Started" CTA
**Mobile:** Hamburger menu, single-column layout, large touch targets (minimum 44x44px), simplified navigation

---

## 8. MVP SCOPE & CONSTRAINTS

### 8.1 MVP Success Definition

The MVP is successful when:
- ✅ Users complete the 7-question quiz in 3-5 minutes with clear progress indicators
- ✅ Personalized reports generate correctly with 3-5 recommendations based on quiz logic
- ✅ All 15-20 Orange County resource cards display with accurate contact information
- ✅ Shareable links encode quiz results and display read-only reports for recipients
- ✅ Responsive design works on mobile (iOS/Android browsers), tablet, and desktop
- ✅ High-contrast, large-font design meets basic accessibility standards
- ✅ Data persists in localStorage across sessions
- ✅ 80% of test users complete the full quiz workflow
- ✅ Users describe experience as "clear" and "trustworthy" in qualitative feedback

### 8.2 In Scope for MVP

Core features included:
- FR-001: Guided Home Safety Quiz (7 questions)
- FR-002: Personalized Safety Report (3-5 recommendations)
- FR-003: Pre-loaded Orange County Resource Cards (15-20 resources)
- FR-004: Cost Range Indicators ($ to $$$)
- FR-005: Who to Ask & What to Ask Guidance
- FR-006: Shareable Results Link
- FR-007: User Profile & Quiz History

Supporting functionality:
- Landing page with clear value proposition
- Quiz progress indicator and back navigation
- Report export as PDF
- Resource filtering by category
- Mobile-responsive design with accessibility features
- localStorage data persistence
- Basic error handling for incomplete quiz or failed link generation

### 8.3 Technical Constraints

- **Data Storage:** Browser localStorage (5-10MB limit, sufficient for quiz history and reports)
- **Concurrent Users:** No server-side limitations; each user's data isolated in their browser
- **Performance:** Page loads <2 seconds, instant quiz navigation, real-time report generation
- **Browser Support:** Chrome, Firefox, Safari, Edge (last 2 versions), iOS Safari, Android Chrome
- **Mobile:** Responsive design with touch-friendly buttons (44x44px minimum), works on screens 320px width and up
- **Offline:** Basic functionality via localStorage; no network required after initial page load
- **Accessibility:** High-contrast color scheme (WCAG AA minimum), large default fonts (18px body text), keyboard navigation support

### 8.4 Known Limitations

**For MVP:**
- Browser storage limits quiz history to approximately 50 quiz attempts per user before localStorage capacity issues
- No multi-device sync; quiz results only available on the device where quiz was taken (unless shared via link)
- No data backup; users must manually export reports if they clear browser data
- Shareable links expire after 90 days; no permanent storage of shared reports
- Static resource data; no ability for users to submit new resources or update existing ones
- No user accounts or authentication; profile data tied to browser localStorage only
- No analytics tracking; success metrics require manual user testing and feedback collection

**Future Enhancements:**
- Backend database for multi-device sync and permanent storage
- User accounts with authentication for secure data access
- Professional resource submission portal for verified providers
- AI-powered home safety scanning via photo uploads
- Partner integrations with Area Agencies on Aging for real-time resource updates
- Expanded resource coverage beyond Orange County
- Advanced analytics dashboard for tracking user engagement and outcomes

---

## 9. ASSUMPTIONS & DECISIONS

### 9.1 Platform Decisions
- **Type:** Web application (frontend-only, client-side logic)
- **Storage:** localStorage for all user data (quiz responses, reports, profile)
- **Auth:** No authentication required for MVP; optional name/email for personalization only
- **Deployment:** Static site hosting (e.g., Netlify, Vercel) for fast, free deployment

### 9.2 Entity Lifecycle Decisions

**QuizResponse:** Full CRUD + Clear data option
- **Reason:** User-generated content; users need ability to retake quiz and update answers, plus option to delete all data for privacy

**SafetyReport:** View + Export only (regenerates on quiz retake)
- **Reason:** System-generated data based on quiz logic; no manual editing needed, automatically updates when quiz is retaken

**ResourceCard:** View only (pre-loaded static data)
- **Reason:** Curated, verified resources maintained by admin; users cannot modify to ensure data quality and trustworthiness

**GuidanceContent:** View only (pre-written static data)
- **Reason:** Expert-written conversation starters; no user editing to maintain professional quality

**UserProfile:** Full CRUD + Clear all data
- **Reason:** Configuration data; users control their optional profile info and can delete everything for privacy

### 9.3 Key Assumptions

1. **Target users are comfortable with basic web browsing but need simplified, accessible interfaces**
   - Reasoning: Based on persona research (Margaret uses email and Facebook), we assume users can navigate a simple web app but need large fonts, high contrast, and clear CTAs. This informed the decision to use button-based quiz selections rather than text inputs and to prioritize mobile-responsive design.

2. **Users will complete the quiz in one session and want immediate results**
   - Reasoning: The product idea emphasizes "5 minutes" as a key value proposition. This informed the decision to limit the quiz to 7 questions maximum, use localStorage for instant report generation without server delays, and provide progress indicators to maintain engagement.

3. **Pre-loaded Orange County resources are sufficient for MVP validation**
   - Reasoning: The MVP validation hypothesis states users need to find the quiz-to-recommendations flow clear before investing in professional submissions and partner integrations. This informed the decision to use static JSON data for 15-20 curated resources rather than building a resource submission system in MVP.

4. **Shareable links enable family collaboration without requiring user accounts**
   - Reasoning: Secondary persona (David, the adult child) needs to share findings with his father. URL-encoded quiz results allow sharing without the complexity of user authentication, reducing development time and friction for users.

5. **Cost range indicators reduce overwhelm more than exact pricing**
   - Reasoning: Users (especially Margaret) are worried about being taken advantage of and need budget planning. Showing $ to $$$ ranges sets expectations without requiring constant price updates or complex estimation logic.

### 9.4 Clarification Q&A Summary

**Q:** Design & Accessibility - Do you have specific requirements for visual design, such as high-contrast color schemes, larger default font sizes, or specific "friendly" colors?
**A:** Decision left to PRD author
**Decision:** Implemented high-contrast color scheme (WCAG AA minimum), large default fonts (18px body text, 24px headings), warm, trustworthy color palette (blues and greens for trust, orange accents for warmth), and touch-friendly button sizes (44x44px minimum) to meet accessibility needs of older adult users.

**Q:** Quiz-to-Recommendation Logic - Can you provide specific examples of how quiz answers should map to recommendations?
**A:** Decision left to PRD author
**Decision:** Designed logic where quiz questions assess mobility (stairs, balance), home layout (bathroom safety, lighting), and support needs (living alone, caregiver availability). Answers map to recommendations via priority scoring: mobility issues → grab bars and stair safety (high priority), poor lighting → LED upgrades (medium priority), living alone → emergency response systems (high priority). Each recommendation references 2-3 relevant Orange County resources.

**Q:** Resource Data Structure - What specific data fields are essential for each resource card and what categories should be used for filtering?
**A:** Decision left to PRD author
**Decision:** Resource cards include: name, category (Funding, Contractors, Support Services), contactPhone, contactEmail, website, address, servicesOffered (array), costRange ($ to $$$), description. Filtering by three main categories: Funding (AAAs, grants), Contractors (OTs, home modification specialists), Support Services (meal delivery, transportation). Each resource tagged with relevant recommendation types for contextual display in reports.

**Q:** Sharing Functionality - Do you have a preference for how the shareable link is presented (e.g., "Copy Link" button, QR code, "Email this link" button)?
**A:** Decision left to PRD author
**Decision:** Implemented "Copy Link" button with visual confirmation (checkmark animation, "Link Copied!" message) as primary sharing method. This is simplest for users, works across all devices, and doesn't require email integration. Users can paste link into their preferred communication method (email, text, messaging apps). QR code generation deferred to future enhancement.

---

**PRD Complete - Ready for Development**
