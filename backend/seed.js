const sequelize = require("./config/db");
const User = require("./models/User");
const dotenv = require("dotenv");

dotenv.config();

const seedAdmin = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    const adminExists = await User.findOne({ where: { username: "admin" } });

    if (!adminExists) {
      await User.create({
        username: "admin",
        password: "adminpassword123", // Change this in production!
      });
      console.log("Admin user created successfully");
    } else {
      console.log("Admin user already exists");
    }
    process.exit();
  } catch (error) {
    console.error("Error seeding admin:", error);
    process.exit(1);
  }
};

seedAdmin();
