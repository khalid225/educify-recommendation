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
		<aside className="w-16 sm:w-20 md:w-75 bg-black min-h-full flex flex-col overflow-y-auto">
			<nav className="mt-4 px-2 sm:px-4 flex-1">
				<ul className="space-y-1">
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
			<div className="px-2 sm:px-4 pb-4">
				<AvailabilityToggle isAvailable={isAvailable} setIsAvailable={setIsAvailable} />
				<SettingsNav />
				<LogoutNav />
			</div>
		</aside>
	);
}
