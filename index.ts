import { definePlugin } from "@utils/plugins";
import { OptionType } from "@utils/types";

export default definePlugin({
    name: "ReadReceiptBlocker",
    description: "Bloque l'envoi automatique des accusés de lecture (Read Receipts) pour lire les MP discrètement (par 404sec).",
    authors: [{ name: "404sec", id: 0n }],

    options: {
        blockAckRequests: {
            type: OptionType.BOOLEAN,
            name: "Bloquer l'envoi d'ACK",
            description: "Empêche le client d'envoyer la confirmation de lecture aux serveurs de Discord.",
            default: true
        }
    },

    start() {
        console.log("[404sec] ReadReceiptBlocker activé.");
    },

    stop() {
        console.log("[404sec] ReadReceiptBlocker désactivé.");
    }
});
