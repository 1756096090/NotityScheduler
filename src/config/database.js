const { MongoClient } = require('mongodb');

let db;

async function connectDB() {
  const uri = "mongodb+srv://user_test:Ismacs2003@firstproyectwebengineer.b6xlw.mongodb.net/?retryWrites=true&w=majority&appName=FirstProyectWebEngineering";
  
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log("Connected to MongoDB!");
    db = client.db('MedicalRecord');
    return db;
  } catch (err) {
    console.error(err);
    process.exit(1);  // Exit process with failure
  }
}

module.exports = { connectDB, db };