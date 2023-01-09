'use strict';

const { TrackService } = require('./trackService');
const { KafkaNotificationProducerService } = require('./kafkaNotificationProducerService');

const trackService = new TrackService(new KafkaNotificationProducerService());

module.exports = { trackService };
