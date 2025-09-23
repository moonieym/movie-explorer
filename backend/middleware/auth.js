import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "No autorizado" });

  try {
    const decoded = jwt.verify(token, "secreto");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: "Token inválido" });
  }
};
