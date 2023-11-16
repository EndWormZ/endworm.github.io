
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
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/310de5b2-b2d5-4d1b-997d-d7d9e9eaf18b/de8rknl-d4de8083-ada8-4252-87ec-457078bab4f9.jpg/v1/fill/w_1192,h_670,q_70,strp/red_right_hand_by_angelandelf_de8rknl-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzMxMGRlNWIyLWIyZDUtNGQxYi05OTdkLWQ3ZDllOWVhZjE4YlwvZGU4cmtubC1kNGRlODA4My1hZGE4LTQyNTItODdlYy00NTcwNzhiYWI0ZjkuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1SL4qbyzs7WybTX92Ct_CpTDvPU4yZPh2ggVQFvbilc",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea3aa5c8-b89c-47be-9a4c-649c334d727a/df964y5-7ded6dbe-5e13-4353-bcf0-72b406e4bb29.jpg/v1/fill/w_1192,h_670,q_70,strp/scp___mobile_task_force_by_jqueary1991_df964y5-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjE2MCIsInBhdGgiOiJcL2ZcL2VhM2FhNWM4LWI4OWMtNDdiZS05YTRjLTY0OWMzMzRkNzI3YVwvZGY5NjR5NS03ZGVkNmRiZS01ZTEzLTQzNTMtYmNmMC03MmI0MDZlNGJiMjkuanBnIiwid2lkdGgiOiI8PTM4NDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.xNfW6m4ST088oC4yBC-MWmXupsMZFJ1AD65XfaZ460I",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/015d0568-f110-4294-8511-cf3ed0208f82/dc2lvgk-e27e8072-3627-4cbc-8557-a794e2412609.jpg/v1/fill/w_1024,h_576,q_75,strp/scp_939_has_escaped__all_mtf_nu_7_please_engage_by_dracoscurra_dc2lvgk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvMDE1ZDA1NjgtZjExMC00Mjk0LTg1MTEtY2YzZWQwMjA4ZjgyXC9kYzJsdmdrLWUyN2U4MDcyLTM2MjctNGNiYy04NTU3LWE3OTRlMjQxMjYwOS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JYx39HpeVN3C6cJCiEwk7egQLG3ALBqgoKRk7Ae8o7Q",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/89e382aa-428a-4e12-9f96-2485db57f97a/df2ey3o-927696ab-ad95-434a-963b-87c6192dbb75.jpg/v1/fill/w_1192,h_670,q_70,strp/containment_breach_by_wolf48912_df2ey3o-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvODllMzgyYWEtNDI4YS00ZTEyLTlmOTYtMjQ4NWRiNTdmOTdhXC9kZjJleTNvLTkyNzY5NmFiLWFkOTUtNDM0YS05NjNiLTg3YzYxOTJkYmI3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.eJ29msyCZtOyli70l_wW0HXIOd-zNMcM2TXRFAgb-ME",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f5792c93-df57-4bbe-9780-dc5354a2dd2d/df2ko3n-c55afd74-3384-4e82-9052-5e99e0384006.png/v1/fill/w_1192,h_670,q_70,strp/operators_by_damianskii_df2ko3n-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU3OTJjOTMtZGY1Ny00YmJlLTk3ODAtZGM1MzU0YTJkZDJkXC9kZjJrbzNuLWM1NWFmZDc0LTMzODQtNGU4Mi05MDUyLTVlOTllMDM4NDAwNi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.XMCCXxC-jrrEpuAwmS8v3ExYeU0GI6256b2hk0NqF0k",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f5792c93-df57-4bbe-9780-dc5354a2dd2d/dgft7ug-0d4f9246-6c0d-4573-884a-3db072e8efc5.png/v1/fill/w_1192,h_670,q_70,strp/boogeymen_by_damianskii_dgft7ug-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjE2MCIsInBhdGgiOiJcL2ZcL2Y1NzkyYzkzLWRmNTctNGJiZS05NzgwLWRjNTM1NGEyZGQyZFwvZGdmdDd1Zy0wZDRmOTI0Ni02YzBkLTQ1NzMtODg0YS0zZGIwNzJlOGVmYzUucG5nIiwid2lkdGgiOiI8PTM4NDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.iSZ_b0uk3tsRzsfuJvdTQy_OPxN5XtRWBEUX2EUd69U",
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
	{youtube: "https://youtu.be/xwAheN8OanY?si=ALOJdJmgX4lZMOve", name: "Geneburn - Dark Horizon"},
	{youtube: "https://youtu.be/00xprBmokcI?si=dN4PW-XWGtIYECaT", name: "Geneburn - Prepare for Escape"},
        {youtube: "https://youtu.be/otzHeJwV4K4?si=WS-ay3nIawQ1Rs8N", name: "Geneburn - Hostile Illusion"},
        {youtube: "https://youtu.be/Wk1mgGI1QHs?si=yhYB_M_uvB1E5_p4", name: "Geneburn - The Blood We Spill"},
	{youtube: "https://youtu.be/wq9deTUvcy0?si=AUVtayb2HQMKZl44", name: "Geneburn - Denial"},
	{youtube: "https://youtu.be/Jq58rQ5W_Tc?si=sx86UEUfjId8JBIV", name: "Geneburn - Echoes"},
	{youtube: "https://youtu.be/UxHruHuWKt4?si=fDBYLEHudeqRqqQ6", name: "Geneburn - Eclipse"},
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

