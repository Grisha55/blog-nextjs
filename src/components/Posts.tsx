import { getPosts, getPostsCount, IPost } from '@/lib/posts';
import Link from 'next/link';

interface Props {
	searchParams?: { page?: string };
}

export default async function Posts({ searchParams }: Props) {
	const currentPage = parseInt(searchParams?.page || '1', 10);
	const limit = 6;

	const posts: IPost[] = await getPosts(currentPage, limit);
	const totalPosts = await getPostsCount();
	const totalPages = Math.ceil(totalPosts / limit);

	return (
		<div className="min-h-screen bg-linear-to-b from-blue-50 to-purple-50 py-12 px-6">
			<h1 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">
				All Posts
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
				{posts.map(post => (
					<Link
						key={post.id}
						href={`/posts/${post.id}`}
					>
						<div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 cursor-pointer transform hover:-translate-y-1 flex flex-col justify-between h-full">
							<h2 className="text-2xl font-semibold text-gray-900 mb-4">
								{post.title}
							</h2>
							<p className="text-gray-600 text-sm mb-4 grow">
								{post.body.slice(0, 100)}...
							</p>
							<span className="text-blue-600 font-medium hover:underline">
								Read more →
							</span>
						</div>
					</Link>
				))}
			</div>

			{/* Пагинация */}
			<div className="flex justify-center items-center gap-3 mt-12">
				{Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
					<Link
						key={page}
						href={`/posts?page=${page}`}
						className={`px-4 py-2 rounded-full border ${
							page === currentPage
								? 'bg-blue-600 text-white border-blue-600'
								: 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
						} transition-colors`}
					>
						{page}
					</Link>
				))}
			</div>

			<footer className="mt-20 text-center text-gray-500 text-sm">
				© 2026 MyBlog. All rights reserved.
			</footer>
		</div>
	);
}
