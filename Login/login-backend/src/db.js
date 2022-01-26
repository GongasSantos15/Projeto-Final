const { MongoClient, ObjectId } = require('mongodb')
const URL = process.env.MONGO_URL ?? "mongodb://localhost:3002"
const DATABASE_NAME = ""
const USER_COLLECTION = ""
const SESSION_COLLECTION = ""


let client
async function connectToMongo() {
    try {
        if (!client) {
            client = await MongoClient.connect(URL)
        }
        return client;
    } catch (err) {
        console.log(err)
    }
}

async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return client.db(dbName).collection(collectionName)
}

async function insertUser(user) {
    const collection = await getMongoCollection(DATABASE_NAME, USER_COLLECTION)
    const res = await collection.insertOne(user)
    return res.insertedId
}

async function findUserByEmail(email) {
    const collection = await getMongoCollection(DATABASE_NAME, USER_COLLECTION)
    const user = await collection.findOne({email})
    return user
}

async function insertSession(session) {
    const collection = await getMongoCollection(DATABASE_NAME, SESSION_COLLECTION)
    const res = await collection.insertOne(session)
    return res.insertedId
}

async function findSessionByToken(token) {
    if (!ObjectId.isValid(token)) return undefined
    const collection = await getMongoCollection(DATABASE_NAME, SESSION_COLLECTION)
    const session = await collection.findOne({_id: new ObjectId(token)})
    return session
}

module.exports = { connectToMongo, insertUser, findUserByEmail, insertSession, findSessionByToken }