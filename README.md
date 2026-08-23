# VREasyHealthy Lead Funnel

Phase 1 foundation for a mobile-first health assessment funnel.

## Current flow
Traffic → Landing → Quiz → Lead Capture/Consent → Result Preview → LINE CTA

## Architecture
The first implementation is intentionally lightweight and keeps attribution, lead identity, quiz state, and event queue in a browser persistence layer so the UI can later move to an API/database without changing the user journey.

## Current domain concepts
- Lead ID: `VR-YYYYMMDD-00001` (temporary Phase 1 local implementation; server-side sequencing is required before production)
- Session ID
- UTM source/medium/campaign/content/term
- Quiz questions and answers
- Service consent and optional marketing consent
- Event queue

## Event names
PAGE_VIEW, QUIZ_START, QUESTION_VIEW, QUESTION_ANSWER, QUIZ_COMPLETE, RESULT_VIEW, LINE_CLICK, REPORT_REQUEST

## Important Phase 1 limitation
This is a foundation, not production-ready CRM infrastructure. Lead IDs are locally generated, events are locally queued, LINE is currently a configurable-flow placeholder, and there is no server-side persistence yet. Google Sheets, AI profiling, n8n, LINE webhook matching, Admin, authentication, analytics server integrations, and PDPA data-subject workflows are Phase 2+.

## Next phases
1. Server/API + PostgreSQL/Supabase data access layer
2. Google Sheets CRM sync
3. AI profiling + dynamic lead scoring
4. LINE OA webhook and identity matching
5. n8n follow-up automation
6. Admin dashboard
7. GA4/Meta/TikTok analytics and consent controls
8. Security, retention, export/deletion workflows
9. End-to-end test suite and production hardening
