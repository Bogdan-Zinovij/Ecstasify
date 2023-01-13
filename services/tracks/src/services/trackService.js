'use strict'

const { Tracks } = require('../db/models/Tracks')
const { Genres } = require('../db/models/Genres')
const { v4: uuid } = require('uuid')
const { axiosClient } = require('../config/axios.config')
const { errorMessages } = require('../config')

class TrackService {
  async getTracks() {
    const tracks = await Tracks.findAll({ include: Genres })
    const trackAuthors = await this.getAllTracksAuthors()

    for (const track of tracks) {
      const matchedTrackAuthor = trackAuthors.filter(
        (author) => author.id === track.author
      )

      if (matchedTrackAuthor.length === 0) {
        throw new Error(errorMessages.AUTHOR_NOT_FOUND)
      }
      track.author = matchedTrackAuthor[0]
    }

    return tracks
  }

  async getTrackById(id) {
    const track = await Tracks.findOne({ where: { id }, include: Genres })

    if (!track) throw new Error(errorMessages.TRACK_NOT_EXISTS_ID)

    const author = await this.getTrackAuthor(track.author)
    track.author = author

    return track
  }

  async createTrack(trackData) {
    const trackID = uuid()
    trackData.id = trackID

    const author = await this.getTrackAuthor(trackData.author)

    const createdTrack = await Tracks.create(trackData)
    createdTrack.author = author

    return this.getTrackById(trackID)
  }

  async updateTrack(id, trackData) {
    const track = await Tracks.findOne({ where: { id } })
    if (!track) throw new Error(errorMessages.TRACK_NOT_EXISTS_ID)

    if (trackData.author) await this.getTrackAuthor(trackData.author)

    await Tracks.update(trackData, { where: { id } })

    return this.getTrackById(id)
  }

  async deleteTrack(id) {
    const track = await Tracks.findOne({ where: { id } })

    if (!track) throw new Error(errorMessages.TRACK_NOT_EXISTS_ID)

    const deleteResult = await Tracks.destroy({ where: { id } })
    if (!deleteResult) throw new Error(errorMessages.TRACK_DELETION_FAILED)

    return track
  }

  async getTrackAuthor(trackAuthorId) {
    const trackAuthorRes = await axiosClient
      .get(`authors/${trackAuthorId}`)
      .catch((err) => {
        console.log(err)
        throw new Error(errorMessages.AUTHOR_NOT_FOUND)
      })

    const trackAuthor = trackAuthorRes?.data
    if (!trackAuthor) {
      throw new Error(errorMessages.AUTHOR_NOT_FOUND)
    }

    return trackAuthor
  }

  async getAllTracksAuthors() {
    const allTracksAuthorsRes = await axiosClient
      .get('authors')
      .catch((err) => {
        console.log(err)
        throw new Error(errorMessages.AUTHORS_NOT_FOUND)
      })

    const allTracksAuthors = allTracksAuthorsRes?.data

    if (!allTracksAuthors) {
      throw new Error(errorMessages.AUTHORS_NOT_FOUND)
    }

    return allTracksAuthors
  }
}

module.exports = { TrackService }
