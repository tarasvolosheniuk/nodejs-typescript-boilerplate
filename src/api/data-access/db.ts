import { MongoClient } from "mongodb";

const url = process.env.MONGO_URI!;
const dbName = process.env.DB_NAME!;
const mongoClient = new MongoClient(url, { readPreference: "primary" });

let isConnected = false;
let dbClient: MongoClient;

export const makeDb = async () => {
  if (!dbClient) {
    dbClient = await getDbClient();
  }
  return dbClient.db(dbName);
};

export const getDbClient = async () => {
  if (!dbClient || !isConnected) {
    dbClient = await mongoClient.connect();
    isConnected = true;
  }
  return dbClient;
};
