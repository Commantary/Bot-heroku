else if(message.content.startsWith(prefix +'mute')){
    let modRole = message.guild.roles.find("name", "Mod");
if(!message.guild.roles.exists("name", "mute")) {
return  message.channel.sendMessage("", {embed: {
  title: "Erreur:",
  color: 0xff0000,
  description: " :no_entry_sign: Le role **mute** n'existe pas dans ce serveur veuillez le crer pour Mute! :no_entry_sign: ",
  footer: {
    text: "Message par Nano Bot."
  }
}}).catch(console.error);
} 
if(!message.member.roles.has(modRole.id)) {
return message.channel.sendMessage("", {embed: {
  title: "Erreur:",
  color: 0xff0000,
  description: " :no_entry_sign: Vous n'avez pas la permissions d'utiliser cette commande ! :no_entry_sign: ",
  footer: {
    text: "Message par Nano Bot."
  }
}}).catch(console.error);
} 
if(message.mentions.users.size === 0) {
return message.channel.sendMessage("", {embed: {
  title: "Erreur:",
  color: 0xff0000,
  description: " :no_entry_sign: Merci de speifie l'utilisateur que vous voulez mute totalment. **Format ~> `&mute @mention`** ! :no_entry_sign: ",
  footer: {
    text: "Message par Nano Bot."
  }
}}).catch(console.error);
}
let muteMember = message.guild.member(message.mentions.users.first());
if(!muteMember) {
return message.channel.sendMessage("", {embed: {
  title: "Erreur:",
  color: 0xff0000,
  description: " :x:  L\'utilisateur que vous avez entre n'est pas valide ! :x:",
  footer: {
    text: "Message par Nano Bot."
  }
}}).catch(console.error);
}
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
return message.reply("Je n'ai pas la permissions pour faire cela __(MANAGE_MESSAGES)__ !").catch(console.error);
}
 if(!message.guild.channels.exists("name", "admin-logs")){
// cr?r le channel
message.guild.createChannel('admin-logs');
// Affiche un message d'erreur expliquant que le channel n'existait pas
return message.channel.sendMessage("", {embed: {
title: "Erreur:",
color: 0xff0000,
description: " :no_entry_sign: Le salon textuel `admin-logs` n'existait pas, je viens de le crer pour vous :white_check_mark: , Veuillez ressayer :wink:",
footer: {
text: "Message par Nano Bot."
}
}}).catch(console.error);
}     
let mutedRole = message.guild.roles.find("name", "mute");
var time = 500000;
console.log(muteMember);
muteMember.addRole(mutedRole).then(member => {
message.channel.sendMessage("", {embed: {
  title: "Erreur:",
  color: 0xff0000,
  description: " :white_check_mark:  Vous avez bien mute ** "+ muteMember + " dans le serveur "+message.guild.name  + " ! :white_check_mark: ",
  footer: {
    text: "Message par Nano Bot."
  }
}}).then(message.guild.channels.find('name','admin-logs').sendMessage({
embed: {
  type: 'rich',
  description: '',
  fields: [{
    name: '**L\'utilisateur <~>**',
    value: muteMember.user.username,
    inline: true
  }, {
    name: 'User id',
    value: muteMember.id,
    inline: true
  },{
    name: '**Action <~>**',
    value: "mute total",
    inline: true
},{
    name: 'Moderateur',
    value: message.author.username,
    inline: true
}],

  color: 0xD30000,
  footer: {
    text: 'Moderation',
    proxy_icon_url: ' '
  },

  author: { 
    name: muteMember.user.username,
    icon_url: " ",
    proxy_icon_url: ' '
  }
}
})).catch(console.error);
}
)}