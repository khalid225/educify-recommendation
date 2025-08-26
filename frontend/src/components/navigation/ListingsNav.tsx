import { DocumentIcon } from "@heroicons/react/24/outline";

export default function ListingsNav() {
	return (
		<a
			href="#"
			className="flex items-center space-x-3 px-3 py-1.5 transition-colors text-gray-300 hover:bg-gray-800 hover:text-white rounded-full">
			<DocumentIcon className="h-5 w-5" />
			<span className="text-sm font-semibold">My listings</span>
		</a>
	);
}
