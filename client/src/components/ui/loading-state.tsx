import { LoadingSpinner } from "./loading-spinner";

interface LoadingStateProps {
  message?: string;
}

export function LoadingState({ message = "Loading..." }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 min-h-[200px]">
      <LoadingSpinner />
      <p className="text-[#E6F1FF]/80 animate-pulse">{message}</p>
    </div>
  );
}
