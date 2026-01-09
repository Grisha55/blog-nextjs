import { getPostById } from '@/lib/posts';

interface Props {
  params: { id: string } | Promise<{ id: string }>;
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    return <div className="text-center py-20 text-gray-500">Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-purple-50 py-12 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
      <p className="text-gray-700 text-lg whitespace-pre-line">{post.body}</p>
    </div>
  );
}
