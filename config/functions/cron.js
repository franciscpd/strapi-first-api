'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/3.0.0-beta.x/concepts/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Execute every minute
   */
  '0 * * * * *': async () => {
    strapi.log.info('sending email');
    await strapi.plugins['email'].services.email.send({
      to: 'fwjeylosinnsiftequ@ttirv.org',
      replyTo: 'fwjeylosinnsiftequ@ttirv.org',
      subject: 'Use strapi email provider successfully',
      text: 'Hello world',
      html: '<p>Hello world</p>',
    });
    strapi.log.info('email send');
  }
};
