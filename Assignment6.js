let song= {name: 'Stairway To Heaven', artist: 'Led Zeppelin', duration: '8 min'};
let movie= {name: 'School of Rock', director: 'Richard Linklater', duration: '120 min', rating: 'PG-13'};
let podcasts = {name: 'Everybody Loves Guitar', writer: 'Craig Garber', duraction: '45 min'};

let playlist= [song, movie, podcasts];
playlist.song.sort();
playlist.movie.sort();
playlist.podcasts.sort();
playlist.sort();
console.log(playlist);

Class playlist= function(playlist){
  let counter = 0
  for (let i=0; i< playlist.length; i++;){
    playlist.playing()=>playlist.next();
  };
