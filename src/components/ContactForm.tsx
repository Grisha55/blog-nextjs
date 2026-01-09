'use client';

import { getContactFormData } from '@/lib/contactForm'
import { useState } from 'react';

export default function ContactForm() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [opinion, setOpinion] = useState('');

  const {message} = getContactFormData(name, email, opinion);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert(message);
    clearFields();
	};

  const clearFields = () => {
    setEmail('');
    setName('');
    setOpinion('');
  }

	return (
		<div className="flex items-center justify-center min-h-screen flex-col gap-10">
			<h1 className="text-2xl font-black">Contact Form</h1>
			<form
				onSubmit={handleSubmit}
				className="space-y-5"
			>
				<div>
					<label htmlFor="name">Full Name</label>
					<div className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-white">
						<input
							id="name"
							type="text"
							placeholder="John Doe"
							value={name}
							onChange={e => setName(e.target.value)}
							className="text-gray-950 border-0 focus-visible:ring-0 focus-visible:outline-none shadow-none placeholder:text-black/25"
						/>
					</div>
				</div>

				<div>
					<label htmlFor="email">Email Address</label>
					<div className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-white">
						<label className="w-4 h-4 text-gray-500" />
						<input
							id="email"
							type="email"
							placeholder="you@example.com"
							value={email}
							onChange={e => setEmail(e.target.value)}
							className="text-gray-950 border-0 focus-visible:ring-0 focus-visible:outline-none shadow-none placeholder:text-black/25"
						/>
					</div>
				</div>

				<div>
					<label htmlFor="opinion">Your opinion about us:</label>
					<div className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-white">
						<label className="w-4 h-4 text-gray-500" />
						<textarea
							id="opinion"
							placeholder="Your opinion..."
							value={opinion}
							onChange={e => setOpinion(e.target.value)}
							className="text-gray-950 border-0 focus-visible:ring-0 focus-visible:outline-none shadow-none placeholder:text-black/25"
						/>
					</div>
				</div>

				<button
					type="submit"
					className="w-full rounded-xl hover:cursor-pointer text-white font-medium shadow-md"
				>
					Get Started
				</button>
			</form>

			<p className="text-xs text-gray-500 text-center mt-4">
				By continuing, you agree to our{' '}
				<span className="text-indigo-600 font-medium cursor-pointer hover:underline">
					Terms of Service
				</span>{' '}
				and{' '}
				<span className="text-indigo-600 font-medium cursor-pointer hover:underline">
					Privacy Policy
				</span>
				.
			</p>
		</div>
	);
}
