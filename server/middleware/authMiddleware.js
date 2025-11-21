import jwt from "jsonwebtoken";

const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // no header or wrong format
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authentication required." });
  }
  const token = authHeader.split(" ")[1]; // gets only token, and leaves out "Bearer"

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { id: decoded.userId }; // now, req.user object is useable elsewhere

    next();
  } catch (err) {
    next(err);
  }
};

export default requireAuth;
