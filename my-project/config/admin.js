module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c71cfdbe9b37613e3205f04654462f8e'),
  },
});
