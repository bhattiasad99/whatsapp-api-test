import { OK_SUCCESS, UNKNOWN_SERVER_ERROR } from "../../../config/index.js";
import { failure, success } from "../../../utils/helpers/responses.js";
import twilio from "twilio";
import qrcode from "qrcode-generator";

export default async (req, res) => {
  try {
    const authToken = "829924a7537fa55722159764aeb981db";
    const accountSid = "ACc2d6d10cd0695a7b651449efdd3fc189";
    // const myPhoneNumber = "+14155238886";
    const myPhoneNumber = "+14155238886";

    const { recepientContact, body } = req.body;
    const client = twilio(accountSid, authToken);
    client.messages
      .create({
        body: `${body}`,
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
