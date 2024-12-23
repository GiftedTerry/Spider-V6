//Bot by 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒//


require("./all/module")
global.owner = "2349122128803" 
global.namaCreator = "Successful Terry💵🚬" 
global.autoJoin = false 
global.antilink = true 
global.versisc = '6.0' 
global.codeInvite = "https://whatsapp.com/channel/0029VaR2hFSFXUuYmxbRy83Q"
global.isLink = 'https://whatsapp.com/channel/0029VaR2hFSFXUuYmxbRy83Q'
global.sessionName = 'session'
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "Successful Terry💵🚬" 
global.author = "Successful Terry 💵🚬" 
global.jumlah = "5" 
global.namabot = "Successful Terry💵🚬" 
global.domain = 'https://wa.me/+2349122128803' // your domian
global.apikey = 'ptla_VRxkhvalZQ3EhHyAax9QYxgT5cbsx2MrO69gBpVZmmd' // Isi Apikey Plta Lu
global.capikey = 'ptlc_sQ3d4GxCiztyV5DbhUJSWtvnSCyKzeMXoWIr2lVyqal' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.apilinode = ''
global.apitokendo = ''
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
