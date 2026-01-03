import React from "react"

const AdminDashBoard = () => {
  return (
    <div className="bg-background w-full min-h-screen p-4 sm:p-6">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-theme mb-6">
        Admin Dashboard
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-card rounded-xl p-5 shadow-md">
          <p className="text-text/60">Total Vehicles</p>
          <p className="text-3xl font-bold text-theme mt-2">10</p>
        </div>

        <div className="bg-card rounded-xl p-5 shadow-md">
          <p className="text-text/60">Total Bookings</p>
          <p className="text-3xl font-bold text-theme mt-2">10</p>
        </div>

        <div className="bg-card rounded-xl p-5 shadow-md">
          <p className="text-text/60">Pending Bookings</p>
          <p className="text-3xl font-bold text-theme mt-2">10</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Bookings */}
        <div className="lg:col-span-2 bg-card rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-1">
            Recent Bookings
          </h3>
          <p className="text-text/60 text-sm mb-4">
            Customers latest bookings
          </p>

          <div className="space-y-3">
            {/* Dummy rows */}
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className="flex justify-between items-center p-3 rounded-lg bg-background"
              >
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-text/60">Toyota Prius</p>
                </div>
                <p className="text-sm font-semibold text-theme">
                  Rs. 4500
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-card rounded-xl p-6 shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-1">
              Monthly Revenue
            </h3>
            <p className="text-text/60 text-sm mb-6">
              Your revenue of this month
            </p>
          </div>

          <h4 className="text-4xl font-bold text-theme">
            Rs. 89,000
          </h4>
        </div>

      </div>

    </div>
  )
}

export default AdminDashBoard
