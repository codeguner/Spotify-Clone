console.log("Lets write Javascript");

async function getSongs() {

    let a = await fetch("http://127.0.0.1:3000/songs/");
    let response = await a.text();
    console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href);
        };
    };
    return songs;

};

async function main() {
    // Get the list of all the songs
    let songs = await getSongs();
    console.log(songs);

    // Play the first song
    var audio = new Audio(songs[5]); 
    audio.play();

    audio.addEventListener("loadeddata", () => {
        let duration = audio.duration;
        console.log(duration)
        // The duration variable now holds the duration (in seconds) of the audio clip 
    });  
} 


main()
