const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['+251704687525']
global.ownername = "😈♚  Ř𝔼Ⓓ❷א  ☟♢"//owner name
global.ytname = "𝖗2𝖝 "
global.socialm = "𝖗2𝖝 "
global.location = "mars"

global.botname = 'ℝ𝔼𝔻𝟚𝕏-𝕄𝔻' //name of the bot

//sticker details
global.stickername = '•´¯`•. 𝓡єＤ❷ⓧ .•´¯`•'
global.packname = 'Sticker By'
global.author = '𝖗2𝖝 𝖇𝖔𝖙t'
//console view/theme
global.themeemoji = '🧩'
global.wm = "𝖗2𝖝 "

//theme link
global.link = ''

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀 𝖗2𝖝 𝖇𝖔𝖙 🎀*\n\n*🧩 Bot link:* \nhttps://github.com/AYUSH-PANDEY023/Maria-MD\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
