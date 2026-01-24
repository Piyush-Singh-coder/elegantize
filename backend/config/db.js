const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

// Initialize Sequelize with database credentials
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    // Enable logging in dev, disable in prod (or use custom logger)
    logging: process.env.NODE_ENV === "development" ? console.log : false,
    dialectOptions: {
      // Hostinger / Cloud DBs often need SSL.
      // If DB_SSL=true in .env, or if we are in production (careful with this default if localhost prod),
      // we enable it.
      ...(process.env.DB_SSL === "true" && {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Fix for self-signed certs typical in some shared hosting/VPS
        },
      }),
    },
  },
);

module.exports = sequelize;
