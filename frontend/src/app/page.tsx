"use client";

import { useState } from "react";
import {
	Header,
	Sidebar,
	Tabs,
	RecommendationsContent,
	ProfileContent,
	AvailabilityContent,
	ReviewsContent,
	NotificationContent,
	FloatingHelpButton,
} from "../components";

export default function Home() {
	const [isStudentMode, setIsStudentMode] = useState(false);
	const [isAvailable, setIsAvailable] = useState(true);
	const [activeTab, setActiveTab] = useState("recommendations");

	return (
		<div className="min-h-screen bg-gray-100 overflow-x-hidden">
			<Header isStudentMode={isStudentMode} setIsStudentMode={setIsStudentMode} />

			<div className="flex min-h-[calc(100vh-3rem)]">
				<Sidebar isAvailable={isAvailable} setIsAvailable={setIsAvailable} activeTab={activeTab} />

				<div className="flex-1 flex flex-col min-w-0">
					<Tabs
						activeTab={activeTab}
						setActiveTab={setActiveTab}
						isStudentMode={isStudentMode}
						setIsStudentMode={setIsStudentMode}
					/>

					<main className="flex-1 bg-gray-100 overflow-y-auto">
						<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 my-2 bg-white rounded-2xl shadow-lg border border-gray-100">
							{activeTab === "recommendations" && <RecommendationsContent />}
							{activeTab === "profile" && <ProfileContent />}
							{activeTab === "availability" && <AvailabilityContent />}
							{activeTab === "reviews" && <ReviewsContent />}
							{activeTab === "notification" && <NotificationContent />}
						</div>
					</main>
				</div>
			</div>

			<FloatingHelpButton />
		</div>
	);
}
