import {
  Bell,
  MessageSquare,
  Search,
  User,
  Gift,
  Heart,
  Power,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { Button } from "@radix-ui/themes";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav
      id="home"
      className="w-full border-b border-black/20 drop-shadow-xs px-3 sm:px-4 md:px-6 flex justify-between items-center bg-[#F5F6F8]"
    >
      {/* Logo */}
      <Link to="/">
        <img src="/images/logo.png" alt="Main_Logo" className="w-16 md:w-18" />
      </Link>

      {/* Search */}
      <span
        className="hidden md:flex gap-3 border p-3 w-160 rounded-full"
        style={{ backgroundColor: "#F1F5F9" }}
      >
        <Search style={{ width: "4%" }} />
        <input
          type="text"
          placeholder="Search items like phone, wallet, keys"
          style={{ width: "calc(100% - 4%)", backgroundColor: "#F1F5F9" }}
          className="bg-transparent outline-none flex-1"
        />
      </span>

      {/* Right Section */}
      <div className="flex gap-8 items-center relative">
        <Bell />
        <MessageSquare />

        {/* User Dropdown */}
        <div className="relative">
          <button onClick={() => setMenu((prev) => !prev)}>
            <User className="cursor-pointer" />
          </button>

          {menu && (
            <div className="absolute right-0 top-10 bg-white shadow-lg rounded-md py-4 px-4 min-w-45 flex flex-col gap-4 z-50">
              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="hover:text-blue-500 flex items-center gap-2"
                  >
                    <User size={18} />
                    Profile
                  </Link>

                  <Link
                    to="/claims"
                    className="hover:text-blue-500 flex items-center gap-2"
                  >
                    <Gift size={18} />
                    My Claim
                  </Link>

                  <Link
                    to="/wishlist"
                    className="hover:text-blue-500 flex items-center gap-2"
                  >
                    <Heart size={18} />
                    Wishlist
                  </Link>

                  <button
                    onClick={logout}
                    className="text-red-500 hover:text-red-800 text-left flex items-center gap-2 cursor-pointer"
                  >
                    <Power size={18} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/signIn">
                    <Button
                      variant="outline"
                      style={{ cursor: "pointer", width: "100%" }}
                    >
                      Login
                    </Button>
                  </Link>

                  <Link to="/signUp">
                    <Button style={{ cursor: "pointer", width: "100%" }}>
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
