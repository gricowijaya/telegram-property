require('dotenv').config()
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);
const { getHouse, getLandForSale } = require('./handler/api');

bot.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log("Response time : %sms", ms)
});

bot.command('start', ctx => {
  ctx.reply("Hello and Welcome to the property information in Bali")
});

bot.hears('location', async (ctx) => {
  const house = await getLocation();
  ctx.reply("Location" +  JSON.stringify(house.data) );
  // console.log("Location" +  JSON.stringify(house.data) );
})

bot.launch()
