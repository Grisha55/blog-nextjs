import { ObjectId } from 'mongodb';
import clientPromise from './mongodb';

export interface IPost {
	id: string;
	title: string;
	body: string;
}

export async function getPosts(
	page: number = 1,
	limit: number = 6
): Promise<IPost[]> {
	const client = await clientPromise;
	const db = client.db('blog'); // убедись, что база правильная

	const posts = await db
		.collection('posts')
		.find()
		.skip((page - 1) * limit)
		.limit(limit)
		.toArray();

	return posts.map(post => ({
		id: post._id.toString(),
		title: post.title,
		body: post.body
	}));
}

export async function getPostsCount(): Promise<number> {
	const client = await clientPromise;
	const db = client.db('blog');
	return db.collection('posts').countDocuments();
}

export async function getPostById(id: string) {
	if (!ObjectId.isValid(id)) return null;

	const client = await clientPromise;
	const db = client.db('blog');

	const post = await db.collection('posts').findOne({ _id: new ObjectId(id) });

	if (!post) return null;

	return {
		id: post._id.toString(),
		title: post.title,
		body: post.body
	};
}
