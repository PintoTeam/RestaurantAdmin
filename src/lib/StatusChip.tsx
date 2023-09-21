interface StatusChipProps {
  active?: boolean;
  disabled?: boolean;
}

export function StatusChip({ active, disabled }: StatusChipProps) {
  return (
    <div
      className={`flex flex-row items-center px-2 py-1 rounded-full text-sm w-fit justify-start space-x-2 font-semibold ${
        !disabled && active
          ? "bg-green-100 text-green-600 border-solid border-[1px] border-green-600"
          : !disabled && !active
          ? "bg-red-100 text-red-600 border-solid border-[1px] border-red-600"
          : "bg-gray-100 text-gray-600 border-solid border-[1px] border-gray-600"
      }`}
    >
      <div
        className={`w-2 h-2 rounded-full ${
          !disabled && active
            ? "bg-green-600"
            : !disabled && !active
            ? "bg-red-600"
            : "bg-gray-600"
        }`}
      />
      <span>{active ? "Active" : "Inactive"}</span>
    </div>
  );
}
