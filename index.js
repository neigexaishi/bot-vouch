require("dotenv").config();
const fs = require("fs");
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const { REST, Routes } = require('discord.js');

const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const token = process.env.TOKEN;

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.commands = new Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

const commands = commandFiles.map(file => {
  const command = require(`./commands/${file}`);
  return command.data.toJSON();
});

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('mise à jour des commandes (slash)...');
    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands }
    );
    console.log('commandes enregistrées avec succès.');
  } catch (error) {
    console.error('erreur lors de l’enregistrement des commandes :', error);
  }
})();

client.once("ready", () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction, client);
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.editReply({ content: "Erreur lors de l'exécution de la commande." });
    } else {
      await interaction.reply({ content: "Erreur lors de l'exécution de la commande.", ephemeral: true });
    }
  }
});

client.login(token);
