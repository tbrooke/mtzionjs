exports.Configuration = {

  apiEndpoint: 'https://brookelaw.prismic.io/api',

  // -- Access token if the Master is not open
  // accessToken: 'MC5VdHJBWGdFQUFENWZrQ0ZH.WO-_ve-_ve-_vX1jJe-_ve-_vTcgYA5377-977-9YO-_ve-_ve-_vUzvv73vv73vv73vv71t77-977-977-9Vu-_ve-_vQ',

  // OAuth
  // clientId: 'UtrAXgEAACdfkCFF',
  // clientSecret: 'e5e9335d42ba94973440c67b844f87c8',

  // -- Links resolution rules
  linkResolver: function(ctx, doc) {
    if (doc.isBroken) return false;
    return '/documents/' + doc.id + '/' + doc.slug + (ctx.maybeRef ? '?ref=' + ctx.maybeRef : '');
  }

};
