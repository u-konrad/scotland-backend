module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '56f79ff5fbcc5a171f7f9698a038e512'),
  },
});
