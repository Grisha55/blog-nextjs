import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI as string;

if (!uri) {
	throw new Error('❌ MONGO_URI is not defined in environment variables');
}

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
	// В dev используем global, чтобы избежать повторных подключений
	if (!globalThis._mongoClientPromise) {
		client = new MongoClient(uri, options);
		globalThis._mongoClientPromise = client.connect();
	}
	clientPromise = globalThis._mongoClientPromise;
} else {
	// В production всегда создаём новое подключение
	client = new MongoClient(uri, options);
	clientPromise = client.connect();
}

export default clientPromise;
