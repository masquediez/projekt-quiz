const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const TodoModel = require("../../database/models/TodoModels");
const UserModel = require("../../database/models/UserModel");
const AccessTokens = require("../../services/auth/AccessToken");

const AuthRouter = Router();

// POST REQUESTS

AuthRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  const user = await UserModel.findOne({ where: { email } });

  if (user.password !== password) {
    res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
    return;
  }

  const myToken = AccessTokens.createAccessToken(user.id);

  res.status(StatusCodes.OK).json({ user, tokens: { accessToken: myToken } });
});

AuthRouter.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  const user = await UserModel.create({ email, password, name });
  const myToken = AccessTokens.createAccessToken(user.id);
  res.status(StatusCodes.OK).json({ user, tokens: { accessToken: myToken } });
});

module.exports = { AuthRouter };
