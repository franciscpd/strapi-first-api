'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  sendEmail: async ({ subject, html, to }) => {
    strapi.log.info('Services sendEmail');
    await strapi.plugins['email'].services.email.send({
      to,
      replyTo: 'fwjeylosinnsiftequ@ttirv.org',
      subject,
      html,
    });
    strapi.log.info('Services finish');

    return { message: 'Email sent' };
  },
};
