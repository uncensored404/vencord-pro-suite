import { definePlugin } from "@utils/plugins";
import { OptionType } from "@utils/types";

export default definePlugin({
    name: "MemberJoinLeaveTracker",
    description: "Suivi en temps réel des arrivées et départs de membres dans les serveurs où tu es modérateur (par 404sec).",
    authors: [{ name: "404sec", id: 0n }],

    options: {
        notifyJoins: {
            type: OptionType.BOOLEAN,
            name: "Notifier les arrivées",
            description: "Affiche une notification lors de l'arrivée d'un nouveau membre.",
            default: true
        },
        notifyLeaves: {
            type: OptionType.BOOLEAN,
            name: "Notifier les départs",
            description: "Affiche une notification quand un membre quitte le serveur.",
            default: true
        }
    },

    start() {
        console.log("[404sec] MemberJoinLeaveTracker activé.");
    },

    stop() {
        console.log("[404sec] MemberJoinLeaveTracker désactivé.");
    }
});
