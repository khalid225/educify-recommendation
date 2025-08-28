interface AvailabilityToggleProps {
	isAvailable: boolean;
	setIsAvailable: (value: boolean) => void;
}

export default function AvailabilityToggle({ isAvailable, setIsAvailable }: AvailabilityToggleProps) {
	return (
		<div className="flex items-center justify-between px-2 sm:px-3 py-1.5">
			<span className="hidden md:block text-xs sm:text-sm font-semibold text-gray-300">Available</span>
			<button
				onClick={() => setIsAvailable(!isAvailable)}
				className={`relative inline-flex h-4 w-7 sm:h-5 sm:w-9 items-center rounded-full transition-colors ${
					isAvailable ? "bg-green-500" : "bg-gray-600"
				}`}>
				<span
					className={`inline-block h-2.5 w-2.5 sm:h-3 sm:w-3 transform rounded-full bg-white transition-transform ${
						isAvailable ? "translate-x-4 sm:translate-x-5" : "translate-x-0.5 sm:translate-x-1"
					}`}
				/>
			</button>
		</div>
	);
}
