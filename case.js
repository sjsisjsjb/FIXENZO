//base by Rafael
//Recode and addfitur by Fixenzo
//buat kelen kalau mau repost usahakan nie jan dihapus cape gw bangsat

require("./config")
const {
smsg, getGroupAdmins, formatp, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')
const { downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, templateMessage } = require('@whiskeysockets/baileys')
const axios = require('axios')
const os = require('os')
const fs = require('fs')
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')

const util = require('util')
const cron = require('node-cron')
const fetch = require('node-fetch')
const speed = require('performance-now')
const moment = require('moment-timezone')


const { spawn: spawn, exec } = require('child_process')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { performance } = require('perf_hooks')
const ytdl = require("ytdl-core")
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const { toPTT, toAudio } = require("./lib/converter")
const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
const pino = require('pino')
//  Base
module.exports = async (Rafael, m) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') && m.message.listResponseMessage.singleSelectreply.selectedRowId ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') && m.message.templateButtonreplyMessage.selectedId ? m.message.templateButtonreplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') && JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreply.selectedRowId || m.text) : ""
      var budy = (typeof m.text == 'string' ? m.text : '')
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const { type } = m
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const botNumber = await Rafael.decodeJid(Rafael.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = ["6289602321521@s.whatsapp.net", botNumber, ...global.ownNumb].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const mime = (quoted.msg || quoted).mimetype || quoted.mediaType || "";
const isMedia = /image|video|sticker|audio/.test(mime)
        const qmsg = (quoted.msg || quoted)
// Group
const groupMetadata = m.isGroup ? await Rafael.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isText = (type === 'conversation' || type === 'extendedTextMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedViewOnce = m.message.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2 ? true : false;
//Ini Waktu | Waktu adalah emas,maka dari itu sentuh lah rumput.dan jangan nolep dikamar terus,usahakan tu kontol jangan dikocok terus.Lutut ama sikut lu kopong nanti
const moment = require('moment-timezone')
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss")
if(time2 < "19:00:00"){
var ucapanWaktu = "Selamat Malam🌃"
}
if(time2 < "15:00:00"){
var ucapanWaktu = "Selamat Sore🌄"
 }
if(time2 < "11:00:00"){
var ucapanWaktu = "Selamat Siang🏞️"
}
if(time2 < "06:00:00"){
var ucapanWaktu = "Selamat Pagi🏙️ "
 }
if(time2 < "23:59:00"){
var ucapanWaktu = "Selamat Subuh🌆"
}
const tanggal = moment().tz("Asia/Jakarta").format("ll")
const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const salam2 = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Fixenzo Store`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;RafaelBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/a915fdf6f21ad99179f15.jpg' }}}}
//Public dan Self
if (!Rafael.public) {
if (!isCreator && !m.key.fromMe) return
}
const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/addlist');  
// Response Addlist
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
Rafael.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
Rafael.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}}

function rumus(tMatch, tWr, wrReq) {
    let tWin = tMatch * (tWr / 100);
    let tLose = tMatch - tWin;
    let sisaWr = 100 - wrReq;
    let wrResult = 100 / sisaWr;
    let seratusPersen = tLose * wrResult;
    let final = seratusPersen - tMatch;
    return Math.round(final);
}

function detectLink(message) {
    const urlPattern = /(https?:\/\/[^\s]+)/gi; 
    return urlPattern.test(message);
}

function rumusLose(tMatch, tWr, wrReq) {
    let persen = tWr - wrReq;
    let final = tMatch * (persen / 100);
    return Math.round(final);
}
async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const isPremium= isCreator || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(Rafael, m, premium)

const rafaelbut = (anu) => {
const {message, key} = generateWAMessageFromContent(m.chat, {
  interactiveMessage: {
    body: {text: anu},
    footer: {text: `Rafaelll-Autoai`},
    nativeFlowMessage: {
      buttons: [{text: "Rafael"}
           ],
    }
  },
}, {quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: `${body}`}}})
 Rafael.relayMessage(m.chat, {viewOnceMessage:{message}}, {messageId:key.id})
}
// Console
if (isGroup && isCmd) {
console.log(colors.green.bold("[Group]") + " " + colors.brightCyan(time2,) + " " + colors.black.bgYellow(command) + " " + colors.green("from") + " " + colors.blue(groupName));
}

if (!isGroup && isCmd) {
console.log(colors.green.bold("[Private]") + " " + colors.brightCyan(time2,) + " " + colors.black.bgYellow(command) + " " + colors.green("from") + " " + colors.blue(pushname));
}
const tiktokDl = require('./lib/tiktokDl');
const yts = require("yt-search")
//
 const { y2mateplay, y2matemp3, y2matemp4 } = require('./lib/y2mate')
const downloadMp3 = async (Link) => {
try{
let yutub = await y2matemp3(Link)
//if (yutub.size < 62914560) {
await Rafael.sendMessage(m.chat, {audio: { url: yutub.audio["128"].url }, mimetype: 'audio/mpeg', contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {
title: "YOUTUBE - PLAY",
body: yutub.title,
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: yutub.thumbnail,
sourceUrl: Link
}
}},{ quoted: m })
/*} else {
await m.reply(`File audio ( ${bytesToSize(yutub.size)} ), telah melebihi batas maksimum!`)
}*/


} catch (err){
console.log(color(err))
}}
const downloadMp4 = async (Link) => {
try{
let yutub = await y2matemp4(Link)
//if (yutub.size < 104857600) {
const Cap = `*${yutub.title}*\n\nID: ${yutub.vid}`;
await Rafael.sendMessage(m.chat, { video: { url: yutub.video["360"].url }, caption: Cap,gifPlayback: false},{quoted: m})
/*} else {
await nw(`File video ( ${bytesToSize(yutub.size)} ), telah melebihi batas maksimum!`)
}*/
} catch(err) {
m.reply(`${err}`)
}}

const fVerif = { key: {
    participant: '0@s.whatsapp.net',
    remoteJid: '0@s.whatsapp.net'
  },
  message: { conversation: `_Fixenzo Terverifikasi Oleh WhatsApp_`}
}
const reply = async(teks) => 
      {
        Rafael.sendMessage(
          from, 
            {text: 
              teks, 
                contextInfo: 
                  {
                    forwardingScore: 999,
                      isForwarded: true,
                forwardedNewsletterMessageInfo: 
              {
	        newsletterName: 'Fixenzo - Store',
		  newsletterJid: "120363307170529595@g.us",
		}}},
      {quoted:fVerif}
    )
  }
const Reply = async(teks) => 
      {
        Rafael.sendMessage(
          from, 
            {text: 
              teks, 
                contextInfo: 
                  {
                    forwardingScore: 999,
                      isForwarded: true,
                forwardedNewsletterMessageInfo: 
              {
	        newsletterName: 'Fixenzo - Store',
		  newsletterJid: "120363307170529595@g.us",
		}}},
      {quoted:fVerif}
    )
  }
    


const tag = `@${m.sender.split('@')[0]}`
const totalFitur = () =>{
            var mytext = fs.readFileSync("./case.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        } 
if (mek.key.id.startsWith('3EB0')) return
switch(command) {
case 'allmenu': {
let text = `╭──⌜ *DASHBOARD* ⌟──╮
⛩️ *NameBot*   : ${global.namebot}  
⛩️ *NameOwner* : ${global.namaowner}  
⛩️ *TotalFitur*: ${totalFitur()}  
⛩️ *Sigma*     : +9999 AURA SIGMA  
⛩️ *Prefix*    : [ . ]  
╰───────────────╯

╭⌜ *MENU DOWNLOAD* ⌟╮
• play  
• spotifysearch  
• spotifydl  
• tiktokdl  
╰──────────────╯

╭⌜ *MENU STORE* ⌟╮
• list  
• addlist  
• dellist  
• updatelist  
• qris  
• done  
• payment  
• proses  
• formatpost  
• formatneed  
• listpanel  
• listvps
• jpmproduk  
• jpm  
• cekstok  
• tambahstok  
• updatestok  
• beli  
╰──────────────╯

╭⌜ *MENU PUSHKONTAK* ⌟╮
• save  
• cekidgc  
• ceknamagc  
• listgroup  
• pushkontak  
• pushkontakid  
• pushkontakgc  
• savekontak  
╰──────────────╯

╭⌜ *MENU RANDOM* ⌟╮
• txt2img  
• heroml  
• math
• totalfitur  
• listcase  
• jadwalsholat  
• anime  
• tts  
• cuaca  
• ssweb
╰──────────────╯

╭⌜ *MENU GROUP* ⌟╮
• kick  
• add  
• linkgc  
• hidetag  
• tagall  
• promote  
• demote  
╰──────────────╯

╭⌜ *MENU OWNER* ⌟╮
• addcase  
• delcase  
• gantifile  
• get  
• infogc  
• antilink  
• self  
• public  
• setbio  
• ping
• inspect
╰──────────────╯

╭⌜ *MENU AI* ⌟╮
• autoai  
• ai  
• translate  
╰──────────────╯`
await Rafael.sendMessage(m.chat, {
document: fs.readFileSync('./media/Fixenzo.png'),
fileName: `hello ganteng`,
mimetype: "image/png",
fileLength: 99999999999,
jpegThumbnail: fs.readFileSync('./media/Fixenzo.png'),
description: 'hello',
caption: text,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender], 
businessMessageForwardInfo: {  
businessOwnerJid: global.owner 
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `Fixenzo - Store`,
newsletterJid: global.idsal},
externalAdReply: { 
title: `FIXENZO STORE`, 
body: `Online On ${runtime(process.uptime())}`,
thumbnailUrl: "https://telegra.ph/file/21f63a0caa3d3add04256.jpg",
sourceUrl: `https://whatsapp.com/channel/0029ValLxIw9xVJewuwoqB1G`,
mediaType: 1,
renderLargerThumbnail: true }}},
{quoted:fVerif})}
let media = fs.readFileSync('./media/fixenzo.mp3');
await Rafael.sendMessage(m.chat, {audio: media, mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
break;
case 'menu': {
    let pushname = m.pushName || 'User';
    let text = `*✨ HAI ${pushname}! ✨*
    
Saya adalah bot buatan owner saya yaitu *Fixenzo*. Saya diprogram untuk membantu Anda dengan berbagai fitur menarik! 
Untuk melihat daftar lengkap menu, ketik *.allmenu*.

📌 *Catatan Penting*:
Mohon maaf jika ada fitur yang error, masih dalam tahap pengembangan. Kalau ada masalah, .owner siap membantu memperbaikinya! 💪

🛠 *Info Bot*:
• Creator  : ${global.namaowner}
• NameBot  : ${global.namebot}
• Prefix   : [.]

🎧 _Stay chill, Hidup memang pahit, Jadi jalanin aja yak, Anjay Slebew 😉_

Enjoy your day! 🌟`;
await Rafael.sendMessage(m.chat, {

document: fs.readFileSync('./media/Fixenzo.png'),

fileName: `hello ganteng`,
mimetype: "image/png",
fileLength: 99999999999,
jpegThumbnail: fs.readFileSync('./media/Fixenzo.png'),
description: 'hello',
caption: text,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender], 
businessMessageForwardInfo: {  
businessOwnerJid: global.owner 
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `Fixenzo - Store`,
newsletterJid: global.idsal},
externalAdReply: { 
title: `FIXENZO STORE`, 
body: `Online On ${runtime(process.uptime())}`,
thumbnailUrl: "https://telegra.ph/file/21f63a0caa3d3add04256.jpg",
sourceUrl: `https://whatsapp.com/channel/0029ValLxIw9xVJewuwoqB1G`,
mediaType: 1,
renderLargerThumbnail: true }}},
{quoted:fVerif})}
break;
case 'setbio': {
    if (!isCreator) return m.reply("Fitur ini hanya bisa digunakan oleh Owner!");

    if (!text) return m.reply('Mana teksnya?');

    try {
        await Rafael.updateProfileStatus(text); 
        m.reply(`*Bio telah diganti menjadi:*\n_${text}_`);
    } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan saat mengganti bio. Pastikan bot dalam keadaan online.');
    }
}
break;
case 'kuismath': case 'math': {

				const { genMath, modes } = require('./lib/math');

				const inputMode = ['noob', 'easy', 'medium', 'hard','extreme','impossible','impossible2'];
				if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
				if (!inputMode.includes(text.toLowerCase())) return m.reply('Mode tidak ditemukan!')
				let result = await genMath(text.toLowerCase())
				let { key } = await m.reply(`*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu : ${(result.waktu / 1000).toFixed(2)} detik`)
				genMath[m.chat + key.id] = {
					jawaban: result.jawaban,
					mode: text.toLowerCase(),
					id: key.id
				}
				await sleep(genMath, result.waktu)
				if (modes(m.chat + key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + genMath[m.chat + key.id].jawaban)
					delete genMath[m.chat + key.id]
				}
			}
			break
case 'tambahstok': {
    if (!isCreator) return reply('Fitur ini hanya dapat digunakan oleh owner.');

    const produkDB = {
        'Panelunli': { nama: 'Panel Unli', stok: 40, harga: 5000 },
        'Reseller': { nama: 'Reseller Panel', stok: 15, harga: 10000 },
        'Adminpanel': { nama: 'Adminpanel', stok: 10, harga: 15000 },
    };

    const [kodeProduk, stokTambah] = text.split(' ');
    if (!kodeProduk || !stokTambah) return reply(`Gunakan format:\n\n${prefix}tambahstok <kode_produk> <jumlah_stok>\n\nContoh:\n${prefix}tambahstok pulsa10k 5`);

    const produk = produkDB[kodeProduk.toLowerCase()];
    if (!produk) return reply('Produk tidak ditemukan.');

    produk.stok += parseInt(stokTambah); // Menambah stok produk
    reply(`Stok produk *${produk.nama}* berhasil ditambah. Stok baru: ${produk.stok}`);
    break;
}
case 'cekstok': {
    const produkDB = {
        'panelunli': { nama: 'panelunli', stok: 40, harga: 5000 },
        'reseller': { nama: 'resellerpanel', stok: 15, harga: 10000 },
        'adminpanel': { nama: 'adminpanel', stok: 10, harga: 15000 },
    };

    if (!text) return reply(`Gunakan format:\n\n${prefix}cekstok <kode_produk>\n\nContoh:\n${prefix}cekstok Panel Unli`);

    const produk = produkDB[text.toLowerCase()];
    if (!produk) return reply('Produk tidak ditemukan. Pastikan kode produk sudah benar.');

    const infoProduk = `
📦 *Informasi Produk* 📦
--------------------------------
📌 *Nama*: ${produk.nama}
📉 *Stok*: ${produk.stok}
💰 *Harga*: Rp${produk.harga.toLocaleString()}
--------------------------------
Gunakan perintah *.beli <kode_produk>* untuk membeli produk ini.
    `.trim();

    reply(infoProduk);
    break;
}
case 'beli': {
    const produkDB = {
        'panelunli': { nama: 'panelunli', stok: 40, harga: 5000 },
        'reseller': { nama: 'resellerpanel', stok: 15, harga: 10000 },
        'adminpanel': { nama: 'adminpanel', stok: 10, harga: 15000 },
    };

    const [kodeProduk, jumlah] = text.split(' ');
    if (!kodeProduk || !jumlah) return reply(`Gunakan format:\n\n${prefix}beli <kode_produk> <jumlah>\n\nContoh:\n${prefix}beli adminpanel 2`);

    const produk = produkDB[kodeProduk.toLowerCase()];
    if (!produk) return reply('Produk tidak ditemukan. Pastikan kode produk sudah benar.');
    if (produk.stok < jumlah) return reply(`Stok tidak mencukupi. Stok tersedia: ${produk.stok}`);

    const totalHarga = produk.harga * jumlah;
    produk.stok -= jumlah; // Mengurangi stok

    const nota = `
🛒 *Nota Pembelian* 🛒
--------------------------------
📌 *Nama Produk*: ${produk.nama}
📦 *Jumlah*: ${jumlah}
💰 *Total Harga*: Rp${totalHarga.toLocaleString()}
--------------------------------
Gunakan perintah *.payment* untuk melihat metode pembayaran.
    `.trim();

    reply(nota);
    break;
}
case 'updatestok': {
    if (!isCreator) return reply('Fitur ini hanya dapat digunakan oleh owner.');

    const produkDB = {
        'panelunli': { nama: 'panelunli', stok: 40, harga: 5000 },
        'reseller': { nama: 'resellerpanel', stok: 15, harga: 10000 },
        'adminpanel': { nama: 'adminpanel', stok: 10, harga: 15000 },
    };

    const [kodeProduk, jumlah] = text.split(' ');
    if (!kodeProduk || !jumlah) return reply(`Gunakan format:\n\n${prefix}updatestok <kode_produk> <jumlah>\n\nContoh:\n${prefix}updatestok adminpanel 20`);

    const produk = produkDB[kodeProduk.toLowerCase()];
    if (!produk) return reply('Produk tidak ditemukan. Pastikan kode produk sudah benar.');

    produk.stok += parseInt(jumlah); // Menambah stok
    reply(`Stok produk *${produk.nama}* berhasil diperbarui. Stok saat ini: ${produk.stok}`);
    break;
}
case "cekidch": case "idch": {
if (!text) return m.reply("linkchnya")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await Rafael.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break
case 'upsaluran':
if (!m.quoted) return reply(`Reply audio ${prefix}${command}`)
if ((isAudio) || !isQuotedAudio) {
try {
reply('Done')
let media = await quoted.download()
Rafael.sendMessage(global.idsal, { audio: media}, { quoted: m})
} catch (err) {
reply(`audio tidak di temukan!\nCoba untuk ulangi kirim/reply audio`)
}
} else reply(`reply audio`)
break
case 'listcase': {
let { listCase } = require('./lib/scrapelistCase.js')
reply(listCase())
}
break
case 'sticker': case 'stiker': case 's': {
    if (!/image|video/.test(mime)) return reply(`Kirim/reply gambar/video dengan caption *${prefix + command}*`);

    try {
        let media = await quoted.download();  
        let teks1 = text.split`|`[0] ? text.split`|`[0] : global.packname;
        let teks2 = text.split`|`[1] ? text.split`|`[1] : global.author;
        await Rafael.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 });

    } catch (e) {
        console.error(e);
        reply('Terjadi kesalahan saat membuat stiker.');
    }
    break;
}
case "get":
        if (!/^https?:\/\//.test(text))
          return reply("Awali *URL* dengan http:// atau https://");
        const ajg = await fetch(text);
        if (ajg.headers.get("content-length") > 100 * 1024 * 1024 * 1024) {
          throw `Content-Length: ${ajg.headers.get("content-length")}`;
        }
        const contentType = ajg.headers.get("content-type");
        if (contentType.startsWith("image/")) {
          return Rafael.sendMessage(
            m.chat,
            { image: { url: text } },
            "imageMessage",
            text,
            m,
          );
        }
        if (contentType.startsWith("video/")) {
          return Rafael.sendMessage(
            m.chat,
            { video: { url: text } },
            "videoMessage",
            text,
            m,
          );
        }
        if (contentType.startsWith("audio/")) {
          return Rafael.sendMessage(
            m.chat,
            { audio: { url: text } },
            "audioMessage",
            text,
            m,
          );
        }
        let alak = await ajg.buffer();
        try {
          alak = util.format(JSON.parse(alak + ""));
        } catch (e) {
          alak = alak + "";
        } finally {
          reply(alak.slice(0, 65536));
        }
        break;
        case "jpm": case "jpm2":{
if (!isCreator) return reply(`Khusus Owner Wir!`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wait Bos Ku_")
let getGroups = await Rafael.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Rafael.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Rafael.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Rafael.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Rafael.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL BANG*")
}
break
case "formatpost": {
const text12 = `🥀FORMAT JASPOST BY ${global.namaowner}
(BUKAN AKUN MILIK ADMIN)
                   
JUAL AKUN :
SPEK :
HARGA :
MC :


NOTE‼️: WAJIB MENGGUNAKAN JASA ADMIN ${global.namaowner}  AGAR TERHINDAR DARI PENIPUAN


🥀BEE SMART BUYER🥀`
Rafael.sendMessage(from, { image: { url: `https://telegra.ph/file/21f63a0caa3d3add04256.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "formatneed": {
    const text12 = `*FORMAT JASA NEED AKUN BY ${global.namaowner}*
*( BUKAN AKUN ADMIN )*

NAMA PEMILIK : 
AKUN :
LOGIN :
HARGA : 
SPEK AKUN :  
MC :
  
*#TIDAK MENERIMA KIRKON*

📝𝐍𝐎𝐓𝐄 : 
*WAJIB MENGGUNAKAN JASA ADMIN ${global.namaowner} UNTUK MENGHINDARI PENIPUAN*

*PERINGATAN ⚠️*
*MOHON NAMA PEMILIK AKUNNYA HARUS DI ISI DENGAN BENAR AGAR SELLER GAMPANG DI CARI*`;

    Rafael.sendMessage(from, 
        { 
            image: { url: 'https://telegra.ph/file/21f63a0caa3d3add04256.jpg' }, 
            caption: text12, 
            contextInfo: { 
                mentionedJid: [sender], 
                forwardingScore: 9999, 
                isForwarded: true 
            }
        }, 
        { quoted: m }
    );
}
break;
case 'inspect': {

				if (!text) return m.reply('Masukkan Link Group!')

				let code = q.match(/chat.whatsapp.com\/([\w\d]*)/g);
				if (code === null) return m.reply('No invite url detected.');
				code = code[0].replace('chat.whatsapp.com/', '');
				await Rafael.groupGetInviteInfo(code).then(anu => {
					let { id, subject, owner, subjectOwner, creation, desc, descId, participants, size, descOwner } = anu
					let par = `*Nama Gc* : ${subject}\n*ID* : ${id}\n${owner ? `*Creator* : @${owner.split('@')[0]}` : '*Creator* : -'}\n*Jumlah Member* : ${size}\n*Gc Dibuat Tanggal* : ${new Date(creation * 1000).toLocaleString()}\n*DescID* : ${descId ? descId : '-'}\n${subjectOwner ? `*Nama GC Diubah Oleh* : @${subjectOwner.split('@')[0]}` : '*Nama GC Diubah Oleh* : -'}\n${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n\n*Desc* : ${desc ? desc : '-'}\n`;
					Rafael.sendTextMentions(m.chat, par, m);
				}).catch((res) => {
					if (res.data == 406) return m.reply('Grup Tidak Di Temukan❗');
					if (res.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗');
				});
			}
			break
case "listpanel": {
const text12 = `SEWA PANEL ${global.namaowner}

━━━━━━━━━━━━━━━━━━━━━━━━
*PROMO PANEL BY ${global.namaowner}*

*_🤖PANEL RUN BOT WA🤖_*

SERVER PRIVATE
*_🔐RAM 1GB CPU 45% : RP 1K_*
*_🔐RAM 2GB CPU 75% : RP 2K_*
*_🔐RAM 3GB  CPU 99% : RP 3K_*
*_🔐RAM 4GB CPU 125% : RP 4K_*
*_🔐RAM 5GB CPU 145% : RP 5K_*
*_🔐RAM 6GB CPU 165% : RP 6K_*
*_🔐RAM 7GB  CPU 195% : RP 7K_*
*_🔐RAM 8GB CPU 225% : RP 8K_*
*_🔐RAM 9GB CPU 245% : RP 9K_*
*_🔐RAM 10GB CPU 265% : RP 10K_*
*_🔐UNLI GB CPU UNLI 13K_*
*_▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬_*
𝙺𝙴𝚄𝙽𝚃𝚄𝙽𝙶𝙰𝙽 𝙱𝚄𝚈 𝙿𝙰𝙽𝙴𝙻 ? 
➠ 𝙰𝙽𝚃𝙸 𝙳𝙴𝙻𝙰𝚈
➠ 𝙱𝙾𝚃 𝙵𝙰𝚂𝚃 𝚁𝙴𝚂𝙿𝙾𝙽 
➠ 𝚂𝙴𝚁𝚅𝙴𝚁 𝚃𝙴𝚁𝙹𝙰𝙶𝙰
➠ 𝙹𝚄𝙰𝙻 𝙺𝚄𝙰𝙻𝙸𝚃𝙰𝚂 𝙱𝚄𝙺𝙰𝙽 𝙰𝚂𝙰𝙻 𝙹𝚄𝙰𝙻
➠ 𝚂𝙲 𝚈𝙶 𝙿𝙰𝚂𝚃𝙸 𝙰𝙼𝙰𝙽 𝙰𝙽𝚃𝙸 𝙳𝙸 𝙼𝙰𝙻𝙸𝙽𝙶
➠ 𝙷𝙴𝙼𝙰𝚃 𝙺𝚄𝙾𝙰𝚃/𝙿𝙰𝙺𝙴𝚃
➠ 𝙷𝙴𝙼𝙰𝚃 𝙿𝙴𝙽𝚈𝙸𝙼𝙿𝙰𝙽𝙰𝙽
➠ 𝚆𝙴𝙱 𝙲𝙻𝙾𝚂𝙴? 𝙱𝙾𝚃 𝚃𝙴𝚃𝙰𝙿 𝙾𝙽 24𝙹𝙰𝙼!
𝙶𝙰𝚁𝙰𝙽𝚂𝙸 5𝙳𝙰𝚈 
𝙹𝙸𝙺𝙰 𝙼𝚆 𝙲𝙻𝙰𝙸𝙼 𝙶𝙰𝚁𝙰𝙽𝚂𝙸 𝙱𝙰𝚆𝙰 𝙱𝚄𝙺𝚃𝙸 𝚃𝙵/𝙲𝙷𝙰𝚃𝙰𝙽

𝙺𝙷𝚄𝚂𝚄𝚂 𝚂𝙴𝚁𝚅𝙴𝚁 𝙿𝚁𝙸𝚅𝙰𝚃𝙴

*Harga diatas adalah untuk 1bulan*
*Memiliki garansi selama 14 hari full ganti baru untuk server private*
*Server biasa no garansi*

OPEN JUGA SC DLL NEED SC BLH HUBUNGIN ADMIN KALAU MW BERTANYA SC ADA APA AJA SC NYA MIN INSYAALLAH ADA

MINAT CHAT : 
https://wa.me/${global.owner}`
Rafael.sendMessage(from, { image: { url: `https://telegra.ph/file/21f63a0caa3d3add04256.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "listvps": {

const text12 = `⬛️ 🌐 VPS DIGITAL OCEAN - ${global.namaowner}! 🌟

✅ RAM 1 | CORE 1 | Rp 25.000  
✅ RAM 2 | CORE 1 | Rp 35.000  
✅ RAM 4 | CORE 2 | Rp 45.000  
✅ RAM 8 | CORE 4 | Rp 65.000  
✅ RAM 16 | CORE 4 | Rp 85.000

*🎯 KEUNTUNGAN MEMILIH VPS KAMI:*
- Akses gratis ke JuiceSSH & Termius  
- Instalasi Pterodactyl tanpa biaya tambahan  
- Free konfigurasi Eggs untuk Minecraft, SAMP & Bot WA  
- Tema Stellar GRATIS untuk paket RAM 8 & 16  
- Siap pakai setelah pembelian  
- Garansi penuh selama tidak melanggar TOS ❗  

*📲 INGIN PESAN VPS SEKARANG? HUBUNGI ADMIN DI BAWAH INI:*
👉 [Klik untuk WhatsApp Admin](https://wa.me/${global.owner})`
Rafael.sendMessage(from, { image: { url: `https://telegra.ph/file/21f63a0caa3d3add04256.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
// Push Kontak
case 'pushkontak': {
    if (!isGroup) return reply('Fitur ini hanya dapat digunakan di grup.');
    if (!isCreator) return reply('Hanya owner yang dapat menggunakan fitur ini.');

    const groupMetadata = await Rafael.groupMetadata(from);
    const participants = groupMetadata.participants;

    if (!text) return reply('Silakan masukkan pesan yang ingin dikirim.');

    const pesan = text.trim(); 
    let success = 0;
    let failed = 0;

    for (let member of participants) {
        const memberId = member.id; 
        try {
            // Kirim pesan ke anggota grup
            await Rafael.sendMessage(memberId, { text: pesan });
            console.log(`Pesan berhasil dikirim ke: ${memberId}`);
            success++;
        } catch (error) {
            console.error(`Gagal mengirim pesan ke: ${memberId}`, error);
            failed++;
        }
        await sleep(1000); // Delay 1 detik 
    }

    reply(`Push pesan selesai.\nBerhasil: ${success}\nGagal: ${failed}`);
    break;
}
case 'translate': case 'trans': {
    if (!text) return reply(`Gunakan format:\n\n${prefix}translate <kode bahasa> <teks>\n\nContoh:\n${prefix}translate en Halo, apa kabar?`);
    
    // Memisahkan kode bahasa dan teks
    let args = text.split(' ');
    let langCode = args[0]; // Kode bahasa, misalnya 'en', 'id', 'jp'
    let query = args.slice(1).join(' '); 
    if (!langCode || !query) return reply(`Format salah. Gunakan seperti ini:\n\n${prefix}translate <kode bahasa> <teks>\n\nContoh:\n${prefix}translate en Halo, apa kabar?`);
    try {
        let res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${langCode}&dt=t&q=${encodeURIComponent(query)}`);
        let result = await res.json();
        let translatedText = result[0][0][0]; // Hasil terjemahan
        let detectedLang = result[2]; 
        let response = `
🌐 *Translator ${global.namaowner}* 🌐
--------------------------------
🔤 *Teks Asli*: ${query}
🌍 *Bahasa Asal*: ${detectedLang.toUpperCase()}
📝 *Hasil Terjemahan*: ${translatedText}
--------------------------------
🔧 *Kode Bahasa*: ${langCode.toUpperCase()}
        `.trim();
        reply(response);
    } catch (error) {
        console.error(error);
        reply('Maaf, terjadi kesalahan saat menerjemahkan teks. Coba lagi nanti.');
    }
    break;
}
case 'pushkontakid': {
    if (!isCreator) return reply('Fitur ini hanya dapat digunakan oleh owner.');

    const args = text.split('|');
    if (args.length < 2) return reply(`Gunakan format:\n${prefix}pushkontakid <id_grup>|<pesan>\n\nContoh:\n${prefix}pushkontakid 1234567890-123456789@g.us|Woi Jawir`);

    const groupId = args[0].trim(); 
    const pesan = args[1].trim(); 
    try {
        const groupMetadata = await Rafael.groupMetadata(groupId);
        const participants = groupMetadata.participants;

        let success = 0;
        let failed = 0;

        for (let member of participants) {
            const memberId = member.id; 
            try {
                await Rafael.sendMessage(memberId, { text: pesan });
                console.log(`Pesan berhasil dikirim ke: ${memberId}`);
                success++;
            } catch (error) {
                console.error(`Gagal mengirim pesan ke: ${memberId}`, error);
                failed++;
            }
            await sleep(1000); // Delay 1 detik
        }

        reply(`Push pesan selesai.\nBerhasil: ${success}\nGagal: ${failed}`);
    } catch (error) {
        console.error(error);
        reply('Gagal mendapatkan metadata grup. Pastikan ID grup benar dan bot ada di dalam grup tersebut.');
    }
    break;
}
case 'puskontakgc': {
    if (!isGroup) return reply('Fitur ini hanya bisa digunakan di grup.');
    if (!isCreator) return reply('Hanya owner bot yang dapat menggunakan fitur ini.');
    // Ambil metadata grup
    const groupMetadata = await Rafael.groupMetadata(from);
    const participants = groupMetadata.participants;
    if (!text) return reply('Masukkan pesan yang ingin dikirim.');
    const pesan = text.trim();
    // Database kontak
    let contacts = [];
    for (let member of participants) {
        const memberId = member.id;
        const number = memberId.split('@')[0]; // Nomor telepon
        // Simpan kontak ke database
        contacts.push(number);
        try {
            await Rafael.sendMessage(memberId, { text: pesan });
            console.log(`Pesan berhasil dikirim ke ${memberId}`);
        } catch (error) {
            console.error(`Gagal mengirim pesan ke ${memberId}:`, error);
        }

        // Delay untuk menghindari pemblokiran
        await sleep(1000); // Delay 1 detik
    }

    // Simpan kontak ke file JSON
    const filePathJson = './database/contacts.json';
    fs.writeFileSync(filePathJson, JSON.stringify(contacts, null, 2));
    console.log('Kontak berhasil disimpan ke database JSON.');

    // Simpan kontak ke file vCard
    let vCardData = contacts.map((number) => `
BEGIN:VCARD
VERSION:3.0
FN:${number}
TEL;type=CELL;type=VOICE;waid=${number}:${number}
END:VCARD`).join('\n');
    const filePathVcf = './database/contacts.vcf';
    fs.writeFileSync(filePathVcf, vCardData.trim());
    console.log('Kontak berhasil disimpan ke file .vcf.');

    // Kirim file .vcf ke pengirim
    await Rafael.sendMessage(from, {
        document: fs.readFileSync(filePathVcf),
        fileName: 'Group_Contacts.vcf',
        mimetype: 'text/vcard',
        caption: 'Berikut adalah kontak anggota grup.'
    }, { quoted: m });

    reply('Pesan berhasil dikirim ke seluruh anggota grup dan kontak berhasil disimpan.');
    break;
}
case 'save': {
if (!isCreator) return reply(mess.only.owner)
let t = text.split('|');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} |nama pake garis lurus sebelum nama yah bang Fixenzo | yang kaya gitu`);
let nama = t[0];
let nominal = t[1];
        reply(mess.save)
reply(`𝕊𝕐𝕊𝕋𝔼𝕄 𝕊𝔸𝕍𝔼 𝕆𝕋𝕆𝕄𝔸𝕋𝕀𝕊 𝔻𝕆ℕ𝔼✅

𝕂𝕆ℕ𝕋𝔸𝕂 : ${nominal}

𝕁𝔸ℕ𝔾𝔸ℕ 𝕃𝕌ℙ𝔸 𝕊𝔸𝕍𝔼 𝔹𝔸ℂ𝕂 ${namabot} 𝕐𝕆𝕆`)
}
        break      
        case 'self': {
    if (!isCreator) return reply('Perintah ini hanya dapat digunakan oleh owner.');
    Rafael.public = false;
    reply('Bot sekarang dalam mode *self*.');
    break;
}
case 'public': {
    if (!isCreator) return reply('Perintah ini hanya dapat digunakan oleh owner.');
    Rafael.public = true;
    reply('Bot sekarang dalam mode *public*.');
    break;
}
       case 'infogc': case 'getkontak':
if (!isCreator) return reply(`Khusus Owner Fixenzo`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
huhuhs = await Rafael.sendMessage(m.chat, {
    text: `GRUP: *${groupMetadata.subject}*\nID :* ${groupMetadata.id}\nMEMBER: *${participants.length}\n\n${groupMetadata.desc}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
reply
break
case 'savekontak': {
    if (!isGroup) return reply('Fitur ini hanya dapat digunakan dalam grup.');
    if (!isCreator) return reply('Fitur ini hanya dapat digunakan oleh owner bot.');
    
    // Ambil metadata grup
    const groupMetadata = await Rafael.groupMetadata(from);
    const participants = groupMetadata.participants;

    // Ambil kontak dan simpan ke dalam database
    let contacts = JSON.parse(fs.readFileSync('./database/contacts.json'));

    for (let participant of participants) {
        const contact = participant.id.split('@')[0];  // Ambil nomor WA dari ID
        // Pastikan kontak tidak ada dalam database
        if (!contacts.includes(contact)) {
            contacts.push(contact);
        }
    }

    // Simpan kontak ke dalam file contacts.json
    fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts, null, 2));

    reply(`Berhasil menyimpan ${participants.length} kontak grup ke database.`);
    break;
}
case 'anime': {
    if (!text) return reply(`Gunakan format:\n\n${prefix}anime <judul>\n\nContoh:\n${prefix}anime naruto`);

    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${text}`);
        const data = await response.json();

        if (!data.data || data.data.length === 0) return reply('Anime tidak ditemukan.');

        const anime = data.data[0];
        const info = `
🎥 *Informasi Anime* 🎥
--------------------------------
📌 *Judul*: ${anime.title}
📜 *Sinopsis*: ${anime.synopsis}
⭐ *Rating*: ${anime.score}
📆 *Tanggal Rilis*: ${anime.aired.string}
📺 *Tipe*: ${anime.type}
--------------------------------
        `.trim();

        reply(info);
    } catch (error) {
        console.error(error);
        reply('Maaf, terjadi kesalahan saat mencari informasi anime.');
    }
    break;
}
case "savecontactgc": {
if (!isCreator) return reply(`Khusus Bang Fixenzo`)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadata = isGroup? await Rafael.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
reply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:thomz[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Rafael.sendMessage(sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
        
        
        case 'jpmproduk' : {
    if (!isCreator) return reply('Fitur ini hanya dapat digunakan oleh owner bot.');

    if (!text) return reply('*Tolong masukkan deskripsi/teks produk yang akan dipromosikan,contoh .jpmproduk teks*');

    const productDescription = text.trim(); 
    let getGroups = await Rafael.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
    let groupIds = groups.map((group) => group.id);

    if (groupIds.length === 0) return reply('Tidak ada grup yang terdaftar.');

  
    for (let groupId of groupIds) {
        try {
            await Rafael.sendMessage(groupId, {
                text: `🌟 *PROMOSI PRODUK* 🌟\n\n${productDescription}\n\n*Hubungi owner untuk informasi lebih lanjut*`,
            });
            console.log(`Produk berhasil dipromosikan di grup: ${groupId}`);
        } catch (error) {
            console.error(`Gagal mengirim pesan ke grup: ${groupId}`, error);
        }
    }

    reply('Promosi produk berhasil dikirim ke seluruh grup.');
    break;
}
case 'tiktokdownload': case 'tiktokdl': {
    if (!isCreator) return reply(mess.creator);
    if (!args[0]) return reply(`*Masukkan URL video TikTok yang valid!*`);
    reply('*Sedang memproses, harap tunggu... ☕*');

    try {
        const axios = require('axios');
        const apiURL = `https://devo.apibotwa.biz.id/api/downloader/tiktokdl?url=${encodeURIComponent(args[0])}`;

        const { data } = await axios.get(apiURL);
        if (!data.result) return reply('*Video tidak ditemukan atau URL tidak valid!*');

        const videoData = data.result;
        const resultMessage = `🎥 *Informasi Video TikTok*\n\n` +
                              `*Judul:* ${videoData.title || 'Tidak tersedia'}\n` +
                              `*Durasi:* ${videoData.duration || 'Tidak tersedia'} detik\n` +
                              `*Thumbnail:* [Klik di sini](${videoData.thumbnail || 'Tidak tersedia'})\n\n` +
                              `Proses pengunduhan video...`;

        // Kirim pesan detail video
        await Rafael.sendMessage(from, {
            image: { url: videoData.thumbnail },
            caption: resultMessage,
            footer: 'TikTok Video Downloader',
        }, { quoted: m });

        // Unduh video secara langsung
        const videoBuffer = await axios.get(videoData.video_url, { responseType: 'arraybuffer' });
        await Rafael.sendMessage(from, {
            video: Buffer.from(videoBuffer.data),
            mimetype: 'video/mp4',
            caption: `*Judul:* ${videoData.title || 'Tidak tersedia'}\n*Durasi:* ${videoData.duration || 'Tidak tersedia'} detik`,
            contextInfo: {
                externalAdReply: {
                    title: videoData.title || 'TikTok Video',
                    body: 'Video TikTok Downloader',
                    thumbnailUrl: videoData.thumbnail,
                    sourceUrl: args[0],
                },
            },
        }, { quoted: m });

    } catch (error) {
        console.error("⚠ *Error Saat Memproses Permintaan :*", error.message);
        reply("*Terjadi kesalahan saat memproses video. Silakan coba lagi nanti.*");
    }
}
break;
case 'googlesearch': {
    // Mendapatkan kata kunci pencarian setelah perintah 'googlesearch'
    const argument = message.body.slice('googlesearch'.length).trim(); // Mengambil teks setelah 'googlesearch'
    const searchTerm = argument.trim(); // Mengambil kata kunci pencarian

    if (searchTerm.length === 0) {
        message.reply('Silakan berikan kata kunci untuk pencarian.');
        return;
    }

    try {
        // Mengirimkan permintaan ke API
        const response = await axios.get(`https://api.siputzx.my.id/api/s/googlesearch?q=${encodeURIComponent(searchTerm)}`);

        if (response.data && response.data.results && response.data.results.length > 0) {
            let resultMessage = `Hasil pencarian untuk "${searchTerm}":\n\n`;
            response.data.results.forEach((result, index) => {
                resultMessage += `${index + 1}. ${result.title}\nLink: ${result.link}\n\n`;
            });
            message.reply(resultMessage);
        } else {
            message.reply(`Maaf, tidak ada hasil yang ditemukan untuk "${searchTerm}".`);
        }
    } catch (error) {
        console.error(error);
        message.reply('Terjadi kesalahan saat mencari. Silakan coba lagi nanti.');
    }
    break;
}
			
case "ceknamagc": {
if (!isCreator) return reply(mess.only.owner)
let getGroups = await Rafael.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP BY Fixenzo*\n\n`
for (let x of anu) {
let metadata2 = await Rafael.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ Member : ${metadata2.participants.length}\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case 'ping': case 'botstatus': case 'statusbot': {

				const used = process.memoryUsage()

				const cpus = os.cpus().map(cpu => {
					cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
					return cpu
				})
				const cpu = cpus.reduce((last, cpu, _, { length }) => {
					last.total += cpu.total
					last.speed += cpu.speed / length
					last.times.user += cpu.times.user
					last.times.nice += cpu.times.nice
					last.times.sys += cpu.times.sys
					last.times.idle += cpu.times.idle
					last.times.irq += cpu.times.irq
					return last
				}, {
					speed: 0,
					total: 0,
					times: {
						user: 0,
						nice: 0,
						sys: 0,
						idle: 0,
						irq: 0
					}
				})
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()
				respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}\n\n💻 Info Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_NodeJS Memory Usaage_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
				m.reply(respon)
			}
			break
			case 'spotifysearch': {

				if (!text) return m.reply(`Example: ${prefix + command} alan walker alone`)

				try {
					let hasil = await fetchJson('https://www.bhandarimilan.info.np/spotisearch?query=' + encodeURIComponent(text));
					let txt = hasil.map(a => {
						return `*Name : ${a.name}*\n- Artist : ${a.artist}\n- Url : ${a.link}`
					}).join`\n\n`
					m.reply(txt)
				} catch (e) {
					m.reply('Server Search Offline!')
				}
			}
			break
case "listgroup":{
if (!isOwner) return (`Ngapain ? Khusus RaihanOffc Aja !!`)
let getGroups = await Rafael.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST GROUP BY Fixenzo*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await Rafael.groupMetadata(x)
teks += `❏ Group Ke ${hituet+=1}\n│⭔ *NAMA :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv1 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas`)
}
break
case "cekidgc": {
    // Cek jika pengguna adalah Creator
    if (!isCreator) return reply("Fitur ini hanya bisa digunakan oleh Creator bot!");

    try {
        let getGroups = await Rafael.groupFetchAllParticipating();
        let groups = Object.entries(getGroups).map((entry) => entry[1]);
        let anu = groups.map((v) => v.id);

        let teks = `⬣ *LIST GROUP BY Fixenzo*\n\nTotal Group: ${anu.length} Group\n\n`;

        for (let x of anu) {
            try {
                let metadata2 = await Rafael.groupMetadata(x);
                teks += `◉ Nama: ${metadata2.subject}\n◉ ID: ${metadata2.id}\n◉ Member: ${metadata2.participants.length}\n\n────────────────────────\n\n`;
            } catch (e) {
                teks += `◉ [Gagal mengambil data group ID: ${x}]\n\n`;
            }
        }

        reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`);
    } catch (error) {
        console.error(error);
        reply("Terjadi kesalahan saat mengambil data group. Silahkan coba lagi nanti.");
    }
}
break;
case 'done': {
    let t = text.split(',');
    if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal,sistem`);
    
    let barang = t[0];
    let nominal = t[1];
    let sistem = t[2];
    
    reply(`╔════════════════════╗
     *TRANSAKSI BERHASIL*  
          BY *${global.namaowner}*
╚════════════════════╝

📦 *Barang:* ${barang}  
💵 *Nominal:* Rp${nominal}  
🔧 *Sistem:* ${sistem}  
🏢 *Nama Store:* ${global.namaowner}

━━━━━━━━━━━━

🙏 *TERIMA KASIH TELAH ORDER DI ${global.namaowner}*  
🔁 *JANGAN LUPA ORDER LAGI YA!*  
*🪷GRUP MARKETPLACE :* ${global.gc}

*🪷TESTIMONI SALURAN :* ${global.ch}

━━━━━━━━━━━━`);
}
break;
        case 'delcase': {
if (!isCreator) return reply(`*Access Denied ❌*\n\n*Owners only*`)
if (!q) return reply('*Masukan nama case yang akan di hapus*')

dellCase('./case.js', q)
reply('*Dellcase Successfully*\n\n© Dellcase By Fixenzo')
}
break
case 'antilink': {
    if (!m.isGroup) return reply('⚠️ Fitur ini hanya dapat digunakan di grup.');

    // Validasi hak akses
    if (!isAdmins && !isCreator) return reply('⚠️ Hanya admin grup yang dapat mengaktifkan fitur ini.');

    // Inisialisasi global.db.chats jika belum ada
    global.db = global.db || {};
    global.db.chats = global.db.chats || {};
    global.db.chats[m.chat] = global.db.chats[m.chat] || { antilink: false };

    const args = text.toLowerCase();

    if (args === 'on') {
        global.db.chats[m.chat].antilink = true;
        reply('✅ Fitur AntiLink berhasil diaktifkan. Tautan akan dihapus secara otomatis.');
    } else if (args === 'off') {
        global.db.chats[m.chat].antilink = false;
        reply('✅ Fitur AntiLink berhasil dinonaktifkan.');
    } else {
        reply(`⚠️ Gunakan perintah:\n${prefix}antilink on\natau\n${prefix}antilink off`);
    }
    break;
}
case 'playyt': {
const ytdl = require('@distube/yt-dlp');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const Buffer = (await import('buffer')).Buffer;
const yts = require('yt-search');

  if (!text) return m.reply(`ex: .play bloody marry`)
  
  const downloadAudio = async (url, bitrate) => {
    const info = await ytdl.getInfo(url);
    const audioFormat = ytdl.chooseFormat(info.formats, {
        quality: 'highestaudio',
        filter: 'audioonly'
    });

    if (!audioFormat) {
        throw new Error(`Tidak ditemukan format audio`);
    }

    const audioPath = path.join('/tmp', `audio_${Date.now()}.mp3`);
    const tempAudioPath = path.join('/tmp', `temp_audio_${Date.now()}.mp3`);

    await new Promise((resolve, reject) => {
        ytdl(url, {
                format: audioFormat
            })
            .pipe(fs.createWriteStream(tempAudioPath))
            .on('finish', resolve)
            .on('error', reject);
    });

    return new Promise((resolve, reject) => {
        ffmpeg(tempAudioPath)
            .audioCodec('libmp3lame')
            .audioBitrate(bitrate)
            .save(audioPath)
            .on('end', async () => {
                await fs.promises.unlink(tempAudioPath); // Remove temp audio file
                const stats = await fs.promises.stat(audioPath);
                if (stats.size > MAX_FILE_SIZE) {
                    throw new Error(`Ukuran file melebihi batas 10 GB`);
                }
                resolve(audioPath);
            })
            .on('error', reject);
    });
};
  
        const search = await yts(text);
        const videoUrl = search.all[0].url;
        if (!videoUrl) return m.reply("Lagu tidak ditemukan.");

const MAX_FILE_SIZE = 10 * 1024 * 1024 * 1024; // 10 GB
const MIN_DOC_SIZE = 100 * 1024 * 1024; // 100 MB

    try {
        const extractVid = (data) => {
            const match = /(?:youtu\.be\/|youtube\.com(?:.*[?&]v=|.*\/))([^?&]+)/.exec(data);
            return match ? match[1] : null;
        };

        const info = async (link) => {
            let id = await extractVid(link);
            const {
                title,
                description,
                url,
                videoId,
                seconds,
                timestamp,
                views,
                genre,
                uploadDate,
                ago,
                image,
                thumbnail,
                author
            } = await yts({
                videoId: id
            });
            return {
                title,
                description,
                url,
                videoId,
                seconds,
                timestamp,
                views,
                genre,
                uploadDate,
                ago,
                image,
                thumbnail,
                author
            };
        };

        let res = await info(videoUrl);
        const audioPath = await downloadAudio(videoUrl, '320');
        const stats = await fs.promises.stat(audioPath);

        let cap = `*[ Ytmp3 Downloader ]*

*• Name:* ${res.title}
*• Author:* ${res.author.name}
*• Profile Author:* ${res.author.url}
*• Durasi:* ${res.timestamp}
*• Views:* ${res.views}
*• Upload Video:* ${res.uploadDate}
*• Bitrate:* 320 kbps
*• Description:* ${res.description}`;

        let sending = `*[ Downloader Audio Youtube ]*
        
*• Name:* ${res.title}
*• Author:* ${res.author.name}
*• Profile Author:* ${res.author.url}
*• Durasi:* ${res.timestamp}
*• Views:* ${res.views}
*• Upload Video:* ${res.uploadDate}
*• Bitrate:* 320 kbps

*_Please Wait For Sending Audio....._*`;

        if (stats.size > MIN_DOC_SIZE) { // 100 MB
            await Rifky.sendFile(m.chat, res.image, null, sending, m);
            await sleep(3000);
            await Rifky.sendMessage(m.chat, {
                document: {
                    url: audioPath
                },
                mimetype: 'audio/mpeg',
                fileName: res.title + ".mp3",
                caption: cap
            }, {
                quoted: m
            });
            await fs.promises.unlink(audioPath);
        } else {
            await Rifky.sendFile(m.chat, res.image, null, sending, m);
            await sleep(3000);
            await Rifky.sendMessage(m.chat, {
                audio: {
                    url: audioPath
                },
                mimetype: "audio/mpeg",
                fileName: res.title,
            }, {
                quoted: m
            });
            await fs.promises.unlink(audioPath);
        }
    } catch (e) {
        console.error('Error downloading audio:', e);
        m.reply(`Terjadi kesalahan saat mengunduh audio: ${e.message}`);
    }
    }
    break
case 'sticker': case 'stiker': case 's': case 'stickergif': case 'stikergif': case 'sgif': case 'stickerwm': case 'swm': case 'curi': case 'colong': case 'take': case 'stickergifwm': case 'sgifwm': {

				if (!/image|video|sticker/.test(quoted.type)) return m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Image/Video/Gif 1-9 Detik`)

				let media = await quoted.download()
				let teks1 = text.split`|`[0] ? text.split`|`[0] : ''
				let teks2 = text.split`|`[1] ? text.split`|`[1] : ''
				if (/image|webp/.test(mime)) {
					m.reply(mess.wait)
					await Rafael.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
				} else if (/video/.test(mime)) {
					if ((qmsg).seconds > 11) return m.reply('Maksimal 10 detik!')
					m.reply(mess.wait)
					await Rafael.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
				} else {
					m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
				}
			}
			break


case 'addcase': {
 if (!isCreator) return reply('lu sapa asu')
 if (!text) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = 'case.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case 'gimage': {
reply('pajangan')
}
break
case 'done2':
    if (args.length < 2) {
        Rafael.sendMessage(from, { text: "❌ Format salah! Gunakan: .done [barang],[harga]" });
        break;
    }

    const transactionArgs = args.join(" "); 
    const [item, price] = transactionArgs.split(",");
    if (!item || !price) {
        Rafael.sendMessage(from, { text: "❌ Format salah! Gunakan: .done2 [barang],[harga]" });
        break;
    }
    const transactionId = `fid${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    const date = new Date().toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const imagePath = './media/sigma.jpg'; 
    const caption = `🎉 *TRANSAKSI BERHASIL!* 🎉\n\n` +
                    `📄 *Detail Transaksi:*\n` +
                    `• *ID Transaksi*: _${transactionId}_\n` +
                    `• *Barang*: _${item.trim()}_\n` +
                    `• *Harga*: _Rp ${parseInt(price.trim()).toLocaleString("id-ID")},00_\n` +
                    `• *Tanggal Pembelian*: _${date}_\n\n` +
                    `📌 *Pesan:* _Terima kasih telah mempercayai layanan kami! Semoga Anda puas dengan produk kami._\n\n` +
                    `💬 *Butuh Bantuan?* Hubungi admin melalui tombol di bawah ini:\n`;

    await Rafael.sendMessage(from, {
        image: { url: imagePath },
        caption: caption,
        footer: "Fixenzo",
        buttons: [
            { buttonId: "help_admin", buttonText: { displayText: "💡 Hubungi Admin" }, type: 1 },
            { buttonId: "order_more", buttonText: { displayText: "🛒 Order Lagi" }, type: 1 },
        ],
        headerType: 4, 
    });
    break;
case 'payment':{
const owned = `${owner}@s.whatsapp.net`
let rsm = `┏━━━━━━━━━━━━━━━━━━━━━┓  
┃      *PAYMENT BY FIXENZO*      ┃  
┗━━━━━━━━━━━━━━━━━━━━━┛  

📌 *Metode Pembayaran:*  
• *DANA* : ${global.dana}
• *OVO*  : ${global.ovo}
• *GOPAY*: ${global.gopay}
• *QRIS* : Silakan ketik *.qris* untuk melihat QR Code  

💡 *Catatan:*  
Ketik *.proses* setelah pembayaran agar pesanan Anda segera diproses oleh tim kami.  

✨ *Terima kasih telah berbelanja di Fixenzo!*`
Rafael.sendMessage(from, { image: { url: `https://telegra.ph/file/21f63a0caa3d3add04256.jpg` }, caption: `${rsm}` }, { quoted: m })
}
break
case 'tiktok': case 'tiktokdown': case 'ttdown': case 'ttdl': case 'tt': case 'ttmp4': case 'ttvideo': case 'tiktokmp4': case 'tiktokvideo': {
    if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`);

    // Fungsi untuk mendapatkan URL asli jika URL berupa vt.tiktok.com
    const unshortenUrl = async (shortUrl) => {
        try {
            const axios = require('axios');
            const response = await axios.head(shortUrl, {
                maxRedirects: 0,
                validateStatus: status => status >= 300 && status < 400
            });
            return response.headers.location; // URL asli dari short URL
        } catch (e) {
            throw new Error('Gagal mendapatkan URL asli.');
        }
    };

    try {
        // Periksa jika URL adalah short URL (vt.tiktok.com)
        let finalUrl = text;
        if (text.includes('vt.tiktok.com')) {
            finalUrl = await unshortenUrl(text); // Ubah ke URL asli
        }

        if (!finalUrl.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!');

        // Jalankan fungsi downloader TikTok
        const hasil = await tiktokDl(finalUrl);
        m.reply(mess.wait);

        if (hasil && hasil.size_nowm) {
            await Rafael.sendFile(
                m.chat,  // ID chat
                hasil.data[0].url,  // URL video
                `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`,  // Caption
                m  // Objek pesan yang dikutip
            );
        } else {
            for (let i = 0; i < hasil.data.length; i++) {
                await Rafael.sendFile(
                    m.chat,  // ID chat
                    hasil.data[i].url,  // URL video/gambar
                    `*🚀File:* ${i + 1}`,  // Caption
                    m  // Objek pesan yang dikutip
                );
            }
        }
    } catch (e) {
        console.error(e); // Log kesalahan di console
        m.reply('Gagal/Url tidak valid!');
    }
}
break;
case 'brat': {
  if (!text) return reply(`Penggunaan : ${prefix + command} <teks>`);

  try {
    const { createCanvas, registerFont } = require('canvas');
    const Jimp = require('jimp');
    
    registerFont('./lib/arialnarrow.ttf', { family: 'ArialNarrow' }); // Sesuaikan fontnya dan lokasi fontnya 

    const canvas = createCanvas(512, 512);
    const ctx = canvas.getContext('2d');

    // Set background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Function to find optimal font size
    const findOptimalFontSize = (text, maxWidth, maxHeight) => {
      let fontSize = 280;
      ctx.font = `bold ${fontSize}px ArialNarrow`; // Gunakan font yang sudah didaftarkan
      
      const words = text.split(' ');
      let lines = [];

      while (fontSize > 0) {
        lines = [];
        let currentLine = [];
        let currentWidth = 0;
        ctx.font = `bold ${fontSize}px ArialNarrow`; // Gunakan font yang sudah didaftarkan

        for (const word of words) {
          const wordWidth = ctx.measureText(word + ' ').width;
          if (currentWidth + wordWidth <= maxWidth) {
            currentLine.push(word);
            currentWidth += wordWidth;
          } else {
            if (currentLine.length > 0) {
              lines.push(currentLine);
            }
            currentLine = [word];
            currentWidth = wordWidth;
          }
        }
        if (currentLine.length > 0) {
          lines.push(currentLine);
        }

        const totalHeight = lines.length * (fontSize + 10);
        if (totalHeight <= maxHeight) {
          break;
        }
        fontSize -= 2;
      }
      return { fontSize, lines };
    };

    // Calculate optimal font size and line arrangement
    const padding = 48;
    const maxWidth = canvas.width - (padding * 2);
    const maxHeight = canvas.height - (padding * 2);
    const { fontSize, lines } = findOptimalFontSize(q, maxWidth, maxHeight);

    // Draw justified text
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${fontSize}px ArialNarrow`; // Gunakan font yang sudah didaftarkan
    
    const lineHeight = fontSize + 10;
    const totalHeight = lines.length * lineHeight;
    const startY = (canvas.height - totalHeight) / 2 + fontSize / 2;

    lines.forEach((line, i) => {
      if (i === lines.length - 1 && line.length === 1) {
        // If it's the last line with single word, center it
        ctx.textAlign = 'center';
        ctx.fillText(line.join(' '), canvas.width / 2, startY + (i * lineHeight));
      } else {
        // Justify text
        const totalSpacing = maxWidth - line.reduce((acc, word) => acc + ctx.measureText(word).width, 0);
        const spaceBetween = line.length > 1 ? totalSpacing / (line.length - 1) : 0;
        
        let currentX = padding;
        line.forEach((word, j) => {
          ctx.fillText(word, currentX, startY + (i * lineHeight));
          currentX += ctx.measureText(word).width + spaceBetween;
        });
      }
    });
const buffer = canvas.toBuffer();
let image = await Jimp.read(buffer);

image.blur(2);
let blurredBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
    
    await Rafael.imgToSticker(m.chat, blurredBuffer, m, { packname: "Fixenzo", author: "Fixenzo" })

  } catch (e) {
    console.log(e);
    await reply(`Terjadi kesalahan saat membuat stiker`);
  }
}
break
case 'ai': {
    if (!q) return m.reply(`*Nanya Apa?*`);

    if (/image|gambar/.test(mime)) {
        const media = await Wan.downloadAndSaveMediaMessage(quoted);
        let anu = await shannzCdn(media); // Sesuaikan Dengan Uploader Kalian.
        const data = await fetchJson(`https://btch.us.kg/bardimg?url=${anuu.result.url}&text=${encodeURIComponent(q)}`);
        const aimsg = data.result;
        return await m.reply(aimsg);
    }    
    else if (/video|tiktok/.test(q)) {
        const wann = await (await fetch('https://api.siputzx.my.id/api/s/tiktok?query=' + q)).json();
        if (wann.data && wann.data.length > 0) {
            let videoUrl = wann.data[0].play;
            let title = wann.data[0].title;
            await Wan.sendMessage(m.chat, { video: { url: videoUrl }, caption: title }, { quoted: m });
        }
    }
    else if (/carikan|cari|buatkan|img/.test(q)) {
        const anu = await (await fetch('https://btch.us.kg/bingimg?text=' + encodeURIComponent(q))).json();
        if (anu.status && anu.result && anu.result.length > 0) {
            for (let i = 0; i < anu.result.length; i++) {
                await Rafael.sendMessage(m.chat, {
                    image: { url: anu.result[i] },
                    caption: `🔮 *Hasil Image ke-${i + 1}*`
                }, { quoted: m });
            }
        }
    }
    else if (/music|musik|play|putarkan/.test(q)) {
    let search = await yts(q);
    let firstVideo = search.all[0];
    let wann = await fetchJson(`https://api.vreden.my.id/api/ytmp3?url=${firstVideo.url}`);
    let data = wann.result;
    
    if (data.status) {
        let audioUrl = data.download.url;
        let audioTitle = data.metadata.title;
        let audioThumbnail = data.metadata.thumbnail || "https://example.com/default_thumbnail.jpg";

        await Wan.sendMessage(m.chat, {
            audio: {
                url: audioUrl
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: audioTitle || "Untitled",
                    body: `${botname}`,
                    sourceUrl: data.metadata.url,
                    thumbnailUrl: audioThumbnail,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    }
  }
    else {
        var wanz = await fetchJson(`https://btch.us.kg/openai?text=${encodeURIComponent(q)}`);
        var wan = wanz.result;
        await m.reply(wan);
    }
}
break
case 'facebook': case 'fb':{
if (!text) return m.reply(`Link Nya?`)
await Wan.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{   
let wann = await fetchJson(`https://api.siputzx.my.id/api/d/facebook?url=${text}`)
Wan.sendMessage(m.chat, { video: { url: wann.data.video }, caption: `_Sukses Mengunduh Video_` }, { quoted: m })
await Rafael.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})  
}catch (error) {
await Rafael.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
case 'proses': {
    m.reply('*Pesanan Anda sedang kami proses. Mohon menunggu sebentar, ya.*');
    
    haikal.sendMessage(owner + "@s.whatsapp.net", {
        text: "OY Fixenzo kun, ada pesanan baru. Segera proses sebelum pembeli marah.",
        contextInfo: { 
            forwardingScore: 9999, 
            isForwarded: true 
        }
    });
}
break;
case 'heroml': {
    if (!text) return reply('example .heroml zilong');
    try {
        let ml = await fetchJson(`https://api.vreden.my.id/api/Hero?query=${text}`);
        await Rafael.sendMessage(m.chat, { 
            image: { url: ml.anu.hero_img }, 
            caption: `Name Hero: ${text}
Rilis: ${ml.anu.release}
Role: ${ml.anu.role}
Special: ${ml.anu.specialty}
Lane: ${ml.anu.lane}
Price: ${ml.anu.price}
GameplayInfo: 
durability: ${ml.anu.gameplay_info.durability}
offense: ${ml.anu.gameplay_info.offense}
control_effect: ${ml.anu.gameplay_info.control_effect}
difficulty: ${ml.anu.gameplay_info.difficulty}`
        }, { quoted : fVerif });
    } catch (error) {
        console.error(error);
        reply('Error fetching hero information. . try again later.');
    }
}
break
case 'wanted': {
  if (!quoted) return reply(`Where is the picture?`);
  if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`);
  
  reply("sabar");
  
  try {
    // Download the quoted media
    let media = await Rafael.downloadAndSaveMediaMessage(quoted);
    // Upload the media to get a URL
    let anu = await TelegraPh(media);
    // Fetch the wanted image from the API
    let response = await fetch(`https://api.vreden.my.id/api/wanted?url=${anu}`);
    let data = await response.json();
    let wantedUrl = data.result; // Make sure this is the correct property in the API response

    // Send the wanted image
    await Rafael.sendMessage(m.chat, { image: { url: wantedUrl }, caption: "succes" }, { quoted: fVerif });
  } catch (error) {
    console.error(error);
    reply('An error occurred while processing your request.');
  }
}
break
case 'totalfitur':
case 'totalfeature':{
let fitur = `
*TOTAL FEATURE*

• BerJumlah ${totalFitur()} Fitur\n*Tipe :* Case

Silahkan ketik *.menu* untuk
Menampilkan menu utama`
reply(fitur)
}
break
case 'play1': {
    if (!text) return reply('INPUT YOUR TITLE!!');

    try {
        let search = await yts(text);
        let firstVideo = search.all[0];
        let wann = await fetchJson(`https://api.siputzx.my.id/api/d/ytmp3?url=${firstVideo.url}`);
        let data = wann;
        await Rafael.sendMessage(m.chat, {
            audio: {
                url: data.url
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: data.title || "Untitled",
                    body: `${botname}`,
                    sourceUrl: data.videoUrl,
                    thumbnailUrl: data.thumbnail || "https://example.com/default_thumbnail.jpg",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    } catch (e) {
        console.error(e);
        return reply('Terjadi kesalahan saat memproses permintaan.');
    }
}
break
case 'txt2img':{
if (!text) return reply('Example: .txt2img Prompt')
let anu = `https://api.vreden.my.id/api/text2img?query=${text}`
await Rafael.sendMessage(m.chat, {image: {url:anu}, caption: `*< Success >*\n\n*Prompt :* ${text}`},{quoted: fVerif})
}
break
case 'spotifydownload': case 'spotifydl': {
    if (!isCreator) return reply(mess.creator);
    if (!args[0]) return reply(`*Masukkan URL lagu Spotify yang valid!*`);
    reply('*Sedang memproses, harap tunggu... ☕*');

    try {
        const axios = require('axios');
        const apiURL = `https://api.siputzx.my.id/api/d/spotify?url=${encodeURIComponent(args[0])}`;

        const { data } = await axios.get(apiURL);
        if (!data.status) return lenwyreply('*Lagu tidak ditemukan!*');

        const track = data.metadata;
        const resultMessage = `🎵 *Informasi Lagu*\n\n` +
                              `*Judul:* ${track.name}\n` +
                              `*Album:* ${track.album_name}\n` +
                              `*Artis:* ${track.artist}\n` +
                              `*Tanggal Rilis:* ${track.releaseDate}\n` +
                              `*Nomor Track:* ${track.trackNumber}\n\n` +
                              `🔗 *[Dengarkan di Spotify](${track.url})*\n` +
                              `Proses pengunduhan lagu...`;

        // Kirim pesan detail lagu
        await Rafael.sendMessage(from, {
            image: { url: track.cover_url },
            caption: resultMessage,
            footer: 'Spotify Track Downloader',
        }, { quoted: m });

        // Unduh audio secara langsung
        const audioBuffer = await axios.get(data.download, { responseType: 'arraybuffer' });
        await Rafael.sendMessage(from, {
            audio: Buffer.from(audioBuffer.data),
            mimetype: 'audio/mpeg',
            fileName: `${track.name}.mp3`,
            caption: `*Judul:* ${track.name}\n*Artis:* ${track.artist}`,
            contextInfo: {
                externalAdReply: {
                    title: track.name,
                    body: track.artist,
                    thumbnailUrl: track.cover_url,
                    sourceUrl: track.url,
                },
            },
        }, { quoted: m });

    } catch (error) {
        console.error("⚠ *Error Saat Memproses Permintaan :*", error.message);
        reply("*Terjadi kesalahan saat memproses lagu. Silakan coba lagi nanti.*");
    }
}
break
case 'ssweb': {

				if (!text) return m.reply(`Example: ${prefix + command} https://github.com/Fixendev/Fixen-md`)

				try {
					let anu = 'https://' + text.replace(/^https?:\/\//, '')
					await Rafael.sendMessage(m.chat, { image: { url: 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + anu }, caption: 'Done' }, { quoted: m })
				} catch (e) {
					m.reply('Server SS web Sedang Offline!')
				}
			}
			break
case 'update':
case 'updatelist':
if (!m.isGroup) return ('hanya di dalam grup')
if (!isAdmins) return ('khusus admin')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return m.reply(`Gunakan Dengan Cara ${prefix+command} Key|Respon\n\nContoh: ${prefix+command} Tes|Apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Maaf, Tuk Key *${args1}* Belum Terdaftar Digrup Ini!`)
if (/image/.test(mime)) {
let media = await nw.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Berhasil Update Respon List Dengan Key *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`Berhasil Update Respon List Dengan Key *${args1}*`)
}
break
case 'hidetag': case 'h': {

				if (!m.isGroup) return m.reply(mess.group)

				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				Rafael.sendMessage(m.chat, { text : q ? q : '' , mentions: m.metadata.participants.map(a => a.id)}, { quoted: m })
			}
			break
			case 'anticall':
case 'autobio':
case 'autoread':
case 'autotyping':
case 'readsw':
case 'multiprefix': {
    // Ambil teks setelah command
    let args = text.trim().split(' '); // Misalnya ".anticall on" jadi ['.anticall', 'on']
    let feature = command.replace('.', '').toLowerCase(); // Hapus titik di awal command
    
    // Validasi input
    if (args.length < 2 || (args[1] !== 'on' && args[1] !== 'off')) {
        return m.reply(`*Format salah! Gunakan ${feature} on/off*`);
    }

    let status = args[1].toLowerCase();

    // Mengatur status fitur
    if (status === 'on') {
        if (set[feature]) return m.reply(`*${feature} sudah aktif sebelumnya!*`);
        set[feature] = true;
        m.reply(`*${feature} berhasil diaktifkan!*`);
    } else if (status === 'off') {
        if (!set[feature]) return m.reply(`*${feature} sudah nonaktif sebelumnya!*`);
        set[feature] = false;
        m.reply(`*${feature} berhasil dinonaktifkan!*`);
    }
    break;
}
case 'setgoodbye': {
    if (!isCreator (m.sender)) {
        return m.reply('*Hanya creator yang bisa menggunakan perintah ini!*');
    }

    let args = text.trim().split(' ');

    if (args.length < 2) {
        return m.reply('*Format salah! Gunakan: setgoodbye [pesan]*');
    }

    let goodbyeMessage = text.substring(text.indexOf(' ') + 1);
    set.goodbyeMessage = goodbyeMessage;
    m.reply(`*Pesan perpisahan berhasil diubah menjadi: ${goodbyeMessage}*`);
    break;
}
case 'list': {
if (db_respon_list.length === 0) return m.reply(`Belum Ada List Respon Didalam Database!`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Belum Ada List Respon Didalam Grup Ini!`)
let teks = `Halo ${pushname}, Berikut Adalah List Respon Digrup Ini.\n\n`
for (let i of db_respon_list) {
if (i.id === m.chat) {
teks += `- ${i.key.toUpperCase()}\n`
}
}
teks += `\n\n*Untuk Melihat Detail Produk, Silahkan Kirim Nama Produk Yang Ada Didalam List Respon*. Misal ${db_respon_list[0].key.toUpperCase()}, Maka Kirim Pesan ${db_respon_list[0].key.toUpperCase()} Kepada Bot`
Rafael.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m}) 
}
break
case 'addlist':
if (!m.isGroup) return ('hanya di dalam grup')
if (!isAdmins) return ('khusus admin')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return m.reply(`Gunakan Dengan Cara ${prefix+command} Key|Respon\n\nContoh: ${prefix+command} Tes|Apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return m.reply(`List Respon Dengan Key: ${args1}\nSudah Ada Digrup Ini!`)
if (/image/.test(mime)) {
let media = await nw.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Sukses Add List Respon\nKey: ${args1}`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`Sukses Add List Respon\nKey: ${args1}`)
}
break
case 'jadwalsholat': {
    if (!text) return reply(`Gunakan format:\n\n${prefix}jadwalsholat <kota>\n\nContoh:\n${prefix}jadwalsholat jakarta`);

    try {
        const city = text.toLowerCase();
        const response = await fetch(`https://api.myquran.com/v1/sholat/jadwal/${city}`);
        const result = await response.json();

        if (result.status !== 'OK') return reply('Maaf, kota tidak ditemukan.');

        const jadwal = result.data.jadwal;
        const pesan = `
🕌 *Jadwal Sholat untuk Kota ${city.toUpperCase()}* 🕌
--------------------------------
📆 Tanggal: ${jadwal.tanggal}
⏰ Subuh: ${jadwal.subuh}
⏰ Dzuhur: ${jadwal.dzuhur}
⏰ Ashar: ${jadwal.ashar}
⏰ Maghrib: ${jadwal.maghrib}
⏰ Isya: ${jadwal.isya}
        `.trim();
        reply(pesan);
    } catch (error) {
        console.error(error);
        reply('Maaf, terjadi kesalahan. Pastikan nama kota sudah benar.');
    }
    break;
}
case 'gfl': case "gantifile":{
if (!isCreator) return reply(global.mess.owner)
if (!text.includes("./")) return reply(`*• Example* : ${prefix + command} ./package.json`)
let files = fs.readdirSync(text.split(m.quoted.fileName)[0])
if (!files.includes(m.quoted.fileName)) return reply("File not found") 
let media = await downloadContentFromMessage(m.quoted, "document")
let buffer = Buffer.from([])
for await(const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(text, buffer)
reply(`Mengupload`)
await delay(2000)
reply(`Berhasil mengganti file ${q}`)
}
break

case 'dellist':
if (!m.isGroup) return ('hanya di dalam grup')
if (!isAdmins) return ('khusus admin')
if (db_respon_list.length === 0) return m.reply(`Belum Ada List Respon Didalam Database!`)
if (!text) return m.reply(`Gunakan Dengan Cara ${prefix+command} Key\n\nContoh: ${prefix+command} Tes`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return m.reply(`List Respon Dengan Key: ${q}\nTidak Ada Didalam Grup Ini!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
m.reply(`Sukses Del List Respon Dengan Key: ${q}`)
break
case 'cuaca': case 'weather': {

				if (!text) return m.reply(`Example: ${prefix + command} jakarta`)

				try {
					let data = await fetchJson(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`)
					m.reply(`*🏙 Cuaca Kota ${data.name}*\n\n*🌤️ Cuaca :* ${data.weather[0].main}\n*📝 Deskripsi :* ${data.weather[0].description}\n*🌡️ Suhu Rata-rata :* ${data.main.temp} °C\n*🤔 Terasa Seperti :* ${data.main.feels_like} °C\n*🌬️ Tekanan :* ${data.main.pressure} hPa\n*💧 Kelembapan :* ${data.main.humidity}%\n*🌪️ Kecepatan Angin :* ${data.wind.speed} Km/h\n*📍Lokasi :*\n- *Bujur :* ${data.coord.lat}\n- *Lintang :* ${data.coord.lon}\n*🌏 Negara :* ${data.sys.country}`)
				} catch (e) {
					m.reply('Kota Tidak Di Temukan!')
				}
			}
			break
case "sc":  case "scripr": {
    const textScript = `
╔══✪〘 *INFORMASI SCRIPT* 〙✪══╗
┃  
┃ 📄 *Nama Script*: *Auto Sender WA*
┃ 📝 *Deskripsi*:  
┃     *Dilarang Keras Menjual Script ini
┃  Free dan tidak untuk dijual,Untuk Sc nya bisa cek yt : Fixenzo*
┃  
┃ ⚙️ *Fungsi Utama*:  
┃     ✅ Kirim pesan ke kontak/grup  
┃     ✅ Log aktivitas pengiriman  
┃     ✅ Mudah dikonfigurasi  
┃  
┃ 🔗 *Link Download*:  
┃     [Klik di sini] https://youtube.com/@fixenzoo?si=Y1PgLBllRbHzVr7u
┃  
┃ 📌 *Panduan Instalasi*:  
┃     1. Install Termux & Node.js  
┃     2. cd /storage/emulated/0/download/SC_MU
┃     3. Konfigurasi file config.json  
┃     4. Jalankan: *node iyan.js*  
┃  
┃ 💡 *Support*:  
┃     Hubungi admin jika ada kendala!  
┃  
╚══✪〘 *TERIMA KASIH* 〙✪══╝
    `;
    reply(textScript);
}
break;
case "yt": {
const text12 = ` BERIKUT LINK YT KU JNGN LUPA DI SUBSCRIBE https://www.youtube.com/@Fixenzo`
reply(text12)
}
break
case 'qris':{
let tekssss = `SCAN QRIS DI ATAS
`
Rafael.sendMessage(from, { image: fs.readFileSync(`./media/qris.jpg`),
 caption: tekssss, 
footer: `022`},
{quoted: fVerif})
}
break

case 'linkgroup': case 'linkgc': case 'link': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) reply(mess.botAdmin)
let response = await Rafael.groupInviteCode(m.chat)
reply(`https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'kick': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await Rafael.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('*_Success ✅_*')
}
break
case 'add': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await Rafael.groupParticipantsUpdate(m.chat, users, 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('*_Success ✅_*')
}
break
case 'promote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await Rafael.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('*_Success ✅_*')
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await Rafael.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('*_Success ✅_*')
}
break
case 'tagall': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
Rafael.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'autoai': {
if (!text) throw `*• Example:* .autoai *[on/off]*`;
if (text == "on") {
     Rafael.elxyz[m.chat] = {
            pesan: []
        }
        m.reply("[ ✓ ] Success create session chat")
    } else if (text == "off") {
        delete Rafael.elxyz[m.chat]
        m.reply("[ ✓ ] Success delete session chat")
    }
}
break
case "tts": {
  if (!text) return m.reply("Contoh penggunaan: *.tts en Hello, how are you?*");
  
  let [lang, ...words] = text.split(" ");
  if (!lang) return m.reply("Silakan masukkan kode bahasa, contoh: en, id, es.");
  if (!words.length) return m.reply("Silakan masukkan teks yang ingin diubah menjadi audio.");

  const textToConvert = words.join(" ");

  try {
   
    const gttsURL = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&q=${encodeURIComponent(textToConvert)}&client=tw-ob`;
    
    m.reply("Sebentar, sedang memproses audio...");
    
    Rafael.sendMessage(m.chat, { audio: { url: gttsURL }, mimetype: 'audio/mpeg' }, { quoted: m });
  } catch (e) {
    console.error(e);
    m.reply("Terjadi kesalahan saat memproses audio.");
  }
}
break
case 'owner': {
    const ownerInfo = `
👑 *Informasi Owner* 👑
--------------------------------
📌 *Nama Owner*: ${global.namaowner}
📞 *Kontak*: ${global.ownNumb} 
🌍 *Website*: -
📝 *Bio*: ${global.info}
--------------------------------
Untuk pertanyaan lebih lanjut,langsung ke owner aja cuy,Stay Mewing and Skibidi
    `.trim();

    reply(ownerInfo);
    break;
}
 case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!isCreator) return reply(mess.owner)
Rafael.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
default:
if (body.startsWith('>')) {
if(!isCreator) return reply(`*[ System Notice ]* cannot access`)
try {
let evaled = await eval(body.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
Rafael.elxyz = Rafael.elxyz ? Rafael.elxyz : {};
if (m.isBaileys && m.fromMe) return;
if (!m.text) return
if (!Rafael.elxyz[m.chat]) return;      
const prompt = m.text;
let sessions = {};
let aiStatus = {};
if (!prompt || prompt.startsWith('/'))
  if (!Rafael.elxyz[m.chat]) return;

  console.log(`[${moment().format('HH:mm')}] from @${pushname}: ${prompt}`);

  try {
    const now = moment().tz('Asia/Jakarta');
    const jam = now.format('HH:mm');
    const tgl = now.format('DD-MM-YYYY');
    const hari = now.format('dddd');
    let postData = {
    prompt: prompt,
    sessionId: `${m.sender}`,
    character: `kamu adalah Rian, kamu merupakan ai yang di ciptakan oleh Fixenzo, ubah cara bicaramu menjadi kekinian namun tetap sopan, @6289602321521 adalah Rafael, jika dia bicara padamu ubah cara bicaramu menjadi manja, kamu di program untuk membantu manusia dalam menyelesaikan masalah, kamu menyebut dirimu itu caca`
};

    let response = await axios({
        url: "https://elxyz.me/api/chat",
        method: 'POST',
        data: new URLSearchParams(Object.entries(postData)),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    rafaelbut(response.data.data.answer)
} catch (error) {
    console.error("Error during chat request:", error);
    return "An error occurred during the chat process.";
}

if (body.startsWith('$')){
if(!isCreator) return reply(`*[ System Notice ]* cannot access`)
qur = body.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply795(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (body.startsWith('<')) {
if(!isCreator) return reply(`*[ System Notice ]* cannot access`)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

}
} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
