const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
require("dotenv").config();

module.exports = {
    data: new SlashCommandBuilder()
        .setName("vouch")
        .setDescription("Laisse un vouch")
        .addIntegerOption(option =>
            option.setName("etoile")
                .setDescription("Nombre d'étoiles (1-5)")
                .setRequired(true)
                .addChoices(
                    { name: "⭐", value: 1 },
                    { name: "⭐⭐", value: 2 },
                    { name: "⭐⭐⭐", value: 3 },
                    { name: "⭐⭐⭐⭐", value: 4 },
                    { name: "⭐⭐⭐⭐⭐", value: 5 }
                ))
        .addStringOption(option =>
            option.setName("message")
                .setDescription("Message de ton vouch")
                .setRequired(false))
        .addAttachmentOption(option =>
            option.setName("image")
                .setDescription("Image à joindre")
                .setRequired(false)),

    async execute(interaction, client) {
        let deferred = false;

        try {
            await interaction.deferReply({ ephemeral: true });
            deferred = true;

            const stars = interaction.options.getInteger("etoile");
            const message = interaction.options.getString("message") || "Aucun message.";
            const image = interaction.options.getAttachment("image");
            const starEmoji = "⭐".repeat(stars);
            const now = new Date().toLocaleDateString("fr-FR");

            const embed = new EmbedBuilder()
                .setTitle("New vouch !")
                .setColor(0xFFD700)
                .setDescription(`${starEmoji}\n\n**Message**\n${message}`)
                .setThumbnail(interaction.user.displayAvatarURL())
                .addFields(
                    { name: "Vouched by", value: `${interaction.user}`, inline: true },
                    { name: "Vouched on", value: now, inline: true },
                )
                .setFooter({ text: "# nom de ton serv" });

            if (image) {
                embed.setImage(image.url);
            }

            const targetChannel = await client.channels.fetch(process.env.CHANNEL_ID);

            if (!targetChannel) {
                return await interaction.editReply({ content: "❌ Salon introuvable." });
            }

            await targetChannel.send({ embeds: [embed] });
            await interaction.editReply({ content: "✅ Ton vouch a été envoyé !" });

        } catch (error) {
            console.error("❌ Erreur dans /vouch :", error);

            if (deferred) {
                try {
                    await interaction.editReply({ content: "❌ Une erreur est survenue pendant le vouch." });
                } catch (err2) {
                    console.warn("⚠️ Impossible de faire editReply : interaction expirée.");
                }
            } else {
                try {
                    await interaction.reply({ content: "❌ Une erreur est survenue.", ephemeral: true });
                } catch (err3) {
                    console.warn("⚠️ Impossible de reply : interaction déjà traitée ou expirée.");
                }
            }
        }
    }
};
