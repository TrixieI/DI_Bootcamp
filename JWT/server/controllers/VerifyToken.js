import jwt from "jsonwebtoken";

export const VerifyToken = (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  if (accessToken === null) return res.sendStatus(401);
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (error, decode) => {
    if (error) return res.sendStatus(403);
    let email = decode.email;
    let userId = decode.userId;
    next();
  });
};
