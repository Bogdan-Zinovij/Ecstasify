const { Tracks } = require('./models/Tracks');
const { Genres } = require('./models/Genres');

const associate = () => {
  Genres.hasMany(Tracks);
  Tracks.belongsTo(Genres);
};

module.exports = { associate };
