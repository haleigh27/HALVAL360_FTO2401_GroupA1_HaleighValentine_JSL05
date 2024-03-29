// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "No Air", artist: "Jordin Sparks & Chris Brown", genre: "R&B" },
    { title: "Sure Thing", artist: "Miguel", genre: "R&B" },
    { title: "Over You", artist: "Daughtry", genre: "Rock" },
    { title: "Use Somebody", artist: "Kings of Leon", genre: "Rock" },
    { title: "Selfish", artist: "Justin Timberlake", genre: "Pop" },
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Reference to playlist element in HTML
const playlists = document.getElementById("playlists");

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    
    for (let guardian in guardians) { //loops through guardians object

        //Filters songs array for songs that match the guardian's preferred genre
        const preferredSongs = songs.filter((song) => {
            return song.genre === guardians[guardian];
        })
             

        //Creates the containers to display the guardian's songs
        const container = document.createElement("div");
        container.id = "playlist";
        playlists.appendChild(container);

        //Creates headings for the guardian's playlist
        const name = document.createElement("h2");
        name.textContent = `${guardian}'s Playlist`;
        container.appendChild(name);
    
        //Maps through the preferredSongs array created above to display each guardian's preferred songs
        const songList = preferredSongs.map((song) => {
            const songItem = document.createElement("p");
            songItem.innerHTML = `
                <span id="song-title">${song.title}</span> by ${song.artist}
            `;
            container.appendChild(songItem);
        });
    };
};

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


