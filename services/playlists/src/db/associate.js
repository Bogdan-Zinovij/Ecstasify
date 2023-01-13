const { Playlists } = require('./models/Playlists');
const { PlaylistTracks } = require('./models/PlaylistTracks');

const associate = () => {
  Playlists.hasMany(PlaylistTracks);
  PlaylistTracks.belongsTo(Playlists, {
    foreignKey: 'playlistId',
  });
};

module.exports = { associate };
