import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data
const mockUser = {
	id: 1,
	name: "Bekwa Undie",
	role: "Tutor",
	email: "bekwa.undie@example.com",
	profilePicture: "BU",
	isStudentMode: false,
	isAvailable: true,
	notifications: 23,
};

const mockNavigationItems = [
	{ id: 1, name: "Dashboard", icon: "HomeIcon", active: false, path: "/dashboard" },
	{ id: 2, name: "Classes", icon: "CalendarIcon", active: false, path: "/classes" },
	{ id: 3, name: "My listings", icon: "DocumentIcon", active: false, path: "/listings" },
	{
		id: 4,
		name: "Messages & Requests",
		icon: "ChatBubbleLeftIcon",
		active: false,
		path: "/messages",
		notifications: 23,
	},
	{ id: 5, name: "Workspace", icon: "ComputerDesktopIcon", active: false, path: "/workspace" },
	{ id: 6, name: "Financials", icon: "CreditCardIcon", active: false, path: "/financials" },
	{ id: 7, name: "My Account", icon: "UserIcon", active: true, path: "/account" },
];

const mockTabs = [
	{ id: "profile", name: "My Profile", path: "/account/profile" },
	{ id: "availability", name: "My Availability", path: "/account/availability" },
	{ id: "recommendations", name: "Recommendations", path: "/account/recommendations" },
	{ id: "reviews", name: "Reviews", path: "/account/reviews" },
	{ id: "notification", name: "Notification", path: "/account/notification" },
];

const mockRecommendations = [];

// Routes

// Get user profile
app.get("/api/user", (req, res) => {
	res.json({
		success: true,
		data: mockUser,
	});
});

// Get navigation items
app.get("/api/navigation", (req, res) => {
	res.json({
		success: true,
		data: mockNavigationItems,
	});
});

// Get tabs
app.get("/api/tabs", (req, res) => {
	res.json({
		success: true,
		data: mockTabs,
	});
});

// Get recommendations
app.get("/api/recommendations", (req, res) => {
	res.json({
		success: true,
		data: {
			recommendations: mockRecommendations,
			total: mockRecommendations.length,
			message: mockRecommendations.length === 0 ? "No recommendations yet" : "Recommendations found",
		},
	});
});

// Update user availability
app.put("/api/user/availability", (req, res) => {
	const { isAvailable } = req.body;
	mockUser.isAvailable = isAvailable;

	res.json({
		success: true,
		data: { isAvailable: mockUser.isAvailable },
		message: `Availability updated to ${isAvailable ? "available" : "unavailable"}`,
	});
});

// Toggle student mode
app.put("/api/user/student-mode", (req, res) => {
	const { isStudentMode } = req.body;
	mockUser.isStudentMode = isStudentMode;

	res.json({
		success: true,
		data: { isStudentMode: mockUser.isStudentMode },
		message: `Student mode ${isStudentMode ? "enabled" : "disabled"}`,
	});
});

// Update notifications count
app.put("/api/user/notifications", (req, res) => {
	const { count } = req.body;
	mockUser.notifications = count;

	res.json({
		success: true,
		data: { notifications: mockUser.notifications },
		message: "Notifications count updated",
	});
});

// Get user settings
app.get("/api/user/settings", (req, res) => {
	res.json({
		success: true,
		data: {
			theme: "light",
			language: "en",
			emailNotifications: true,
			pushNotifications: true,
		},
	});
});

// Update user settings
app.put("/api/user/settings", (req, res) => {
	const { theme, language, emailNotifications, pushNotifications } = req.body;

	res.json({
		success: true,
		data: {
			theme: theme || "light",
			language: language || "en",
			emailNotifications: emailNotifications !== undefined ? emailNotifications : true,
			pushNotifications: pushNotifications !== undefined ? pushNotifications : true,
		},
		message: "Settings updated successfully",
	});
});

// Search functionality
app.get("/api/search", (req, res) => {
	const { q } = req.query;

	if (!q) {
		return res.status(400).json({
			success: false,
			message: "Search query is required",
		});
	}

	// Mock search results
	const searchResults = [
		{ id: 1, type: "class", title: "Mathematics 101", description: "Basic mathematics course" },
		{ id: 2, type: "tutor", title: "John Doe", description: "Math tutor" },
		{ id: 3, type: "subject", title: "Algebra", description: "Algebraic concepts" },
	].filter(
		(item) =>
			item.title.toLowerCase().includes(q.toLowerCase()) || item.description.toLowerCase().includes(q.toLowerCase())
	);

	res.json({
		success: true,
		data: searchResults,
		query: q,
	});
});

// Health check
app.get("/api/health", (req, res) => {
	res.json({
		success: true,
		message: "Educify API is running",
		timestamp: new Date().toISOString(),
		uptime: process.uptime(),
	});
});

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({
		success: false,
		message: "Something went wrong!",
		error: process.env.NODE_ENV === "development" ? err.message : "Internal server error",
	});
});

// 404 handler
app.use((req, res) => {
	res.status(404).json({
		success: false,
		message: "Route not found",
	});
});

// Start server
app.listen(PORT, () => {
	console.log(`🚀 Educify API server running on port ${PORT}`);
	console.log(`📱 Frontend: http://localhost:3000`);
	console.log(`🔧 API: http://localhost:${PORT}/api`);
	console.log(`💚 Health: http://localhost:${PORT}/api/health`);
});

module.exports = app;
