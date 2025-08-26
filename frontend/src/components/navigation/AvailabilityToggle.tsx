interface AvailabilityToggleProps {
	isAvailable: boolean;
	setIsAvailable: (value: boolean) => void;
}

export default function AvailabilityToggle({ isAvailable, setIsAvailable }: AvailabilityToggleProps) {
	return (
		<div className="flex items-center justify-between px-3 py-2">
			<span className="text-sm font-semibold text-gray-300">Available</span>
			<button
				onClick={() => setIsAvailable(!isAvailable)}
				className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
					isAvailable ? "bg-green-500" : "bg-gray-600"
				}`}>
				<span
					className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
						isAvailable ? "translate-x-5" : "translate-x-1"
					}`}
				/>
			</button>
		</div>
	);
}
