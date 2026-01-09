import { getPostById } from '@/lib/posts';
import Link from 'next/link';

interface Props {
	params: { id: string } | Promise<{ id: string }>;
}

export default async function PostPage({ params }: Props) {
	const { id } = await params;
	const post = await getPostById(id);

	if (!post) {
		return (
			<div className="text-center py-20 text-gray-500">Post not found</div>
		);
	}

	return (
		<div className="min-h-screen bg-linear-to-b from-blue-50 to-purple-50 py-12 px-6 max-w-4xl mx-auto">
			<h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
			<p className="text-gray-700 text-lg whitespace-pre-line">{post.body}</p>
			<Link
				href="/posts?page=1"
				className="block mt-6 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-center"
			>
				Go to Posts
			</Link>
		</div>
	);
}
