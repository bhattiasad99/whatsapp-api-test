import { OK_SUCCESS, UNKNOWN_SERVER_ERROR } from "../../../config/index.js";
import { failure, success } from "../../../utils/helpers/responses.js";
import twilio from "twilio";
import qrcode from "qrcode-generator";

const test_obj = {
  name: "Asad Bhatti",
  email: "asad.bhatti@gmail.com",
  password_number: "12321312",
  category: "gold",
};

function generateQRCode(obj) {
  const qr = qrcode(0, "M");
  qr.addData(JSON.stringify(obj));
  qr.make();
  return qr.createDataURL();
}

export default async (req, res) => {
  try {
    const authToken = "829924a7537fa55722159764aeb981db";
    const accountSid = "ACc2d6d10cd0695a7b651449efdd3fc189";
    const myPhoneNumber = "+14155238886";
    const qrCodeDataURL = generateQRCode(test_obj);
    const { recepientContact } = req.body;
    const client = twilio(accountSid, authToken);
    client.messages
      .create({
        mediaUrl: [`${qrCodeDataURL}`],
        body: "QR CODE",
        from: `whatsapp:${myPhoneNumber}`,
        to: `whatsapp:${recepientContact}`,
      })
      .then((message) => console.log({ message }))
      .catch((error) => console.log(error));

    return success(req, res, OK_SUCCESS, "00094", "GETTING ALL DATA");
  } catch (err) {
    return failure(req, res, UNKNOWN_SERVER_ERROR, "00008", err.message);
  }
};
