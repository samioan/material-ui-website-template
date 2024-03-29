const gameVideosShown = (state) => state.videos.gameVideosShown;
const gameVideosOnPage = (state) => state.videos.gameVideosOnPage;
const gameVideosTotal = (state) => state.videos.gameVideosTotal;
const musicVideosShown = (state) => state.videos.musicVideosShown;
const musicVideosOnPage = (state) => state.videos.musicVideosOnPage;
const musicVideosTotal = (state) => state.videos.musicVideosTotal;
const allGameVideos = (state) => state.videos.allGameVideos;
const allMusicVideos = (state) => state.videos.allMusicVideos;

export {
  gameVideosShown,
  gameVideosOnPage,
  gameVideosTotal,
  musicVideosShown,
  musicVideosOnPage,
  musicVideosTotal,
  allGameVideos,
  allMusicVideos,
};
