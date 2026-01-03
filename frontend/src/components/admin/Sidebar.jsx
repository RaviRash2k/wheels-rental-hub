import React, { useState } from "react"
import { Menu, X, LayoutDashboard, PlusCircle, Car, BookOpen, LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { authStore } from "../../../store/authStore"

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const {Logout} = authStore();

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Add Vehicle", icon: PlusCircle, path: "/admin/add-vehicle" },
    { name: "Manage Vehicles", icon: Car, path: "/admin/vehicles" },
    { name: "Manage Bookings", icon: BookOpen, path: "/admin/bookings" },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-card p-2 rounded-lg shadow"
        onClick={() => setOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 z-50 h-screen w-65 md:w-80 p-2 lg:p-4 bg-theme
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-nav-text">
          <h1 className="text-2xl font-bold text-nav-text">Admin</h1>
          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-2 p-4">
          {menu.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                navigate(item.path)
                setOpen(false)
              }}
              className="flex items-center gap-3 px-2 py-3 md:py-4 rounded-xl hover:bg-nav-text/30 text-nav-text transition text-left"
            >
              <item.icon size={20} />
              {item.name}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-4 w-full px-4">
          <button
            onClick={() => {
                if (window.confirm("Are you sure you want to logout?")) {
                    Logout();
                    window.location.reload();
                }
            }}
            className="flex items-center gap-3 w-full px-4 py-3
                       rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
