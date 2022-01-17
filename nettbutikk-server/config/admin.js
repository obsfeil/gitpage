module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '507f1a751d6931dd10e976e78aecfafc'),
  },
});
