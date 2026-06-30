/**
 * ICIS 2026 Poster QR — auto-notify email (POSTER 1: Same / Different)
 *
 * HOW TO USE (only when you want email notifications — "Phase 2"):
 *   1. Open the Poster-1 responses Google Sheet → Extensions → Apps Script.
 *   2. Delete the default code, paste THIS file, Save.
 *   3. Triggers (clock icon) → Add Trigger → function: onFormSubmit,
 *      event source: From spreadsheet, event type: On form submit → Save → authorize.
 *   4. Submit one test response and confirm the email arrives.
 *   To turn notifications OFF again: just delete the trigger. The Sheet keeps saving.
 */
const POSTER_TITLE = "Learning abstract relational terms in infancy based on cross-situational contrastive labeling";
const NOTIFY_TO    = "elena.luchkina@utdallas.edu";
const SUBJECT_TAG  = "[ICIS 2026 · Same/Different poster]";

function onFormSubmit(e) {
  const v = e.namedValues;
  const get = (k) => (v[k] && v[k][0] ? v[k][0].trim() : "(not provided)");

  const name        = get("Name");
  const email       = get("Email");
  const affiliation = get("Affiliation / Institution");
  const comment     = get("Your question or comment");
  const part        = get("Which part of the poster are you asking about?");
  const submitted   = get("Timestamp");

  const subject = SUBJECT_TAG + " New question from " + name;

  const body =
    "You received a new question/comment from your ICIS 2026 poster.\n\n" +
    "Poster:          " + POSTER_TITLE + "\n" +
    "Submitted:       " + submitted + "\n\n" +
    "Name:            " + name + "\n" +
    "Email:           " + email + "\n" +
    "Affiliation:     " + affiliation + "\n" +
    "Poster section:  " + part + "\n\n" +
    "Question / comment:\n" + comment + "\n\n" +
    "— Reply directly to this email to respond to the visitor (Reply-To is set to their address).";

  MailApp.sendEmail({
    to: NOTIFY_TO,
    replyTo: (email.indexOf("@") > -1 ? email : NOTIFY_TO),
    subject: subject,
    body: body,
    name: "ICIS 2026 Poster QR"
  });
}
