module.exports = async (ctx, next) => {
  const { user: targetUser } = ctx.request.query;

  if (ctx.state.user) {
    const { id: loggedInUser } = ctx.state.user;

    if (!targetUser) {
      return ctx.unauthorized('Specify a target user equal to your own id ?user=${user.id}');
    }

    if (targetUser.toString() === loggedInUser.toString()) {
      return await next();
    }

    return ctx.unauthorized('Target user is different from logged in user');
  }

  return ctx.unauthorized('You\'re not logged in!');
};
