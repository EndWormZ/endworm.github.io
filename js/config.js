
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
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d6d7c1b2-0ee9-4c1d-8409-df66708de1b2/dcijzl9-99234815-a204-446f-b86c-2879c37399dd.png/v1/fill/w_1024,h_474,q_80,strp/scp_610___last_fight_by_1justaguy1_dcijzl9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDc0IiwicGF0aCI6IlwvZlwvZDZkN2MxYjItMGVlOS00YzFkLTg0MDktZGY2NjcwOGRlMWIyXC9kY2lqemw5LTk5MjM0ODE1LWEyMDQtNDQ2Zi1iODZjLTI4NzljMzczOTlkZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.lm_9OP-Y12blD5ra2d65iAXamvqK-jI_8I7pKNpfrNc",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d6d7c1b2-0ee9-4c1d-8409-df66708de1b2/dcijzl9-99234815-a204-446f-b86c-2879c37399dd.png/v1/fill/w_1024,h_474,q_80,strp/scp_610___last_fight_by_1justaguy1_dcijzl9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDc0IiwicGF0aCI6IlwvZlwvZDZkN2MxYjItMGVlOS00YzFkLTg0MDktZGY2NjcwOGRlMWIyXC9kY2lqemw5LTk5MjM0ODE1LWEyMDQtNDQ2Zi1iODZjLTI4NzljMzczOTlkZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.lm_9OP-Y12blD5ra2d65iAXamvqK-jI_8I7pKNpfrNc",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d11d829f-a832-496d-b606-95c8ce011d10/ddvgmea-e56d31b4-9085-4e5e-b7cb-1a4c35b07ed6.png/v1/fill/w_1235,h_647,q_70,strp/scp_4183_by_amamidori_ddvgmea-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjcxIiwicGF0aCI6IlwvZlwvZDExZDgyOWYtYTgzMi00OTZkLWI2MDYtOTVjOGNlMDExZDEwXC9kZHZnbWVhLWU1NmQzMWI0LTkwODUtNGU1ZS1iN2NiLTFhNGMzNWIwN2VkNi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.xMirsIPPGa4ftwS7fIPEq7Kg85QG1oRX3vbqRoJC71w",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d11d829f-a832-496d-b606-95c8ce011d10/dfr7xg7-940fcc33-2df5-4783-b970-7329cf528064.png/v1/fill/w_1164,h_687,q_70,strp/scp_7470_by_amamidori_dfr7xg7-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjA3NyIsInBhdGgiOiJcL2ZcL2QxMWQ4MjlmLWE4MzItNDk2ZC1iNjA2LTk1YzhjZTAxMWQxMFwvZGZyN3hnNy05NDBmY2MzMy0yZGY1LTQ3ODMtYjk3MC03MzI5Y2Y1MjgwNjQucG5nIiwid2lkdGgiOiI8PTM1MTkifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.KwKJ9A1sWwN6yGCdeQMS7KucQ16Xi4AJ2izPGRlS3BY",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b84a33a0-4e23-4d0a-88d5-b19dd8753156/deo9cds-97eacf8c-93a8-4e03-af37-54492f35e29e.jpg/v1/fill/w_1264,h_632,q_70,strp/scp_682_by_shvydkov_ivan_deo9cds-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvYjg0YTMzYTAtNGUyMy00ZDBhLTg4ZDUtYjE5ZGQ4NzUzMTU2XC9kZW85Y2RzLTk3ZWFjZjhjLTkzYTgtNGUwMy1hZjM3LTU0NDkyZjM1ZTI5ZS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.bL8ybkuj_DJaq929kDlMxl0H_K6b-7MzORsz8RyGdQs",
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
	{youtube: "https://youtu.be/QU2EHrwdT-U?si=Cz9NDm1JVtVHiYAP", name: "Harry101UK - Dyson Spheres"},
	{youtube: "https://youtu.be/Keu6auKjrVY?si=EmrnL1-bA7UBlca5", name: "Harry101UK - Kepler Dimension"},
        {youtube: "https://youtu.be/bRvdDCQ4u90?si=UhMD9SImjfqD4IoU", name: "Spencer Baggett - Entropy Zero"},
        {youtube: "https://youtu.be/FpfBBIqiVVQ?si=J1EhHaW4SQcNTCZw", name: "Operation Black Mesa - We are Pulling Out"},
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

