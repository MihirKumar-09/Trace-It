# 🚀 Lost Link

Lost Link is a full-stack web application designed to help people report and recover lost items through a structured and community-driven system.

Instead of random posts or scattered messages, Lost Link organizes lost & found reports in one place and helps connect the right people efficiently.

# 📌 Problem It Solves

People lose items all the time, but:

There’s no centralized system
Social media posts get buried
No proper way to connect finder ↔ owner

Lost Link solves this by:

Structuring reports (Lost / Found)
Making them searchable & filterable
Enabling interaction between users
# ✨ Features
# 🧾 Reports System
Create Lost Item Reports
Create Found Item Reports
Detailed report page with:
Image
Location
Description
Date & time
Contact info
# 🔍 Smart Listing
View all reports with filters:
lost / found
open / closed
Sorted by latest activity
Limited pagination support
# ❤️ Favorites (Wishlist)
Save important reports
Toggle favorite instantly
Dedicated saved items section
# 👤 Authentication
Google OAuth login using Passport.js
Session-based authentication
Persistent login using MongoDB session store
# 🧑‍💻 User Dashboard
Track your activity:
Total Lost Items
Total Found Items
Manage your reports
View saved items
# 🔐 Security & Ownership
Only report owners can:
Delete their reports
Protected routes using authentication middleware
# 📱 Responsive UI
Fully responsive design
Mobile-friendly navigation
Clean and modern UI with animations
# 🛠️ Tech Stack
Frontend
React.js
Tailwind CSS
Framer Motion
React Router
Backend
Node.js
Express.js
Database
MongoDB + Mongoose
Authentication
Passport.js (Google OAuth)
express-session
connect-mongo
File Upload
Multer (memory storage)
Cloudinary (image hosting)
Deployment
Frontend + Backend hosted on Render (Free Tier)

# ⚠️ Important Note (Deployment)

This project is deployed using Render’s free tier.

Backend may go into sleep mode
If inactive, the server may not respond immediately
In some cases, it might require a manual refresh or retry
