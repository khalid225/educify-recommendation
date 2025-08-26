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
		<div className="h-screen bg-gray-100 overflow-hidden">
			<Header isStudentMode={isStudentMode} setIsStudentMode={setIsStudentMode} />

			<div className="flex h-[calc(100vh-3rem)]">
				<Sidebar isAvailable={isAvailable} setIsAvailable={setIsAvailable} activeTab={activeTab} />

				<div className="flex-1 flex flex-col">
					<Tabs
						activeTab={activeTab}
						setActiveTab={setActiveTab}
						isStudentMode={isStudentMode}
						setIsStudentMode={setIsStudentMode}
					/>

					<main className="flex-1 bg-gray-100 overflow-y-auto">
						<div className="max-w-7xl mx-auto px-8 py-4 my-2 bg-white rounded-2xl shadow-lg border border-gray-100">
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
