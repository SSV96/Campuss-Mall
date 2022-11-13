export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET,
    expiresIn: process.env.EXPIRES_IN,
  },
});
