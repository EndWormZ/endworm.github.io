
//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "";

// Center logo?
// 'true' or 'false'
var l_centerLogo = true;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = false;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d11d829f-a832-496d-b606-95c8ce011d10/deii97h-97c3af77-374a-4a12-9283-d27c8f0cd880.png/v1/fill/w_1138,h_702/an_angel_who_has_forsaken_sympathy_by_amamidori_deii97h-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzNyIsInBhdGgiOiJcL2ZcL2QxMWQ4MjlmLWE4MzItNDk2ZC1iNjA2LTk1YzhjZTAxMWQxMFwvZGVpaTk3aC05N2MzYWY3Ny0zNzRhLTRhMTItOTI4My1kMjdjOGYwY2Q4ODAucG5nIiwid2lkdGgiOiI8PTI2NTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.lDZA7zb7YgkZrGoqHfBZ9BXb5qoFwC8vD8RvALG6EmE",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d11d829f-a832-496d-b606-95c8ce011d10/ddvgmea-e56d31b4-9085-4e5e-b7cb-1a4c35b07ed6.png/v1/fill/w_1235,h_647,q_70,strp/scp_4183_by_amamidori_ddvgmea-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjcxIiwicGF0aCI6IlwvZlwvZDExZDgyOWYtYTgzMi00OTZkLWI2MDYtOTVjOGNlMDExZDEwXC9kZHZnbWVhLWU1NmQzMWI0LTkwODUtNGU1ZS1iN2NiLTFhNGMzNWIwN2VkNi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.xMirsIPPGa4ftwS7fIPEq7Kg85QG1oRX3vbqRoJC71w",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d11d829f-a832-496d-b606-95c8ce011d10/dc0loro-de312a82-32d6-4730-b9b0-28dafff6412c.png/v1/fill/w_1208,h_662,q_70,strp/scp_682_by_amamidori_dc0loro-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ4NCIsInBhdGgiOiJcL2ZcL2QxMWQ4MjlmLWE4MzItNDk2ZC1iNjA2LTk1YzhjZTAxMWQxMFwvZGMwbG9yby1kZTMxMmE4Mi0zMmQ2LTQ3MzAtYjliMC0yOGRhZmZmNjQxMmMucG5nIiwid2lkdGgiOiI8PTI3MDgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.AWOsk7wUr-zR0Elvb99TKNGFlkhTcXUeLrqC6uskQRk",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d6d7c1b2-0ee9-4c1d-8409-df66708de1b2/dcijzl9-99234815-a204-446f-b86c-2879c37399dd.png/v1/fill/w_1024,h_474,q_80,strp/scp_610___last_fight_by_1justaguy1_dcijzl9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDc0IiwicGF0aCI6IlwvZlwvZDZkN2MxYjItMGVlOS00YzFkLTg0MDktZGY2NjcwOGRlMWIyXC9kY2lqemw5LTk5MjM0ODE1LWEyMDQtNDQ2Zi1iODZjLTI4NzljMzczOTlkZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.lm_9OP-Y12blD5ra2d65iAXamvqK-jI_8I7pKNpfrNc",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d11d829f-a832-496d-b606-95c8ce011d10/dfr7xg7-940fcc33-2df5-4783-b970-7329cf528064.png/v1/fill/w_1164,h_687,q_70,strp/scp_7470_by_amamidori_dfr7xg7-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjA3NyIsInBhdGgiOiJcL2ZcL2QxMWQ4MjlmLWE4MzItNDk2ZC1iNjA2LTk1YzhjZTAxMWQxMFwvZGZyN3hnNy05NDBmY2MzMy0yZGY1LTQ3ODMtYjk3MC03MzI5Y2Y1MjgwNjQucG5nIiwid2lkdGgiOiI8PTM1MTkifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.KwKJ9A1sWwN6yGCdeQMS7KucQ16Xi4AJ2izPGRlS3BY",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d11d829f-a832-496d-b606-95c8ce011d10/deii9yp-ccf88fff-f1e4-4ea4-b493-65a46e0e7dcd.png/v1/fill/w_1185,h_675,q_70,strp/scp_1861_by_amamidori_deii9yp-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQyNCIsInBhdGgiOiJcL2ZcL2QxMWQ4MjlmLWE4MzItNDk2ZC1iNjA2LTk1YzhjZTAxMWQxMFwvZGVpaTl5cC1jY2Y4OGZmZi1mMWU0LTRlYTQtYjQ5My02NWE0NmUwZTdkY2QucG5nIiwid2lkdGgiOiI8PTI1MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.awH3xh7SaLOeh-BQYJmz1F5Qbz_wvnc6lqp7lpQOeRI",
];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 60000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 3000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 45;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
{youtube: "https://youtu.be/5IEF9UKinqM?si=TGTH9NgC0maoq63Y", name: "Harry101UK - Limited Exposure"},
{youtube: "https://youtu.be/Keu6auKjrVY?si=p_CLSrE2WwcijueK", name: "Harry101UK - Kepler Dimension"},
{youtube: "https://youtu.be/QU2EHrwdT-U?si=GTlF0KtcL5SY2Z7W", name: "Harry101UK - Dyson Spheres"},
{youtube: "https://youtu.be/cu6MKW9uZKU?si=QG2NhzlmWvO6mihN", name: "ADMClef - Take Care"},
{youtube: "https://youtu.be/hY4r7menoek?si=-Y6YWAeAPd5SQtxI", name: "SCP Containment Breach Soundtrack - Menu Ambience"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 15;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
    "Не забудьте вступить в дискорд сервера! В нем находится вся необходимая информация о работоспособности и обновлениях сервера! - /discord",
    "После вступления в игру, не забудьте ознакомиться с внутри-игровыми правилами сервера! - /rules",
    "Некорректное отображение моделей/текстур ? - /content",
];
// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 50000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};

