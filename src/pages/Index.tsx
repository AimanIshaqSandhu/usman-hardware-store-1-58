
import { useAuth } from '@/hooks/useAuth';
import { Login } from '@/components/Login';

const Index = () => {
  const { isAuthenticated, loading } = useAuth();

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="flex items-center gap-3 text-white">
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          <span className="text-lg">Loading...</span>
        </div>
      </div>
    );
  }

  // Show login if not authenticated
  if (!isAuthenticated) {
    return <Login />;
  }

  // Show main app if authenticated
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Welcome to Your Hardware Store
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          You are successfully authenticated! Start building your amazing project here.
        </p>
        <div className="mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Navigate using the sidebar to explore all features
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
