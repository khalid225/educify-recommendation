import { UserIcon } from "@heroicons/react/24/outline";

interface AccountNavProps {
	isActive: boolean;
}

export default function AccountNav({ isActive }: AccountNavProps) {
	return (
		<a
			href="#"
			className={`flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-1.5 transition-colors relative ${
				isActive ? "bg-gray-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
			}`}>
			{isActive && <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 sm:h-8 bg-white"></div>}
			<UserIcon className="h-4 w-4 sm:h-5 sm:w-5" />
			<span className="hidden md:block text-xs sm:text-sm font-semibold">My Account</span>
		</a>
	);
}
