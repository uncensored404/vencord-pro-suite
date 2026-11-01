import { definePlugin } from "@utils/plugins";
import { OptionType } from "@utils/types";

export default definePlugin({
    name: "CustomRichPresenceBuilder",
    description: "Permet de créer et d'afficher une présence Rich Presence entièrement personnalisée avec du texte et des images (par 404sec).",
    authors: [{ name: "404sec", id: 0n }],

    options: {
        activityDetails: {
            type: OptionType.STRING,
            name: "Détail de l'activité",
            description: "Le texte principal affiché sous ton nom dans ton profil.",
            default: "Développement avec 404sec"
        },
        activityState: {
            type: OptionType.STRING,
            name: "État personnalisé",
            description: "Le texte secondaire de statut.",
            default: "Building Vencord Plugins"
        }
    },

    start() {
        console.log("[404sec] CustomRichPresenceBuilder activé.");
    },

    stop() {
        console.log("[404sec] CustomRichPresenceBuilder désactivé.");
    }
});
