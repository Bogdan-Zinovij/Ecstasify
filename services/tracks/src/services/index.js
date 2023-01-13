'use strict';

const { TrackService } = require('./trackService');
const { KafkaNotificationProducerService } = require('./kafkaNotificationProducerService');

// const trackService = new TrackService(new KafkaNotificationProducerService());
const trackService = new TrackService();

module.exports = { trackService };
