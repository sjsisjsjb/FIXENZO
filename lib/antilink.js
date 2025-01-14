function detectLink(message) {
    const urlPattern = /(https?:\/\/[^\s]+)/gi; // Pola untuk URL umum
    const groupLinkPattern = /https?:\/\/chat\.whatsapp\.com\/[a-zA-Z0-9]+/gi; 
    return urlPattern.test(message) || groupLinkPattern.test(message);
}

function handleAntiLink(m, isGroup, isAdmins, isCreator, isBotAdmins, db, reply, deleteMessage) {
    if (isGroup && db[m.chat]?.antilink) {
        if (detectLink(m.body)) {
            const isGroupLink = /https?:\/\/chat\.whatsapp\.com\/[a-zA-Z0-9]+/gi.test(m.body);

            
            if (isAdmins || isCreator) return reply('Anda admin, tautan tidak akan diproses.');

            
            if (isGroupLink) {
                reply('Tautan grup WhatsApp terdeteksi! Pesan akan dihapus.');
            } else {
                reply('Tautan terdeteksi! Pesan akan dihapus.');
            }

            
            deleteMessage(m.chat, m.key.id)
                .then(() => reply('Pesan telah dihapus karena mengirim tautan.'))
                .catch((err) => reply(`Gagal menghapus pesan: ${err.message}`));
        }
    }
}

module.exports = { detectLink, handleAntiLink };