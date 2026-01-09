export default function AboutPage() {
	return (
		<div className="min-h-screen bg-linear-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center px-6 py-12">
			{/* Заголовок */}
			<h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">
				About Us
			</h1>

			{/* Подзаголовок */}
			<p className="max-w-2xl text-center text-gray-700 text-lg mb-12">
				Welcome to our platform! We aim to provide the best experience for our
				users, with clean design, fast performance, and useful features.
			</p>

			{/* Карточки с преимуществами */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
				<div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
					<h2 className="text-xl font-bold text-gray-900 mb-2">
						Fast & Reliable
					</h2>
					<p className="text-gray-600">
						Our platform is optimized for speed and reliability, so you can
						focus on what matters.
					</p>
				</div>

				<div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
					<h2 className="text-xl font-bold text-gray-900 mb-2">
						Modern Design
					</h2>
					<p className="text-gray-600">
						Clean, responsive, and modern UI ensures a smooth experience on any
						device.
					</p>
				</div>

				<div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
					<h2 className="text-xl font-bold text-gray-900 mb-2">
						Secure & Private
					</h2>
					<p className="text-gray-600">
						We prioritize your privacy and security in every part of our
						platform.
					</p>
				</div>
			</div>

			{/* Footer текст */}
			<p className="mt-16 text-gray-500 text-sm text-center">
				© 2026 MyCompany. All rights reserved.
			</p>
		</div>
	);
}
