const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+252 67 2357527";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_14_12_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI3LFxuICAgICAgICA2NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA0LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDksXG4gICAgICAgIDY0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI2LFxuICAgICAgICA5NixcbiAgICAgICAgNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDU1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA4LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDMzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NCxcbiAgICAgICAgODEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkYrSEFtTEUwNkYraGVrd2p1YlRsc1hyWnVrQndRMUxBWk1WZW9nYVlzUFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9FSXNYYy0xUXBlMW1oSmZHdlpCZFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDA1MTRiY2ItNzhkZi00OGY0LWI3OWItNmI4MjU0MTI3MDZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDIxNSxcbiAgICAgIDU4LFxuICAgICAgMTIxLFxuICAgICAgMTQwLFxuICAgICAgMzMsXG4gICAgICAxNTYsXG4gICAgICA0MCxcbiAgICAgIDEyMyxcbiAgICAgIDIwMSxcbiAgICAgIDE0MyxcbiAgICAgIDIyMCxcbiAgICAgIDkxLFxuICAgICAgNjMsXG4gICAgICA5MCxcbiAgICAgIDUyLFxuICAgICAgMTk5LFxuICAgICAgMTU4LFxuICAgICAgMjA5LFxuICAgICAgNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk0LFxuICAgICAgNTgsXG4gICAgICAxMzgsXG4gICAgICAyOCxcbiAgICAgIDI0NyxcbiAgICAgIDQ4LFxuICAgICAgMjIyLFxuICAgICAgMTIzLFxuICAgICAgMCxcbiAgICAgIDYwLFxuICAgICAgNyxcbiAgICAgIDMwLFxuICAgICAgNDksXG4gICAgICA0NyxcbiAgICAgIDE1NyxcbiAgICAgIDIzNCxcbiAgICAgIDI1MCxcbiAgICAgIDQ0LFxuICAgICAgNDIsXG4gICAgICAxOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1lFSFY4WEpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjY3MjM1NzUyNzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDQ4Mjc0NzY5MjI1NzM6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQQ0IwYllHRU5tUXlic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllQSFZRemkxNjZjdHJBbktCandxQzJaNXdYS3grcUEySllqb1JKWGZCM3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic3ZTUDV6RUlyRVVZK3NkWXI0cjFTOFpmamRhWWRzNnpPOVFHYkE1ZGlCMERtaFBuZEZUNUNCa3VwM3pNU29xd2dOOUo4Z3NuZ0ZkZ3JiUDJHSlowQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSnBNbGFHOWtzSW85TFhvaTNOV09MK2hrampmTW10cVNYeERNQWxERC9SR2FhRFpFR0dMY0NDRVVTMmlMODYrMzdMVkZ6c3gxSnRETTBFL2ZYN2NhZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjcyMzU3NTI3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTU0Mjg3NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "༆␈𝚻𝚯ᗰᗰ𝐘͜͡⚡🇦🇱",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
