const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Developer',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`Oui moi je répond à toutes tes questions 🤸🏽‍♂️'`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`🧘🏽‍♂️ "${input}"`, event.threadID, event.messageID);
  try {
    const services = [
 { url: 'https://ai-tools.replit.app/gpt', params: { prompt: input, uid: userId } },
 { url: 'https://openaikey-x20f.onrender.com/api', params: { prompt: input } },
 { url: 'http://fi1.bot-hosting.net:6518/gpt', params: { query: input } },
 { url: 'https://ai-chat-gpt-4-lite.onrender.com/api/hercai', params: { question: input } }
 ];
    const response = service.response;
    api.sendMessage(response + '\n══════════════════\nhttps://www.facebook.com/sory.ronald.alexandre', event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage(' Une erreur 🤧.', event.threadID, event.messageID);
  }
};
