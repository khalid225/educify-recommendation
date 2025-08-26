"use client";

import {
	DashboardNav,
	ClassesNav,
	ListingsNav,
	MessagesNav,
	WorkspaceNav,
	FinancialsNav,
	AccountNav,
	AvailabilityToggle,
	SettingsNav,
	LogoutNav,
} from "./navigation";

interface SidebarProps {
	isAvailable: boolean;
	setIsAvailable: (value: boolean) => void;
	activeTab: string;
}

export default function Sidebar({ isAvailable, setIsAvailable, activeTab }: SidebarProps) {
	// Map activeTab to navigation item
	const isAccountActive = () => {
		return ["profile", "availability", "recommendations", "reviews", "notification"].includes(activeTab);
	};

	return (
		<aside className="w-90 bg-black min-h-full flex flex-col overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-600">
			<nav className="mt-8 px-4 flex-1">
				<ul className="space-y-2">
					<li>
						<DashboardNav />
					</li>
					<li>
						<ClassesNav />
					</li>
					<li>
						<ListingsNav />
					</li>
					<li>
						<MessagesNav />
					</li>
					<li>
						<WorkspaceNav />
					</li>
					<li>
						<FinancialsNav />
					</li>
					<li>
						<AccountNav isActive={isAccountActive()} />
					</li>
				</ul>
			</nav>

			{/* Bottom section - Fixed at bottom */}
			<div className="px-4 pb-6 border-t border-gray-700">
				<AvailabilityToggle isAvailable={isAvailable} setIsAvailable={setIsAvailable} />
				<SettingsNav />
				<LogoutNav />
			</div>
		</aside>
	);
}
