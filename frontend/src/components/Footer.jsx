import { ArrowUp, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@radix-ui/themes";
export default function Footer() {
  return (
    <footer
      className="flex flex-wrap justify-between gap-10 px-3 pt-20 text-white sm:px-5 md:px-12"
      style={{ background: "#0F172A" }}
    >
      <div className="flex flex-col flex-wrap justify-between gap-10 md:flex-row">
        <div className="flex-1 flex flex-col gap-3 min-w-37.5">
          <a href="/">
            <img
              src="/images/logo.png"
              alt="Main-Logo"
              className="w-12 sm:w-16 md:w-18"
            />
          </a>
          <p>
            The global community platform dedicated to helping people find lost
            items through honestly, technology, and trust
          </p>
        </div>
        <div className="flex-1 min-w-30 ">
          <h5 className="mb-4 font-medium text-md">Quick Links</h5>
          <ul>
            <a href="#">
              <li>About Us</li>
            </a>
            <a href="#">
              <li>Safety Center</li>
            </a>
            <a href="#">
              <li>Privacy Policy</li>
            </a>
            <a href="#">
              <li>Contact Support</li>
            </a>
          </ul>
        </div>
        <div className="flex flex-col flex-1 min-w-30">
          <h5 className="mb-4 font-medium text-md">Connect</h5>
          <span className="flex gap-4">
            <Twitter className="cursor-pointer" />
            <Facebook className="cursor-pointer" />
            <Instagram className="cursor-pointer" />
          </span>
        </div>
        <div className="flex flex-col flex-1 min-w-30">
          <h5 className="mb-4 font-medium text-md">Stay Informed</h5>
          <div
            style={{ background: "#1E293B" }}
            className="flex items-center gap-2 px-3 py-3 rounded-2xl"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 min-w-0 bg-transparent outline-none focus:outline-none focus:ring-0"
            />
            <Button className="shrink-0">Join</Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full py-4 border-t">
        <p className="text-sm">
          &copy; Lost Link Technology Inc. All rights reserved.
        </p>
        <a
          href="#home"
          className="inline-flex items-center justify-center p-2 transition-all duration-300 ease-out bg-blue-400 rounded-full cursor-pointer hover:scale-110 hover:-translate-y-1 hover:shadow-lg"
        >
          <ArrowUp color="#0F172A" />
        </a>
      </div>
    </footer>
  );
}
