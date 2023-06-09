import { OK_SUCCESS, UNKNOWN_SERVER_ERROR } from "../../../config/index.js";
import { failure, success } from "../../../utils/helpers/responses.js";

// API REQUEST
export default async (req, res) => {
  try {
    console.log(req.body);
    return success(req, res, OK_SUCCESS, "00094", undefined, undefined, {
      data: { ...req.body },
    });
  } catch (err) {
    return failure(req, res, UNKNOWN_SERVER_ERROR, "00008", err.message);
  }
};
