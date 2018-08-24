// Variables

var words = [
    "bayonetta", "bowser", "bowserjr", "captainfalcon", "charizard", "chrom", "cloud", "corrin", "daisy", "darkpit", "darksamus", "diddykong",
    "donkeykong", "drmario", "duckhunt", "falco", "fox", "ganondorf", "greninja", "iceclimbers", "ike", "inkling", "ivysaur", "jigglypuff",
    "kingdedede", "kingkrool", "kirby", "link", "little mac", "lucario", "lucas", "lucina", "luigi", "mario", "marth", "megaman", "metaknight",
    "mewtwo", "miifighter", "mrgameandwatch", "ness", "olimar", "pacman", "palutena", "peach", "pichu", "pikachu", "pit",
    "richter", "ridley", "rob", "robin", "rosalina", "roy", "ryu", "samus", "sheik", "shulk", "simon", "snake", "sonic", "squirtle", "toon link",
    "villager", "wario", "wiifittrainer", "wolf", "younglink", "zelda", "zerosuitsamus",
    
]

var hints = [ 
    "A witch", "Mario's greatest enemy", "King Koopa's Son", "F-Zero", "A fire type Pokemon", "Echo fighter from Fire Emblem: Awakening", 
    "Square-Enix", "Can turn into a dragon", "A tennis playing princess", "The first echo fighter", "Metroid Prime", "Peanut Pistols", "Mario's first nemesis",
    "PhD", "NES retro character", "Lombardi", "McCloud", "Link's Enemy", "A water/dark type Pokemon", "Two characters", "Fire Emblem powerhouse",
    "Squid", "A grass type Pokemon", "When this Pokemon sings, people fall asleep", "Kirby's nemesis", "Donkey Kong's nemesis", "Shaped like a friend",
    "Hero of Time", "Fought Mike Tyson", "A steel/fighting type Pokemon", "Mother 3", "Marth echo fighter", "Mario's brother", "Nintendo's most iconic character",
    "The first Fire Emblem fighter", "Capcom retro character", "Kirby's nemesis, sometimes", "A psychic type Pokemon", "Your avatar", 
    "A 2D fighter", "Earthbound", "Pikmin", "An arcade retro character","Goddess in Kid Icarus", "Princess Toadstool", 
    "An electric type Pokemon who hurts itself", "An electric type Pokemon", "Kid Icarus", "Castlevania echo fighter", "Samus's nemesis", 
    "An old peripheral", "Spellcaster from Fire Emblem", "Super Mario Galaxy", "Marth, with fire",
    "Street Fighter", "Metroid", "Zelda's alter-ego", "Xenoblade", "Castlevania", "Hideo Kojima", "Gotta go fast", "A water type Pokemon",
    "Wind Waker", "Animal Crossing", "Mario's greedy nemesis", "Helps you lose weight", "Fox's nemesis", "Hero of Time as a child", 
    "The Legend of ..", "A fighter without her armor",
]

var wins = 0;
var losses = 0;
var wrongGuesses = "";
var selectedLetters = [];

function begin() {

    var guessesLeft = 10;
    var selector = Math.floor(Math.random() * words.length);
    var selectWord = words[selector];
    var selectHint = hints[selector];
    var selectedLetters = selectWord.split("");
    var blankWord = [];
    var guessedLetters = [];
    var guess = "";

    for(x = 0; x < selectWord.length; x++) {
        blankWord.push("_");
    }

    document.getElementById("word").innerText = "Character: " + blankWord;
    document.getElementById("guessesLeft").innerText = "Guesses Left: " + guessesLeft + ".";
    document.getElementById("hint").innerText = "Hint: " + selectHint + ".";
    document.getElementById("guessedLetters").innerText = "Guessed Letters: ";
  
    document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var guess = String.fromCharCode(event.keyCode).toLowerCase();
        var rightGuess = false;

        for(x = 0; x < selectWord.length; x++) {
            if(selectedLetters[x] == guess) {
                rightGuess = true;
            } 
        }
        if (rightGuess) {
            for (x = 0; x < selectWord.length; x++) {
                if(selectWord[x] == guess) {
                    blankWord[x] = selectedLetters[x];
                    document.getElementById("word").innerText = "Character: " + blankWord;
                }
            }
        }
        else {
        guessesLeft--;
        guessedLetters.push(guess.toString());
        document.getElementById("guessedLetters").innerText = "Guessed Letters: " + guessedLetters + ".";
        document.getElementById("guessesLeft").innerText = "Guesses Left: " + guessesLeft + ".";
        } 
        
        if (blankWord.toString() == selectedLetters.toString()) {
            wins++;
            alert("Congratulations! You win.)");
            document.getElementById("wins").innerText = "Current Wins: " + wins;
            begin();
        }
        else if (guessesLeft == 0) {
            losses++;
            alert("Sorry, you lose!")
            document.getElementById("losses").innerText = "Current Wins: " + losses;
            begin();
        }

    }
    }
}
