import dbConnect from "../../../util/mongo";
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();


if (method === "POST") {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email, password });
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

}
