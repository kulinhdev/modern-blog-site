import { formatDate } from "@/utils/common";
import Link from "next/link";

function PostListClient({ posts }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			{posts.map((post) => (
				<div
					key={post.id}
					className="bg-gray-200 shadow-md rounded-md my-3 p-4"
				>
					<img
						src={post.imageUrl}
						alt={post.title}
						className="mx-auto my-2 h-96 w-auto rounded-md"
					/>
					<h2 className="text-xl font-bold mb-2">{post.title}</h2>
					<div className="text-gray-500 mb-4">
						{formatDate(post.createdAt)}
					</div>
					<div className="mb-4">
						<div
							dangerouslySetInnerHTML={{
								__html:
									post.content.length > 200
										? `${post.content.substring(0, 50)}...`
										: post.content,
							}}
						></div>
					</div>
					<Link href={`/client/posts/${post.slug}`}>
						<p className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
							Read More
						</p>
					</Link>
				</div>
			))}
		</div>
	);
}

export default PostListClient;
