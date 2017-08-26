const Discord = require('discord.js')

const client = new Discord.Client()

client.on('ready', () => {
  console.log('-------------------------------------')
  console.log('          [!] TEST BOT [!]')
  console.log('-------------------------------------')
  client.user.setPresence({ game: { name: 'En dev :)', type: 0 } })
})

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong')
  }
})
// Partie Help
const help = require('./module/help.js')
help(client)

// Partie Kick
const kick = require('./module/kick.js')
kick(client)

// Partie Ban
const ban = require('./module/ban.js')
ban(client)

client.login(process.TOKEN)
