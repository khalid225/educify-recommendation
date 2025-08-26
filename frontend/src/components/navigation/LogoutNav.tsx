import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

export default function LogoutNav() {
	return (
		<a
			href="#"
			className="flex items-center space-x-3 px-3 py-1.5 text-red-400 hover:bg-gray-800 hover:text-red-300 rounded-full transition-colors">
			<ArrowRightOnRectangleIcon className="h-5 w-5" />
			<span className="text-sm font-semibold">Log Out</span>
		</a>
	);
}
