
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
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec7d26b1-d557-47c1-a877-6050004d2fc2/dbb7hcs-1f9e8f0a-c4c7-4fc9-baf6-9e075ce86e30.jpg/v1/fill/w_1210,h_661,q_70,strp/cyberpunk_city_by_artursadlos_dbb7hcs-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0OSIsInBhdGgiOiJcL2ZcL2VjN2QyNmIxLWQ1NTctNDdjMS1hODc3LTYwNTAwMDRkMmZjMlwvZGJiN2hjcy0xZjllOGYwYS1jNGM3LTRmYzktYmFmNi05ZTA3NWNlODZlMzAuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.GD3LU0BXLk6l52PMsWZ_qnZ_iGnMQ5RXm92XjTWjoDA",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b9efbc15-761b-4eb1-818f-a87f60753ce6/dd1zbnp-ef451a3c-89f6-4789-ac1c-f319e9eb1d7a.jpg/v1/fill/w_1280,h_531,q_75,strp/dark_city_by_jordangrimmer_dd1zbnp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTMxIiwicGF0aCI6IlwvZlwvYjllZmJjMTUtNzYxYi00ZWIxLTgxOGYtYTg3ZjYwNzUzY2U2XC9kZDF6Ym5wLWVmNDUxYTNjLTg5ZjYtNDc4OS1hYzFjLWYzMTllOWViMWQ3YS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.91BhbbaslutCXow38y5F6A8uHDhzOP3Dg1iziTrLTDw",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aee9d666-9640-47c2-b11d-6d9306e7ec52/da1i295-75ed5033-3f51-4fb0-8d24-f350a8c40abf.jpg/v1/fill/w_1245,h_642,q_70,strp/on_the_street_by_kalberoos_da1i295-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjYwIiwicGF0aCI6IlwvZlwvYWVlOWQ2NjYtOTY0MC00N2MyLWIxMWQtNmQ5MzA2ZTdlYzUyXC9kYTFpMjk1LTc1ZWQ1MDMzLTNmNTEtNGZiMC04ZDI0LWYzNTBhOGM0MGFiZi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.spu2c1WNbWKoz5UMgM1jI8IeXjQPAC2YMwIzKKbIhns",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c4d3f848-c016-40c9-aaa6-e47e633a1d19/d7hxult-73438510-be02-40b3-ba81-e08234bd30da.jpg/v1/fill/w_1024,h_576,q_75,strp/cyberpunk_city_speedpaint_by_tryingtofly_d7hxult-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvYzRkM2Y4NDgtYzAxNi00MGM5LWFhYTYtZTQ3ZTYzM2ExZDE5XC9kN2h4dWx0LTczNDM4NTEwLWJlMDItNDBiMy1iYTgxLWUwODIzNGJkMzBkYS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.O1hy1I3v5NCzgjs0_w3smSKz1yBZgSHwDTMRRTHauho",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bbaa048a-5807-4dc1-b2d3-766796da9c8f/d83vjqq-1ec3205a-3bc5-4739-a703-075489395d4c.jpg/v1/fill/w_1024,h_547,q_75,strp/cyberpunk_cityscape_by_klauspillon_d83vjqq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQ3IiwicGF0aCI6IlwvZlwvYmJhYTA0OGEtNTgwNy00ZGMxLWIyZDMtNzY2Nzk2ZGE5YzhmXC9kODN2anFxLTFlYzMyMDVhLTNiYzUtNDczOS1hNzAzLTA3NTQ4OTM5NWQ0Yy5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.InOSqGbok1ztky5YP7lD_0_ksNyvwoTXXx_Et1QlfPI",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51bad5a5-a63e-4bbf-9937-6b5b78416457/dcluhiu-8d0a044b-dbda-47ff-866c-883906e0cd7e.jpg/v1/fill/w_1024,h_512,q_75,strp/wraith_by_allrichart_dcluhiu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNTFiYWQ1YTUtYTYzZS00YmJmLTk5MzctNmI1Yjc4NDE2NDU3XC9kY2x1aGl1LThkMGEwNDRiLWRiZGEtNDdmZi04NjZjLTg4MzkwNmUwY2Q3ZS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.AJK_4Zjse7IocZ8hTpyNbaJGdQjT7CsfmGbHLQi8Y54",
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
{youtube: "https://youtu.be/CNXeFFZv-mQ?si=XygQTzkreghBExb2", name: "Perturbator - Vengeance"},
{youtube: "https://youtu.be/e8btkMNZ7NM?si=vRuF24JK9gAMKSAC", name: "Perturbator - I am the Night"},
{youtube: "https://youtu.be/SY-SWpmhB_c?si=vrAVm7xyY9YKGWYb", name: "Perturbator - Desire"},
{youtube: "https://www.youtube.com/watch?v=ZhhQrFfzFM4", name: "Carpeter Brut - Escape from Midwich Valley"},
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

