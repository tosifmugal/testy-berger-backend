import express from "express";
import passport from "passport";



const router = express.Router();

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);
router.get("/login", (req, res, next) => {
  res.send("<h1>login</h1>");
});

// router.get(
//   "/login",
//   passport.authenticate("google", {
//     successRedirect: process.env.FRONTEND_URL,
//   })
// );


export default router;