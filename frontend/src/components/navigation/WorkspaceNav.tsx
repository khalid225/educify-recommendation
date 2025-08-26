import { ComputerDesktopIcon } from "@heroicons/react/24/outline";

export default function WorkspaceNav() {
	return (
		<a
			href="#"
			className="flex items-center space-x-3 px-3 py-2 transition-colors text-gray-300 hover:bg-gray-800 hover:text-white rounded-full">
			<ComputerDesktopIcon className="h-5 w-5" />
			<span className="text-sm font-semibold">Workspace</span>
		</a>
	);
}
