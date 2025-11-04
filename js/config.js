
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
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36435943-17a2-4746-a5e1-331f4c6c1d1f/d1nyrpp-eacc0c12-e41d-424f-a38b-97406f48d0f2.jpg/v1/fill/w_1000,h_500,q_75,strp/war_by_hunterkiller_d1nyrpp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTAwIiwicGF0aCI6Ii9mLzM2NDM1OTQzLTE3YTItNDc0Ni1hNWUxLTMzMWY0YzZjMWQxZi9kMW55cnBwLWVhY2MwYzEyLWU0MWQtNDI0Zi1hMzhiLTk3NDA2ZjQ4ZDBmMi5qcGciLCJ3aWR0aCI6Ijw9MTAwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HUFV0dn_aMyiWhKDl0wJJxLkV7CcESj9AKlxsmgtsgo",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36435943-17a2-4746-a5e1-331f4c6c1d1f/d3j60vz-90bb4404-cf07-4ee2-bc41-4fe532833380.jpg/v1/fill/w_1264,h_632,q_70,strp/offensive_by_hunterkiller_d3j60vz-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUwIiwicGF0aCI6Ii9mLzM2NDM1OTQzLTE3YTItNDc0Ni1hNWUxLTMzMWY0YzZjMWQxZi9kM2o2MHZ6LTkwYmI0NDA0LWNmMDctNGVlMi1iYzQxLTRmZTUzMjgzMzM4MC5qcGciLCJ3aWR0aCI6Ijw9MTMwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.O9Qgf7r3GV7y3H2pBqfeMRrhdxPBsM7O4WWENo-kRqQ",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36435943-17a2-4746-a5e1-331f4c6c1d1f/dcdnasa-b4d73f0c-d98e-400a-a8b3-c4e009430787.jpg/v1/fill/w_1216,h_657,q_70,strp/swp___search_for_a_corporal__by_hunterkiller_dcdnasa-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODY1IiwicGF0aCI6Ii9mLzM2NDM1OTQzLTE3YTItNDc0Ni1hNWUxLTMzMWY0YzZjMWQxZi9kY2RuYXNhLWI0ZDczZjBjLWQ5OGUtNDAwYS1hOGIzLWM0ZTAwOTQzMDc4Ny5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Ocl3iWtRkXIl7NDJ-yY1ryJBoWmGXBaiut8o8A1ba9c",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36435943-17a2-4746-a5e1-331f4c6c1d1f/dctbqzs-538c3f8c-dcaa-403b-921a-406ab7248f8f.jpg/v1/fill/w_1264,h_632,q_70,strp/slum_by_hunterkiller_dctbqzs-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6Ii9mLzM2NDM1OTQzLTE3YTItNDc0Ni1hNWUxLTMzMWY0YzZjMWQxZi9kY3RicXpzLTUzOGMzZjhjLWRjYWEtNDAzYi05MjFhLTQwNmFiNzI0OGY4Zi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Uagr6QSsHFKDG-qdTV3GGGjsmtRsPsOB4R377-b9lSc",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/66e33f89-3028-4373-9ef4-503cc2f86f45/dcq3b2v-2ba1126b-343f-41dc-b676-844d33eff3ff.jpg/v1/fill/w_1192,h_670,q_70,strp/girls__frontline_tribute___1_by_demonessjin_dcq3b2v-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiIvZi82NmUzM2Y4OS0zMDI4LTQzNzMtOWVmNC01MDNjYzJmODZmNDUvZGNxM2Iydi0yYmExMTI2Yi0zNDNmLTQxZGMtYjY3Ni04NDRkMzNlZmYzZmYuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.mdTRSxpv1jrIMrvMVcIAsNq4v2nicpCvf1oweKgLNrw",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf16e75a-87dc-46bd-9d31-7ec69d5b43f6/dfnu7mc-7052e24c-3dd9-4675-8677-8039db6cd169.jpg/v1/fill/w_1192,h_670,q_70,strp/gfx_anime_style_c4d_an94__girls_frontline__by_rivo22245_dfnu7mc-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2JmMTZlNzVhLTg3ZGMtNDZiZC05ZDMxLTdlYzY5ZDViNDNmNi9kZm51N21jLTcwNTJlMjRjLTNkZDktNDY3NS04Njc3LTgwMzlkYjZjZDE2OS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wATIudw6Uab1PgYul-hJJ2AO1tO1Xdd3zwghgipMo2s",
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
{youtube: "https://youtu.be/3Ce-4UR06Hk?si=PHUvOUNahoq7qof9", name: "Operation Black Mesa - We're pulling out"},
{youtube: "https://youtu.be/wq9deTUvcy0?si=wjhyrjb3625Fm7E2", name: "Geneburn - Denial"},
{youtube: "https://youtu.be/UxHruHuWKt4?si=JncsoVRe7GLwP-uh", name: "Geneburn - Eclipse"},
{youtube: "https://youtu.be/00xprBmokcI?si=TffB9UCceQgNSI1H", name: "Geneburn - Prepare for Escape"},
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

