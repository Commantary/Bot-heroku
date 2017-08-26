/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function (client) {
  client.on('message', message => {
    if (message.content.startsWith('+mute')) {
      // Pour avoir la mention du gars
      let muteRole = message.guild.roles.find('name', 'Muted')
      var member = message.mentions.members.first()
      let modRole = message.guild.roles.find("name", "Mod");

      if (!message.member.roles.has(muteRole.id)) {
        message.channel.sendMessage("", {embed: {
            
        }}
      } else {
          client.member.role.
      }
    }
  })
}
