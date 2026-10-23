
import { Home, History, Settings, UploadCloud, FileText, Bell, LogOut, ChevronRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const recentScans = [
    { id: 1, name: 'Tomato Early Blight', date: 'Oct 23, 2026', status: 'Infected', confidence: '94%' },
    { id: 2, name: 'Potato Healthy', date: 'Oct 20, 2026', status: 'Healthy', confidence: '99%' },
    { id: 3, name: 'Wheat Rust', date: 'Oct 15, 2026', status: 'Infected', confidence: '89%' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
        <div className="h-20 flex items-center px-8 border-b border-gray-100">
          <span className="font-extrabold text-2xl text-gray-900">Crop-Care <span className="text-[#10b981]">AI</span></span>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2">
          <Link to="/user/dashboard" className="flex items-center gap-3 px-4 py-3 bg-[#ecfdf5] text-[#064e3b] rounded-xl font-bold">
            <Home className="w-5 h-5" /> Dashboard
          </Link>
          <Link to="/user/myinquiries" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition">
            <History className="w-5 h-5" /> Scan History
          </Link>
          <Link to="/ProfessionalTools" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition">
            <Activity className="w-5 h-5" /> Pro Tools
          </Link>
          <Link to="/user/profile" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition">
            <Settings className="w-5 h-5" /> Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 rounded-xl font-medium transition">
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h2 className="text-xl font-bold text-gray-800">Professional Dashboard</h2>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-gray-50 rounded-full text-gray-600 hover:text-[#10b981] transition">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 bg-[#064e3b] text-white rounded-full flex items-center justify-center font-bold shadow-sm">
              JD
            </div>
          </div>
        </header>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-8">
          
          <div className="mb-8">
            <h1 className="text-2xl font-extrabold text-gray-900">Welcome back, John! 👋</h1>
            <p className="text-gray-500">Here is what's happening with your crops today.</p>
          </div>

          {/* Quick Action / Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#064e3b] p-6 rounded-2xl text-white shadow-md relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-gray-300 font-medium mb-1">Total Scans</h3>
                <p className="text-4xl font-extrabold">24</p>
              </div>
              <Activity className="absolute right-[-10%] bottom-[-10%] w-32 h-32 text-white opacity-10" />
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
              <h3 className="text-gray-500 font-medium mb-1">Diseases Detected</h3>
              <p className="text-4xl font-extrabold text-red-600">3</p>
            </div>

            <Link to="/MainCategory" className="bg-[#ecfdf5] border border-[#a7f3d0] p-6 rounded-2xl shadow-sm flex flex-col justify-center items-center text-center hover:bg-[#d1fae5] transition cursor-pointer group">
              <UploadCloud className="w-8 h-8 text-[#10b981] mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-[#064e3b] font-bold text-lg">New Scan</h3>
            </Link>
          </div>

          {/* Recent Scans Table */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-900">Recent Scans</h3>
              <Link to="/user/myinquiries" className="text-sm font-semibold text-[#10b981] hover:text-[#064e3b] flex items-center">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                    <th className="px-6 py-4 font-bold">Crop & Result</th>
                    <th className="px-6 py-4 font-bold">Date</th>
                    <th className="px-6 py-4 font-bold">Confidence</th>
                    <th className="px-6 py-4 font-bold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentScans.map((scan) => (
                    <tr key={scan.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${scan.status === 'Infected' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{scan.name}</p>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${scan.status === 'Infected' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                            {scan.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-500">{scan.date}</td>
                      <td className="px-6 py-4 text-sm font-bold text-gray-700">{scan.confidence}</td>
                      <td className="px-6 py-4">
                        <button className="text-[#10b981] hover:text-[#064e3b] font-bold text-sm transition">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;