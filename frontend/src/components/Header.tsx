"use client";

import { MagnifyingGlassIcon, QuestionMarkCircleIcon, BellIcon } from "@heroicons/react/24/outline";

interface HeaderProps {
	isStudentMode: boolean;
	setIsStudentMode: (value: boolean) => void;
}

export default function Header({ isStudentMode, setIsStudentMode }: HeaderProps) {
	return (
		<header className="bg-white shadow-sm border-b border-gray-200 h-12">
			<div className="w-full h-full">
				<div className="flex justify-between items-center h-full">
					{/* Left side - Logo and Search */}
					<div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
						<div className="flex items-center space-x-2">
							<div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center">
								<span className="text-white font-bold text-sm sm:text-lg">e</span>
							</div>
							<span className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">educify</span>
						</div>

						<div className="relative ml-2 sm:ml-4">
							<MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
							<input
								type="text"
								placeholder="Search for anything"
								className="pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent w-32 sm:w-48 lg:w-64 text-sm"
							/>
						</div>
					</div>

					{/* Right side - Actions and Profile */}
					<div className="flex items-center space-x-2 sm:space-x-4">
						<div className="relative bg-gray-200 rounded-full p-1.5 sm:p-2">
							<QuestionMarkCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 cursor-pointer" />
						</div>

						<div className="relative bg-gray-200 rounded-full p-1.5 sm:p-2">
							<BellIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 cursor-pointer" />
							<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
								23
							</span>
						</div>

						<div className="hidden sm:flex items-center bg-gray-200 rounded-full px-2 py-1">
							<div className="text-left px-3 sm:px-5">
								<p className="text-xs sm:text-sm font-medium text-gray-900">Bekwa Undie</p>
								<p className="text-xs text-gray-500">Tutor</p>
							</div>
							<div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 rounded-full flex items-center justify-center ml-2 sm:ml-3">
								<span className="text-gray-600 font-medium text-xs sm:text-sm">BU</span>
							</div>
						</div>

						{/* Mobile profile button */}
						<div className="sm:hidden bg-gray-200 rounded-full p-1.5">
							<div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
								<span className="text-gray-600 font-medium text-xs">BU</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
