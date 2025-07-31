import type { FC, ReactNode } from "react";
import type { FallbackProps } from "react-error-boundary";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const handleReset = () => {
    resetErrorBoundary();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 text-center">
          <h2 className="text-xl font-bold text-red-600">エラーが発生しました</h2>
          <p className="mt-2 text-sm text-gray-600">申し訳ございませんが、予期しないエラーが発生しました。</p>
        </div>
        <div className="mb-4 rounded bg-red-50 p-3">
          <p className="text-sm text-red-800">{error.message}</p>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleReset}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            再試行
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * @package
 */
export const LayoutErrorBoundary: FC<{ children: ReactNode }> = ({ children }) => {
  const handleError = (error: Error, errorInfo: { componentStack: string }) => {
    // エラーログを記録（本番環境では外部サービスに送信）
    console.error("Error caught by boundary:", error, errorInfo);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
      {children}
    </ErrorBoundary>
  );
};
