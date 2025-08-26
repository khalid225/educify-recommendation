export default function FloatingHelpButton() {
	return (
		<div className="fixed bottom-18 right-4">
			<button className="w-12 h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors">
				<img src="/live-chat.svg" alt="Live Chat Help" className="w-16 h-12" />
			</button>
		</div>
	);
}
