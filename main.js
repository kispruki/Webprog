mode = "";
const Words_ez = ["freeze", "cold", "hot", "prepare", "ironic", "whom", "colonel", 
"unabashed", "tooth", "foot", "hand", "head", "face", "buzz", "tackle", "abject", 
"abjure", "bone", "trophy", "right", "call", "candy", "jelly", "sniper", "surface",
"learn", "virus", "trade", "smoke", "defile", "island", "light", "stop", "recommend",
"often", "rich", "true", "false", "dog", "bull", "corn", "weird", "chain", "range",
"party", "group", "ujpest", "sleep", "skill", "ass", "dream", "stone", "trade", "noob", "stupid", "key",];

const Words_hard=["sesquipedalian", "phenomenon", "onomatopoeia", "supercalifragilisticexpialidocious",
"worcestershire", "literally", "irregardless", "disinterested", "monplussed", "aberration", "embezzlement", 
"enfranchise", "grandiloquent", "idiosyncratic", "philanthropic", "homogeneous", "prevaricate", "flabbergasted", 
"circumlocution", "embezzlement", "quotidian", "pterodactyl", "axicolous", "pauciloquent", "tergiversate", 
"scrumptious", "blandishment", "sanctimonious", "gobbledegook", "massachusetts",];
var log = [];
var times = [];
function newword() {

    if (mode != ""){ 

        if (mode == "eazy"){
            var a = Math.floor(Math.random() * (Words_ez.length-1-0+1)) + 0;

            document.getElementById("demo").innerHTML = Words_ez[a];
            log.unshift(Words_ez[a]);
        } else {
            var a = Math.floor(Math.random() * (Words_hard.length-1-0+1)) + 0;
            document.getElementById("demo").innerHTML = Words_hard[a];
            log.unshift(Words_hard[a]);

        };

};};
var t1 = 0;
var t2 = 0;
var timer = false;

function start() {
    
    if (timer == false) {
    t1 = Date.now();
    timer = true;}
}
    
function stop () {
    if (timer == true){
        
    t2 = Date.now();
    timer = false;
    wpm = Math.round(60/((t2 - t1)/1000));
    return wpm
    }}



function key(e) 
{
    
var e1 = document.getElementById("entry");
    
var kode = e.keyCode;


if (kode != 32){start();}
else if (kode == 32) 
{
    data = e1.value;

    e1.value = "";
    e1.value = "";

    if (log[0]== data.replace(" ", ""))
    {
        wpm1 = stop();
        times.push(wpm1);
        newword();
        var sum = 0;
        for (i=0;i<times.length;i++)
        {
            sum = sum + parseInt(times[i]);
        };
       sum = sum/times.length;
       document.getElementById("tm").innerHTML = Math.round(sum)+"wpm"+"\t"+ data;

       
    };
};
};

