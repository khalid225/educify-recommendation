import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

export default function MessagesNav() {
	return (
		<a
			href="#"
			className="flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-1.5 transition-colors text-gray-300 hover:bg-gray-800 hover:text-white rounded-full">
			<ChatBubbleLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" />
			<span className="hidden md:block text-xs sm:text-sm font-semibold">Messages & Requests</span>
			<span className="ml-auto bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
				23
			</span>
		</a>
	);
}
