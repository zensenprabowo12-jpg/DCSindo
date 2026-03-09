// ============================================================
// Google Apps Script - Support Ticket Handler
// Paste this entire file into your Google Apps Script editor
// and deploy as a Web App (Execute as: Me, Access: Anyone)
// ============================================================

// ─── CONFIG: ubah email admin di sini ───────────────────────
var ADMIN_EMAIL = "admin@example.com";
var SPREADSHEET_ID = "1Qu1YmrAeHo4IxHMg4ltkUidjYFvbux2-eJJZtR6025c";
var SHEET_NAME = "Sheet1"; // ganti jika nama sheet berbeda
// ────────────────────────────────────────────────────────────

function doPost(e) {
  try {
    var params = e.parameter;

    // Honeypot check
    if (params.website && params.website !== "") {
      return jsonResponse({ status: "ignored" });
    }

    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);

    // Create header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Ticket ID", "Date", "Email", "Phone",
        "Subject", "Product", "Message", "Status"
      ]);
    }

    // Generate Ticket ID: TKT-YYYYMMDD-XXXXX
    var now = new Date();
    var dateStr = Utilities.formatDate(now, Session.getScriptTimeZone(), "yyyyMMdd");
    var rand = Math.floor(10000 + Math.random() * 90000).toString();
    var ticketId = "TKT-" + dateStr + "-" + rand;

    var dateFormatted = Utilities.formatDate(now, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");

    var email   = params.email   || "";
    var phone   = params.phone   || "";
    var subject = params.subject || "";
    var product = params.product || "";
    var message = params.message || "";

    // Save to spreadsheet
    sheet.appendRow([
      ticketId,
      dateFormatted,
      email,
      phone,
      subject,
      product,
      message,
      "OPEN"
    ]);

    // ── Email to Admin ──────────────────────────────────────
    var adminBody =
      "New Support Ticket Received\n\n" +
      "Ticket ID : " + ticketId + "\n" +
      "Date      : " + dateFormatted + "\n" +
      "Email     : " + email + "\n" +
      "Phone     : " + phone + "\n" +
      "Subject   : " + subject + "\n" +
      "Product   : " + product + "\n\n" +
      "Message:\n" + message + "\n\n" +
      "---\nStatus: OPEN";

    MailApp.sendEmail({
      to: ADMIN_EMAIL,
      subject: "[Support] New Ticket " + ticketId + " - " + subject,
      body: adminBody
    });

    // ── Auto-reply to User ──────────────────────────────────
    if (email) {
      var userBody =
        "Hello,\n\n" +
        "Thank you for contacting our support team.\n" +
        "We have received your request and will get back to you shortly.\n\n" +
        "Your Ticket ID: " + ticketId + "\n\n" +
        "Details:\n" +
        "Subject : " + subject + "\n" +
        "Product : " + product + "\n" +
        "Message : " + message + "\n\n" +
        "Please keep this Ticket ID for future reference.\n\n" +
        "Best regards,\nSupport Team";

      MailApp.sendEmail({
        to: email,
        subject: "[Support] Your Ticket Has Been Created - " + ticketId,
        body: userBody
      });
    }

    return jsonResponse({ status: "success", ticketId: ticketId });

  } catch (err) {
    return jsonResponse({ status: "error", message: err.message });
  }
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
