import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function SettingsNav() {
	return (
		<a
			href="#"
			className="flex items-center space-x-3 px-3 py-1.5 text-gray-300 hover:bg-gray-800 hover:text-white rounded-full transition-colors">
			<Cog6ToothIcon className="h-5 w-5" />
			<span className="text-sm font-semibold">Settings</span>
		</a>
	);
}
