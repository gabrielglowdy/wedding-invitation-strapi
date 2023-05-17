'use strict';

/**
 * guest-syukuran controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::guest-syukuran.guest-syukuran', ({ strapi }) => ({
  async updateData(ctx){
    const { id, slug } = ctx.params;

    const entity = await strapi.db.query('api::guest-syukuran.guest-syukuran').findOne({
      where: {
        slug: slug || id
      },
      populate: true
    });

    if (entity) {
      await strapi.db.query('api::guest-syukuran.guest-syukuran').update(
        {
          where: {
            id: entity.id
          },
          data : ctx.request.body.data
        }
      );
    }

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));

