import sequelize from "./sequelize.js";

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log(`Error connect database: ${error.message}`);
    throw error;
  }
};

export default connectDatabase;
