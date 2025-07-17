const songsData = [
  {
    id: 1,
    title: "O Maahi",
    artist: "Arijit Singh",
    duration: "3:53",
    cover: "pics/Arijit Singh.jpeg",
    Audio: "songs/O Maahi Dunki 128 Kbps.mp3"
  },
  {
    id: 2,
    title: "Tera chehra",
    artist: "Darshan Raval",
    duration: "4:34",
    cover: "pics/darshan.jpeg",
    Audio: "songs/Tera Chehra Sanam Teri Kasam 128 Kbps.mp3"
  },
  {
    id: 3,
    title: "kesariya tera",
    artist: "Arijit Singh",
    duration: "5:04",
    cover: "pics/kesariya tera.jpeg",
    Audio: "songs/Kesariya(KoshalWorld.Com).mp3"
  },
  {
    id: 4,
    title: "Ek Tarfa",
    artist: "Darshan Raval",
    duration: "3:54",
    cover: "pics/ek tarfa.jpeg",
    Audio: "songs/Ek Tarfa Darshan Raval 128 Kbps.mp3"
  },
  {
    id: 5,
    title: "Heeriye",
    artist: "Arijit Singh",
    duration: "3:14",
    cover: "pics/heeriye.jpeg",
    Audio: "songs/Heeriye Arijit Singh 128 Kbps (1).mp3"
  },
  {
    id: 6,
    title: "Zinda Banda",
    artist: "Anirudh Ravichander",
    duration: "4:24",
    cover: "pics/anirudh.jpeg",
    Audio: "songs/Zinda Banda Jawan 128 Kbps.mp3"
  },
  {
    id: 7,
    title: "Vaaste",
    artist: "Dhvani Bhanushali",
    duration: "3:16",
    cover: "pics/dhvanishanushali.jpeg",
    Audio: "songs/Vaaste Nikhil Dsouza 128 Kbps.mp3"
  },
  {
    id: 8,
    title: "Jhoome Jo Pathaan",
    artist: "Arijit Singh",
    duration: "3:28",
    cover: "pics/jhoome jo pathan.jpeg",
    Audio: "songs/Jhoome Jo Pathaan - Pathaan 128 Kbps.mp3"
  },
  {
    id: 9,
    title: "Asal Mein",
    artist: "Darshan Raval",
    duration: "3:44",
    cover: "pics/asal mein.jpeg",
    Audio: "songs/Asal Mein Asal Mein Single 128 Kbps.mp3"
  },
   {
    id: 10,
    title: "Mahiye Jinna sohna",
    artist: "Darshan Raval",
    duration: "3:01",
    cover: "pics/mahiye Jinna sona.jpeg",
    Audio: "songs/Mahiye Jinna Sohna Darshan Raval 128 Kbps.mp3"
  },
   {
    id: 11,
    title: "Bhula Dunga",
    artist: "Darshan Raval",
    duration: "3:44",
    cover: "pics/bhula dunga.jpeg",
    Audio: "songs/Bhula Dunga Darshan Raval 128 Kbps.mp3"
  },
  {
    id: 12,
    title: "Sajni",
    artist: "Arijit Singh",
    duration: "",
    cover: "pics/sajni.jpeg",
    Audio: "songs/Sajni Laapataa Ladies 128 Kbps.mp3"
  },
  {
    id: 13,
    title: "monica",
    artist: "Anirudh Ravichander",
    duration: "3.18",
    cover: "pics/monica.jpg",
    Audio: "songs/[iSongs.info] 02 - Monica.mp3"
  },
  {
    id: 14,
    title: "Beast",
    artist: "Anirudh Ravichander",
    duration: "3:56",
    cover: "pics/beast.jpeg",
    Audio: "songs/Beast Mode Beast 128 Kbps.mp3"
  },
  {
    id: 15,
    title: "Chellamma",
    artist: "Anirudh Ravichander",
    duration: "3:44",
    cover: "pics/Chellamma.jpeg",
    Audio: "songs/Chellamma Doctor 128 Kbps.mp3"
  },
   {
    id: 16,
    title: "Ayudha Pooja",
    artist: "Anirudh Ravichander",
    duration: "2:54",
    cover: "pics/Ayudha Pooja.jpeg",
    Audio: "songs/Ayudha Pooja Devara Part 1 Tamil 128 Kbps.mp3"
  },
   {
    id: 17,
    title: "jailer",
    artist: "Anirudh Ravichander",
    duration: "3:04",
    cover: "pics/Hukum.jpg",
    Audio: "songs/Hukum.mp3"
  },
   {
    id: 18,
    title: "Sooseki",
    artist: "Shreya Goshal",
    duration: "4:20",
    cover: "pics/shreyaghosal.jpeg",
    Audio: "songs/[iSongs.info] 02 - Sooseki.mp3"
  },
   {
    id: 26,
    title: "Kalaavathi",
    artist: "Sid Sriram",
    duration: "3:59",
    cover: "pics/sidsriram.jpg",
    Audio: "songs/Kalaavathi.mp3"
  },
   {
    id: 31,
    title: "Aradhya",
    artist: "Sid Sriram",
    duration: "4:40",
    cover: "pics/Kushi-2023.jpg",
    Audio: "songs/Aradhya.mp3"
  },
  
  {
    id: 35,
    title: "Chukini chameli",
    artist: "Shreya Goshal",
    duration: "6:04",
    cover: "pics/chikinichameli.jpeg",
    Audio: "songs/Chikni Chameli(KoshalWorld.Com).mp3"
  },
  {
    id: 37,
    title: "Naanaa Hyraanaa",
    artist: "Shreya Goshal",
    duration: "3:44",
    cover: "pics/naanaa.jpg",
    Audio: "songs/Naanaa Hyraanaa.mp3"
  },
  {
    id: 38,
    title: "Vachindamma",
    artist: "Sid Sriram",
    duration: "4:10",
    cover: "pics/vachindamma.jpg",
    Audio: "songs/Vachindamma - SenSongsMp3.Co.mp3"
  },
  {
    id: 39,
    title: "Nuvvunte Naa Jathagaa",
    artist: "Sid Sriram",
    duration: "5:50",
    cover: "pics/I-Manoharudu.jpg",
    Audio: "songs/[iSongs.info] 02 - Nuvvunte Naa Jathagaa.mp3"
  },
  {
    id: 40,
    title: "Adangaatha Asuran",
    artist: "AR Rahman",
    duration: "4:11",
    cover: "pics/AR-Rahman.jpg",
    Audio: "songs/Adangaatha Asuran.mp3"
  },
  {
    id: 41,
    title: "Preminche Premavaa",
    artist: "Shreya Goshal",
    duration: "5:56",
    cover: "pics/Nuvvu-Nenu-Prema.jpg",
    Audio: "songs/[iSongs.info] 02 - Preminche Premavaa.mp3"
  },
  {
    id: 34,
    title: "Newyork Nagaram",
    artist: "AR Rahman",
    duration: "6:19",
    cover: "pics/Nuvvu-Nenu-Prema.jpg",
    Audio: "songs/[iSongs.info] 03 - Newyork Nagaram.mp3"
  },
  {
    id: 42,
    title: "Tere Bina",
    artist: "AR Rahman",
    duration: "5:09",
    cover: "pics/terebina.jpg",
    Audio: "songs/Tere Bina Guru 128 Kbps.mp3"
  },
  {
    id: 43,
    title: "Maa Tujhe Salaam",
    artist: "AR Rahman",
    duration: "6:14",
    cover: "pics/maatujhe.jpg",
    Audio: "songs/Maa Tujhe Salaam Vande Mataram 128 Kbps.mp3"
  },
  {
    id: 44,
    title: "Dilbar",
    artist: "Dhvani Bhanushali",
    duration: "3:04",
    cover: "pics/dillbar.jpeg",
    Audio: "songs/Dilbar Satyameva Jayate 128 Kbps.mp3"
  },
  {
    id: 45,
    title: "Psycho Saiyaan",
    artist: "Dhvani Bhanushali",
    duration: "2:46",
    cover: "pics/Psycho-Saiyaan.jpg",
    Audio: "songs/[iSongs.info] 01 - Psycho Saiyaan.mp3"
  }, {
    id: 46,
    title: "Nayan",
    artist: "Dhvani Bhanushali",
    duration: "4:14",
    cover: "pics/Nayan.jpg",
    Audio: "songs/Nayan Dhvani Bhanushali 128 Kbps.mp3"
  },
];

const trendingIds = [5, 26, 35, 46, 38];