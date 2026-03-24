import { Button } from "@radix-ui/themes";
import { Gift, Heart, LogOut, Menu, User, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accountOptions, setAccountOptions] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav
      className="w-full border-b border-black/20 drop-shadow-xs px-3 sm:px-4 md:px-6 relative z-9999"
      style={{ background: "#F7F8FA" }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="Main_Logo"
            className="w-16 md:w-18"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 items-center font-medium">
          {user ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/items">All Items</Link>
              <Link to="/my-report">My Report</Link>

              {/* 🔥 Account Dropdown */}
              <div className="relative">
                <div
                  onClick={() => setAccountOptions((prev) => !prev)}
                  className="cursor-pointer"
                >
                  Account
                </div>

                {accountOptions && (
                  <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md py-4 pl-4 min-w-37.5 flex flex-col gap-6 z-9999">
                    <Link
                      to="/profile"
                      className="hover:text-blue-500 flex
                    items-center gap-2"
                    >
                      <span>
                        <User />
                      </span>
                      Profile
                    </Link>
                    <Link
                      to="/claims"
                      className="hover:text-blue-500 flex
                    items-center gap-2"
                    >
                      <span>
                        <Gift />
                      </span>
                      My Claim
                    </Link>
                    <Link
                      to="/wishlist"
                      className="hover:text-blue-500 flex
                    items-center gap-2"
                    >
                      <span>
                        <Heart />
                      </span>
                      Wishlist
                    </Link>

                    <button
                      onClick={logout}
                      className="text-left text-red-500 hover:text-red-600 cursor-pointer flex
                    items-center gap-2"
                    >
                      <span>
                        <LogOut />
                      </span>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/signIn">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signUp">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col gap-5 w-full mb-5 mt-4">
          {user ? (
            <>
              <span className="text-lg">Hi, {user.name}</span>

              <Link to="/">Home</Link>
              <Link to="/items">All Items</Link>
              <Link to="/my-report">My Report</Link>

              <button
                onClick={logout}
                className="w-full bg-red-500 text-white p-2 rounded-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signIn">
                <button className="w-full border p-2 rounded-md">Login</button>
              </Link>
              <Link to="/signUp">
                <button className="w-full bg-blue-600 text-white p-2 rounded-md">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
