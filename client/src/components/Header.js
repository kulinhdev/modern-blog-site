import Link from "next/link";

function Header({ currentUser }) {
	return (
		<header className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
				<Link href="/">
					<a>
						<h1 className="text-xl font-bold">My Blog</h1>
					</a>
				</Link>
				<nav>
					<ul className="flex space-x-4">
						{currentUser ? (
							<>
								<li>
									<Link href="/admin">
										<a>Admin</a>
									</Link>
								</li>
								<li>
									<Link href="/logout">
										<a>Logout</a>
									</Link>
								</li>
							</>
						) : (
							<>
								<li>
									<Link href="/signup">
										<a>Sign Up</a>
									</Link>
								</li>
								<li>
									<Link href="/login">
										<a>Login</a>
									</Link>
								</li>
							</>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
