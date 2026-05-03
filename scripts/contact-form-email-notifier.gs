function doPost(e) {
  try {
    var body = e && e.postData && e.postData.contents ? e.postData.contents : "{}";
    var data = JSON.parse(body);

    var recipient = data.notificationEmail || "onesydee@gmail.com";
    var submittedAt = data.submittedAt || new Date().toISOString();

    var subject = "New Contact Form Submission - King Judah Auto Detailing";
    var message = [
      "A new contact form was submitted.",
      "",
      "Name: " + (data.name || ""),
      "Email: " + (data.email || ""),
      "Phone: " + (data.phone || ""),
      "Vehicle: " + (data.vehicle || ""),
      "Vehicle Type: " + (data.carType || ""),
      "Package: " + (data.package || ""),
      "Submitted At (UTC): " + submittedAt,
      "",
      "Message:",
      (data.message || "")
    ].join("\n");

    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      body: message,
      replyTo: data.email || "",
      name: "King Judah Contact Form"
    });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}