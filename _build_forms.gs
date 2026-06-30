function buildICISForms() {
  var consent = "I agree that the research team (Dr. Elena Luchkina and the ECCL Lab) may contact me by email to follow up on the question or comment I've submitted.";
  var parts = ["Background", "Method", "Results", "Conclusions", "References", "General"];

  // ---------- POSTER 1 ----------
  var f1 = FormApp.create("ICIS 2026 · Learning \"Same\" and \"Different\" in Infancy — Questions & Comments");
  f1.setDescription(
    "Learning abstract relational terms in infancy based on cross-situational contrastive labeling\n" +
    "Lanlin Su, Elena Luchkina, & Elizabeth Spelke  ·  UT Dallas; Harvard University\n\n" +
    "Thank you for stopping by our poster. If you have a question or comment, please leave it below and we'll be glad to follow up by email.\n\n" +
    "Download this poster: https://github.com/Susuu-123/icis-2026-posters/blob/master/Su_etal_ICIS2026_same-different.pdf"
  );
  f1.setCollectEmail(false);
  f1.setConfirmationMessage(
    "Thank you for your interest in our work and for taking the time to reach out. We've received your question, and a member of the Early Cognition and Communication Lab will follow up by email if a response would be helpful. We're grateful for your engagement with this research — and we hope you enjoy the rest of ICIS 2026.\n— Lanlin Su & the ECCL Lab, UT Dallas"
  );
  addFields_(f1, consent, parts);
  var ss1 = SpreadsheetApp.create("ICIS 2026 – Poster 1 (Same-Different) responses");
  f1.setDestination(FormApp.DestinationType.SPREADSHEET, ss1.getId());

  // ---------- POSTER 2 ----------
  var f2 = FormApp.create("ICIS 2026 · How Infants Represent Unseen Objects — Questions & Comments");
  f2.setDescription(
    "How do 15-to-18-month-olds represent unseen objects when such objects are being named?\n" +
    "Lanlin Su, Elena Luchkina, Emily Yang, & Sandra Waxman  ·  UT Dallas; Northwestern University\n\n" +
    "Thank you for visiting our poster. If a question or comment came to mind, we'd love to hear it — please share it below and we'll be glad to follow up by email.\n\n" +
    "Download this poster: https://github.com/Susuu-123/icis-2026-posters/blob/master/Su_etal_ICIS2026_representing-the-unseen.pdf"
  );
  f2.setCollectEmail(false);
  f2.setConfirmationMessage(
    "Thank you for your interest in our work and for taking a moment to share your thoughts. We've received your question, and a member of the Early Cognition and Communication Lab will follow up by email if a response would be helpful. We truly appreciate your engagement with this research — and we hope you enjoy the rest of ICIS 2026.\n— Lanlin Su & the ECCL Lab, UT Dallas"
  );
  addFields_(f2, consent, parts);
  var ss2 = SpreadsheetApp.create("ICIS 2026 – Poster 2 (Unseen) responses");
  f2.setDestination(FormApp.DestinationType.SPREADSHEET, ss2.getId());

  // ---------- OUTPUT ----------
  var out =
    "\n===== ICIS FORMS BUILT =====\n" +
    "P1_EDIT="  + f1.getEditUrl() + "\n" +
    "P1_EMBED=" + f1.getPublishedUrl() + "?embedded=true\n" +
    "P1_LIVE="  + f1.getPublishedUrl() + "\n" +
    "P1_SHEET=" + ss1.getUrl() + "\n" +
    "P2_EDIT="  + f2.getEditUrl() + "\n" +
    "P2_EMBED=" + f2.getPublishedUrl() + "?embedded=true\n" +
    "P2_LIVE="  + f2.getPublishedUrl() + "\n" +
    "P2_SHEET=" + ss2.getUrl() + "\n" +
    "============================\n";
  Logger.log(out);
}

function addFields_(f, consent, parts) {
  f.addTextItem().setTitle("Name").setRequired(true);
  var email = f.addTextItem().setTitle("Email").setRequired(true);
  email.setValidation(
    FormApp.createTextValidation()
      .setHelpText("Please enter a valid email address.")
      .requireTextIsEmail()
      .build()
  );
  f.addTextItem().setTitle("Affiliation / Institution").setRequired(false);
  f.addParagraphTextItem().setTitle("Your question or comment").setRequired(true);
  f.addMultipleChoiceItem()
    .setTitle("Which part of the poster are you asking about?")
    .setChoiceValues(parts)
    .showOtherOption(false)
    .setRequired(false);
  f.addCheckboxItem().setTitle("Consent").setChoiceValues([consent]).setRequired(true);
}
