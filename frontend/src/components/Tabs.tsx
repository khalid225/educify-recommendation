"use client";

interface TabsProps {
	activeTab: string;
	setActiveTab: (value: string) => void;
	isStudentMode: boolean;
	setIsStudentMode: (value: boolean) => void;
}

const tabs = [
	{ id: "profile", name: "My Profile" },
	{ id: "availability", name: "My Availability" },
	{ id: "recommendations", name: "Recommendations" },
	{ id: "reviews", name: "Reviews" },
	{ id: "notification", name: "Notification" },
];

export default function Tabs({ activeTab, setActiveTab, isStudentMode, setIsStudentMode }: TabsProps) {
	return (
		<div className="bg-white border-b border-gray-200 px-3 sm:px-6 py-2">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
				<nav className="flex flex-wrap gap-2 sm:gap-4 lg:gap-8">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`px-2 sm:px-4 border-b-2 font-bold text-xs sm:text-sm rounded-t-full ${
								activeTab === tab.id
									? "border-gray-600 text-gray-600 border-b-4 font-bold pb-0"
									: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
							}`}>
							{tab.name}
							{activeTab === tab.id && (
								<div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600 rounded-t-full"></div>
							)}
						</button>
					))}
				</nav>

				<div className="flex items-center space-x-2 font-bold">
					<span className="text-xs sm:text-sm text-gray-600">Become a student</span>
					<button
						onClick={() => setIsStudentMode(!isStudentMode)}
						className={`relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
							isStudentMode ? "bg-blue-400" : "bg-gray-300"
						}`}>
						<span
							className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-gray-600 transition-transform ${
								isStudentMode ? "translate-x-5 sm:translate-x-6" : "translate-x-1"
							}`}
						/>
					</button>
				</div>
			</div>
		</div>
	);
}
