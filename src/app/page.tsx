import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Welcome to My Blog',
	description: 'Start reading amazing posts now!'
};

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-blue-50 to-purple-50 px-6">
			{/* Логотип или картинка */}
			<Image
				src="/globe.svg"
				alt="Globe illustration"
				width={100}
				height={100}
				className="mb-8 animate-bounce"
			/>

			{/* Заголовок */}
			<h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 text-center mb-6">
				Welcome to My Blog
			</h1>

			{/* Подзаголовок */}
			<p className="text-gray-700 text-lg sm:text-xl text-center max-w-xl mb-12">
				Explore the latest posts, tutorials, and stories. Click the button below
				to start reading!
			</p>

			{/* Кнопка перехода к постам */}
			<Link
				href="/posts?page=1"
				className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
			>
				Go to Posts
			</Link>
		</div>
	);
}
