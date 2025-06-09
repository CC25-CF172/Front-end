import React from "react";
import Navbar from './pages/components/Navbar';
import Footer from './pages/components/Footer';

export default function ChildGrowthDashboard() {
  return (
      
      <div className="min-h-screen bg-gray-50 p-4">
        <Navbar />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center bg-blue-50 p-4 rounded-xl mb-6">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-lg font-bold">👤</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">User</h1>
              <p className="text-sm text-gray-500">google.user@example.com</p>
            </div>
          </div>
          <button className="border border-blue-400 text-blue-500 px-4 py-1 rounded-md hover:bg-blue-100 text-sm">
            Edit Profile
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Growth Chart */}
          <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">Child Growth Chart</h2>
              <a href="#" className="text-blue-500 text-sm">View full details →</a>
            </div>
            <div className="bg-gray-100 h-48 flex items-center justify-center rounded-md text-sm text-gray-500">
              Growth chart visualization would appear here<br />
              Showing height-for-age progression over time
            </div>
          </div>

          {/* Stats & Actions */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Quick Stats</h3>
              <p className="text-sm">Total Assessments <span className="float-right font-medium">3</span></p>
              <p className="text-sm">Last Assessment <span className="float-right font-medium">10/05/2025</span></p>
              <p className="text-sm">Current Status <span className="float-right text-green-600 font-medium">Normal</span></p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow space-y-2">
              <h3 className="font-semibold mb-2">Quick Actions</h3>
              <button className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-md text-sm font-medium">New Assessment</button>
              <button className="border border-blue-400 text-blue-500 w-full py-2 rounded-md text-sm">Download Growth Chart</button>
              <button className="border border-blue-400 text-blue-500 w-full py-2 rounded-md text-sm">Add Child Profile</button>
              <button className="text-blue-500 text-sm underline w-full text-left mt-2">Set Reminder for Next Check-up</button>
            </div>
          </div>
        </div>

        {/* Assessment History */}
        <div className="mt-6 bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-4">Assessment History</h3>
          <table className="w-full text-sm text-left">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="py-2">DATE</th>
                <th className="py-2">CHILD</th>
                <th className="py-2">AGE (MONTHS)</th>
                <th className="py-2">STATUS</th>
                <th className="py-2">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">May 10, 2025</td>
                <td>Putra</td>
                <td>18</td>
                <td><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Normal</span></td>
                <td><button className="text-blue-500">⬇️</button></td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Apr 15, 2025</td>
                <td>Putra</td>
                <td>17</td>
                <td><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">Low Risk</span></td>
                <td><button className="text-blue-500">⬇️</button></td>
              </tr>
              <tr>
                <td className="py-2">Mar 20, 2025</td>
                <td>Putra</td>
                <td>16</td>
                <td><span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">At Risk</span></td>
                <td><button className="text-blue-500">⬇️</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Resources */}
        <div className="mt-6 bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-2">Recommended Resources</h3>
          <ul className="text-sm list-disc list-inside text-blue-600">
            <li><a href="#">Nutrition Guide for Age 12–24 Months</a></li>
            <li><a href="#">Understanding Growth Milestones</a></li>
            <li><a href="#">Dietary Tips for Healthy Development</a></li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
