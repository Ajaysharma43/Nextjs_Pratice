export default function DashboardLayout({ children }) {
    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 h-screen bg-gray-800 text-white p-4">
                <h2 className="text-xl font-bold">Dashboard</h2>
                <nav>
                    <a href="/dashboard" className="block mt-2">Home</a>
                    <a href="/dashboard/settings" className="block mt-2">Settings</a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    );
}
