"use client";

import { EnvelopeIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { toast } from "react-hot-toast";

const shareButtons = [
	{ name: "Email", icon: EnvelopeIcon, color: "bg-orange-500 hover:bg-orange-600" },
	{ name: "WhatsApp", icon: ChatBubbleLeftRightIcon, color: "bg-green-500 hover:bg-green-600" },
	{ name: "Facebook", icon: "facebook", color: "bg-blue-600 hover:bg-blue-700" },
	{ name: "X (Twitter)", icon: "x", color: "bg-black hover:bg-gray-800" },
];

export default function RecommendationsContent() {
	const copyLink = () => {
		navigator.clipboard.writeText("https://educify.com/recommendations/bekwa-undie");
		toast.success("Link copied to clipboard");
	};

	return (
		<div className="text-center">
			<h1 className="text-3xl font-bold text-gray-900 mb-4">
				Hey Champ!
				<br />
				It looks like you don&apos;t have any
				<br />
				recommendations yet
			</h1>
			<p className="text-lg text-gray-600 mb-8">
				But don&apos;t worry, you can always request for recommendations <br /> from your colleagues, friends and
				family.
			</p>

			{/* Share options */}
			<div className="border-2 border-dashed border-gray-300 rounded-lg p-4 mb-8">
				<h2 className="text-xl font-semibold text-gray-900 mb-6">Ask for recommendations via:</h2>

				<div className="flex justify-center space-x-4 mb-6">
					{shareButtons.map((button) => (
						<button
							key={button.name}
							className={`${button.color} text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 transition-colors`}>
							{button.name === "Facebook" ? (
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
								</svg>
							) : button.name === "X (Twitter)" ? (
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
								</svg>
							) : (
								<button.icon className="w-5 h-5" />
							)}
							<span>{button.name}</span>
						</button>
					))}
				</div>
			</div>

			<div className="text-center mb-6">
				<span className="text-gray-500 font-bold">Or</span>
			</div>
			<div className="max-w-md mx-auto">
				<label className="block text-sm font-medium text-gray-700 text-left mb-2">Link that can be copied</label>
				<div className="flex">
					<input
						type="text"
						value="https://educify.com/recommendations/bekwa-undie"
						readOnly
						className="flex-1 px-3 py-2 border border-gray-300 rounded-l-full bg-gray-50 text-gray-900"
					/>
					<button
						onClick={copyLink}
						className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-full font-medium flex items-center space-x-2 transition-colors">
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
							/>
						</svg>
						<span>Copy Link</span>
					</button>
				</div>
			</div>
		</div>
	);
}
