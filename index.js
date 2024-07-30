const express = require("express");
const nodemailer = require("nodemailer");
// dalle pull req accept kar
const app = express();

const transpoter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: false,
  auth: {
    user: "kamalbisht819@gmail.com",
    pass: "wtsm fesn dspb fcoi",
  },
});

app.get("/", (req, res) => {
  const mailOptions = {
    to: "pajay7686@gmail.com",
    from: "kamalbisht819@gmail.com",
    subject: "Test Mail",
    // text: "welcome to the test mail server",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Mail</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            padding: 20px;
            border: 1px solid #dddddd;
            border-radius: 5px;
            background-color: #f9f9f9;
            max-width: 600px;
            margin: auto;
        }
        .header {
            text-align: center;
            padding-bottom: 10px;
        }
        .content {
            text-align: left;
        }
        .footer {
            text-align: center;
            padding-top: 10px;
            font-size: 0.8em;
            color: #666666;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to the Test Mail Server</h1>
        </div>
        <div class="content">
            <p>Dear Bharat,</p>
            <p>Welcome to our test mail server. This email is sent using Nodemailer and contains HTML content for better formatting and styling.</p>
            <p>We hope you find this example helpful.</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Test Mail Server. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`,
  };

  transpoter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "Mail not sent", error: err.message });
    } else {
      console.log(info);
      res.json({ success: true, message: "Mail sent successfully", info });
    }
  });
});

const port = 8000;

app.listen(port, () => {
  console.log("listening on port at " + port);
});
