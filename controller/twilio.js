// //import dotenv from "";

// //,
// const dotenv = require("dotenv");
// dotenv.config();
// const AccessToken = require("twilio").jwt.AccessToken;
// const ChatGrant = AccessToken.ChatGrant;

// const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
// const twilioApiKey = process.env.TWILIO_API_KEY;
// const twilioApiSecret = process.env.TWILIO_API_SECRET;

// const identity = "user";

// // Create Chat Grant
// const chatGrant = new ChatGrant({
//   serviceSid: "ISe210b5e148494564892c44b760c5e2ce",
// });

// // Create an access token which we will sign and return to the client,
// const token = new AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret, {
//   identity: identity,
// });
// token.addGrant(chatGrant);

// Serialize the token to a JWT string
// console.log(token.toJwt());
