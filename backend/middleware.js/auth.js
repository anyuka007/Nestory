import { verifyJwt } from "../controllers/authControllers.js";
import dotenv from "dotenv";
dotenv.config();

//ovaa funkcija ima uloga samo da go zacuva user id

export const authorize = (req, res, next) => {
  const token = req.cookies.jwt; //go zimam nadvor od cookie kutija

  if (!token) {
    return res.status(401).json({ message: "Unauthorized, token not found" });
  }

  try {
    const decodedToken = verifyJwt(token);
    //se zacuvuva vo req.user, ne kako do sega req.body

    // req.user = decodedToken; // attach user to request object
    req.user = { id: decodedToken.id };
  } catch (error) {
    console.log("Token verification failed:", error);
    return res
      .status(401)
      .json({ message: "Unauthorized, verification fails" });
  }

  next();
};
