'use strict';

/**
 * airdrop service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::airdrop.airdrop');
