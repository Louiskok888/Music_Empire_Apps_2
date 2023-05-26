import dbConnect from "../../../util/mongo";
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

  //   app.post("/api/login", async (req, res) => {
  //     const { email, password } = req.body;
  //     const userDoc = await User.findOne({ email });
  //     if (userDoc) {
  //       const passOk = bcrypt.compareSync(password, userDoc.password);
  //       if (passOk) {
  //         jwt.sign(
  //           {
  //             email: userDoc.email,
  //             id: userDoc._id,
  //           },
  //           process.env.jwtSecret,
  //           {},
  //           (err, token) => {
  //             if (err) throw err;
  //             res.cookie("token", token).json(userDoc);
  //           }
  //         );
  //       } else {
  //         res.status(422).json("pass not ok");
  //       }
  //     } else {
  //       res.json("not found");
  //     }
  //   });

