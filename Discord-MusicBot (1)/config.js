module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/PsCASjYVSn", //Support Server Link
  Token:"ODUzOTk4NjM1NTU2Mjc0MjY2.YMdiNQ.LUBYTOSgsiMy7w1vzYVd0GMZmCc", //Discord Bot Token
  ClientID: "853998635556274266", //Discord Client ID
  ClientSecret: "JOUk9wQovytHbtVcV74BU61VqDYLDbfq", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Music bot tri", //A Secret like a password
  IconURL:
    "https://c.tenor.com/HJvqN2i4Zs4AAAAj/milk-and-mocha-cute.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: "5a8f415203474bae930055dfc1f000c5", //Spotify Client ID
    ClientSecret: "2333d3d6c1c547a99f50693a9cb95086", //Spotify Client Secret
  },
};
