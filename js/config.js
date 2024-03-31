
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
	"https://gamerwall.pro/uploads/posts/2021-12/1639143533_5-gamerwall-pro-p-krutie-tachki-s-ognem-fentezi-krasivo-oboi-5.jpg",
        "https://th.bing.com/th/id/OIP.HMAvUMeOofTpKqo3e2N9CgEsCo?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/R.05401295ea267d6d623590413f8b49bf?rik=9TqP00deCfiOKQ&riu=http%3a%2f%2fwww.mobilmusic.ru%2fmfile%2f27%2f78%2f5b%2f1296365.jpg&ehk=L25gtpgskExVyeHI%2bx9x%2bk%2bYbhBxZe0335a%2bYG7TbJQ%3d&risl=&pid=ImgRaw&r=0",
	"https://vjoy.cc/wp-content/uploads/2020/12/unnamed-50.jpg",
        "https://coolsen.ru/wp-content/uploads/2021/06/119-5.jpg",
        "https://th.bing.com/th/id/R.d519f90627a4ab5c45e1391a3f667a43?rik=v1E8iLwFGsWvqQ&pid=ImgRaw&r=0",
	"https://th.bing.com/th/id/OIP.1M_1LuaLhMwKQgcdPllohgHaHa?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.vIYEdjXaK1mEk_Dac24uzgHaLI?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.E_WPGtBbSnRYWp-2OoFJ_QHaHa?rs=1&pid=ImgDetMain",
	
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
{youtube: "https://www.youtube.com/watch?v=3FPwcaflCS8", name: "https://slotoking.ua/"},
{youtube: "https://www.youtube.com/watch?v=5hEh9LiSzow", name: "https://slotoking.ua/"},
{youtube: "https://www.youtube.com/watch?v=eDshx6Rg9Hs", name: "https://slotoking.ua/"},
{youtube: "https://www.youtube.com/watch?v=ALZHF5UqnU4", name: "https://slotoking.ua/"},
{youtube: "https://www.youtube.com/watch?v=Puq7-gH7FJ8", name: "https://slotoking.ua/"},
{youtube: "https://www.youtube.com/watch?v=_kHBAKbNK0A", name: "https://slotoking.ua/"},
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
    "Звери не плачут. Вытри слезы и не притворяйся человеком.",
    "Я не лучше других. Просто конкретно крутой.",
    "Каждый пацанский шаг делает тебя на шаг дальше.",
    "Волкам не нужны правила поведения.",
    "Когда собаки лают, волк не дергается.",
    "Крутость – не пугаться обстоятельств.",

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

