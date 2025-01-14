
    //General Settings 
global.prefa = ['','!','.',',','🐤','🗿']
global.owner = "6289602321521" // ubah pake no mu
global.ownNumb = "6289602321521" // sama pake no mu
global.namebot = "Fixenzo - Store" // nama bot mu
global.namaowner = "𝐅𝐢𝐱𝐞𝐧𝐳𝐨" // nama owner/dirimu
global.dana = "089602321521"
global.gopay = "Gk ada"
global.ovo = "Gk ada"
// nie no buat payment kalau gk punya bisa kosongin aja
global.gc = 'https://chat.whatsapp.com/CG9NNvTIiIDI1wWuKlSvEA'
// masukan link gc mu
global.ch ='https://whatsapp.com/channel/0029ValLxIw9xVJewuwoqB1G'
// masukan link ch wa mu
global.web = "https://api.rafaellzy.xyz" //terserah mau diubah kalau punyaweb ny mah
global.idsal = "120363324304575280@newsletter" // id saluranmu
global.info = "Fixenzo Official Youtube Channel"

global.mess = {
    success: 'Success ✓',
    done: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot harus jadi admin dulu wak!',
    owner: 'Fitur Khusus Owner',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor Owner',
    wait: 'Sabar ya sedang proses',
    band: 'kamu telah di banned oleh owner\nminta unbanned ke owner agar bisa menggunakan fitur bot lagi',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    error: "*Maaf fitur sedang Error*",
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})