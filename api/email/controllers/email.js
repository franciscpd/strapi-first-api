'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  send: async (ctx) => {
    console.log('email.send', ctx);

    const { to, subject, html } = ctx.request.body;

    return await strapi.services.email.sendEmail({
      to,
      subject,
      html,
    });
  }
};
