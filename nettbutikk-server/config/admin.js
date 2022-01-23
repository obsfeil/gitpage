module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8740cfcde623c81865776a052bcd1044'),
  },
});
