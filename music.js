const fiveOaksSingles = [
  {
    "title": "Five Oaks",
    "slug": "five-oaks",
    "tag": "The Five Oaks Saga",
    "note": "A main-theme single for the whole ranch and the family built around it.",
    "audio": "music/audio/five-oaks.mp3",
    "cover": "music/covers/five-oaks.jpg"
  },
  {
    "title": "Five Oaks Calling",
    "slug": "five-oaks-calling",
    "tag": "The Five Oaks Saga",
    "note": "A call back to the ranch, the family, and the place that keeps pulling everyone home.",
    "audio": "music/audio/five-oaks-calling.mp3",
    "cover": "music/covers/five-oaks-calling.jpg"
  },
  {
    "title": "Lantern Light Between Us",
    "slug": "lantern-light-between-us",
    "tag": "Five Oaks Single",
    "note": "A warm, romantic Five Oaks story song with lantern-light intimacy.",
    "audio": "music/audio/lantern-light-between-us.mp3",
    "cover": "music/covers/lantern-light-between-us.jpg"
  },
  {
    "title": "Little Prairie Fire",
    "slug": "little-prairie-fire",
    "tag": "Five Oaks Single",
    "note": "A fire-hearted prairie song with Five Oaks grit.",
    "audio": "music/audio/little-prairie-fire.mp3",
    "cover": "music/covers/little-prairie-fire.jpg"
  },
  {
    "title": "The Day I Found You",
    "slug": "the-day-i-found-you",
    "tag": "Five Oaks Single",
    "note": "A love song for the moment someone becomes home.",
    "audio": "music/audio/the-day-i-found-you.mp3",
    "cover": "music/covers/the-day-i-found-you.jpg"
  },
  {
    "title": "The Long Shot",
    "slug": "the-long-shot",
    "tag": "Five Oaks Single",
    "note": "A song for impossible odds, stubborn hope, and taking the risk anyway.",
    "audio": "music/audio/the-long-shot.mp3",
    "cover": "music/covers/the-long-shot.jpg"
  },
  {
    "title": "The Long Way Forward",
    "slug": "the-long-way-forward",
    "tag": "Book 4 / Five Oaks Saga",
    "note": "A theme song for moving forward when the road does not make it easy.",
    "audio": "music/audio/the-long-way-forward.mp3",
    "cover": "music/covers/the-long-way-forward.jpg"
  },
  {
    "title": "The Night Before Tomorrow",
    "slug": "the-night-before-tomorrow",
    "tag": "Five Oaks Single",
    "note": "A waiting-at-the-edge song for the night before everything changes.",
    "audio": "music/audio/the-night-before-tomorrow.mp3",
    "cover": "music/covers/the-night-before-tomorrow.jpg"
  },
  {
    "title": "The Woman They Couldn't Ignore",
    "slug": "the-woman-they-couldnt-ignore",
    "tag": "Five Oaks Single",
    "note": "A strong-woman Five Oaks song for the one nobody gets to dismiss.",
    "audio": "music/audio/the-woman-they-couldnt-ignore.mp3",
    "cover": "music/covers/the-woman-they-couldnt-ignore.jpg"
  },
  {
    "title": "Under The Five Oaks Sky",
    "slug": "under-the-five-oaks-sky",
    "tag": "The Five Oaks Saga",
    "note": "A wide-open family legacy song beneath the Five Oaks sky.",
    "audio": "music/audio/under-the-five-oaks-sky.mp3",
    "cover": "music/covers/under-the-five-oaks-sky.jpg"
  }
];
function renderFiveOaksMusic(){
 const box=document.getElementById('fiveOaksSingles'); if(!box) return;
 box.innerHTML=fiveOaksSingles.map(song=>`
  <article class="song-card">
   <img src="${song.cover}" alt="${song.title} cover">
   <div class="song-body"><h3>${song.title}</h3><div class="song-tag">${song.tag}</div><p class="song-note">${song.note}</p><audio controls preload="none" src="${song.audio}"></audio><a class="download-song" href="${song.audio}" download>Download song</a></div>
  </article>`).join('');
}
document.addEventListener('DOMContentLoaded', renderFiveOaksMusic);
