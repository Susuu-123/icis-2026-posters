# ICIS 2026 Poster QR — Setup & Links (everything is live)

Built and tested end-to-end on 2026-06-30. Audience flow:
**Scan QR → branded landing page → embedded Google Form → response saved to Google Sheet → (optional) email to Dr. Luchkina.**

## Poster 1 — "Same / Different"
- **QR code (print this):** `qr/QR_Poster1_SameDiff.svg` (vector, best for print) or `.png`
- **Landing page:** https://susuu-123.github.io/icis-2026-posters/poster1.html
- **Form (live):** https://docs.google.com/forms/d/e/1FAIpQLSf60k_W-wB7529LJjCtBqZc_dtjT4xlI1qdT4QkkZND2DSCyQ/viewform
- **Form (edit):** https://docs.google.com/forms/d/1ZHx-MWnYwa5hLn3LMGJZo2DeE0xS9NfmYwy8qgFh7F8/edit
- **Responses sheet:** https://docs.google.com/spreadsheets/d/1CNLvLf-4XjDYzIuGU4lxescuWVLx3s2cmH_sjXaumVA/edit
- **Poster PDF:** https://github.com/Susuu-123/icis-2026-posters/blob/master/Su_etal_ICIS2026_same-different.pdf

## Poster 2 — "Representing the Unseen"
- **QR code (print this):** `qr/QR_Poster2_Unseen.svg` or `.png`
- **Landing page:** https://susuu-123.github.io/icis-2026-posters/poster2.html
- **Form (live):** https://docs.google.com/forms/d/e/1FAIpQLSfwMLoYQbjRhwN9hO9E2kHTKc7NxebRQY7jRuuBCUYeYHVM4A/viewform
- **Form (edit):** https://docs.google.com/forms/d/1R0QK1GzzMR_Ao3NPcua4fKgdFY4RrbIvUQAmuXttf20/edit
- **Responses sheet:** https://docs.google.com/spreadsheets/d/1BkCTEzOQBBsy9SpVoD7ddHynR_IyuLekH24Fyn6AJUA/edit
- **Poster PDF:** https://github.com/Susuu-123/icis-2026-posters/blob/master/Su_etal_ICIS2026_representing-the-unseen.pdf

## Form fields (both forms)
Name (required) · Email (required, validated) · Affiliation / Institution (optional) ·
Your question or comment (required) · Which part of the poster are you asking about? (optional) ·
Consent checkbox (required).

## Current status: Sheet-only (no email)
Responses are saved to the sheets only — no email is sent (per your choice).

## Phase 2 — turn on email notifications to Dr. Luchkina (optional, later)
1. Open the responses **Google Sheet** for a poster → **Extensions → Apps Script**.
2. Paste the matching file: `apps-script-poster1.gs` (Poster 1) or `apps-script-poster2.gs` (Poster 2).
3. **Triggers** (clock icon) → **Add Trigger** → function `onFormSubmit`,
   source **From spreadsheet**, type **On form submit** → Save → authorize.
4. Submit one test and confirm the email arrives. Reply-To is set to the visitor's email.
5. To turn off again: delete the trigger. The sheet keeps saving.

## Notes
- A standalone Apps Script project named "Untitled project" was used only to *build* these
  forms/sheets. You can delete it from script.google.com — it is not needed to run anything.
- One empty stray "Untitled form" may exist in your Drive from setup; safe to delete.
