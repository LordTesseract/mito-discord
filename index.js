const Discord = require("discord.js");
const Bot = new Discord.Client();

Bot.login("Njk3NTIzODM5MzkwOTc0MTA1.Xo4imQ.kTLbtXTPtP6YvH0bJxEPQC_wy60");
Bot.once("ready", () => {
  console.log(`Bot online: ${Bot.user.tag}`);
});

const checkNome = [
  "bolsonaro",
  "bonoro",
  "biroliro",
  "mito",
  "messias",
  "presida",
  "17",
  "38",
];

const checkCorona = ["covid-19", "corona", "coronga", "coronavirus", "covid"];

const replyNome = [
  "O que você falou do mito?",
  "Tem que ver isso ai, talkey?",
  "No tocante disso ai...",
  "Vou ver com o Paulo Guedes e te aviso",
];

const replayCorona = [
  "Isso ai é so uma gripezinha...",
  "Robo não pega doença",
  "Esse virus chinês...",
  "Com meu histórico de atleta...",
  "Esse vírus é igual uma chuva, vai molhar 70% de vocês. Isso ninguém contesta. Toda a nação vai ficar livre da pandemia quando 70% for infectada e conseguir os anticorpos...",
];

Bot.on("message", (msg) => {
  if (msg.author.bot) return;

  checkNome.some((check) => {
    if (msg.content.toLowerCase().includes(check)) {
      msg.reply(replyNome[Math.floor(Math.random() * replyNome.length)]);
    }

    return;
  });
});

Bot.on("message", (msg) => {
  if (msg.author.bot) return;

  checkCorona.some((check) => {
    if (msg.content.toLowerCase().includes(check)) {
      msg.reply(replayCorona[Math.floor(Math.random() * replayCorona.length)]);
    }

    return;
  });
});
