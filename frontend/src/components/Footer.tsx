import { Utensils, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-12 text-gray-600 text-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="size-10 bg-zomato rounded-xl flex items-center justify-center text-white shadow-md">
              <Utensils className="size-5" />
            </div>
            <span className="text-3xl font-extrabold tracking-tight text-gray-900">
              zomato<span className="text-zomato">.</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 text-xs font-medium cursor-pointer hover:border-gray-400">
              <Globe className="size-4" />
              <span>India</span>
              <span className="text-gray-400">▼</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 text-xs font-medium cursor-pointer hover:border-gray-400">
              <span>English</span>
              <span className="text-gray-400">▼</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8 py-12 border-b border-gray-200">
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-xs mb-4">About Zomato</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Who We Are</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Work With Us</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Report Fraud</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-xs mb-4">Zomaverse</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Zomato</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Blinkit</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Feeding India</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Hyperpure</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Zomato Live</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-xs mb-4">For Restaurants</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Partner With Us</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Apps For You</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-xs mb-4">Learn More</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Sitemap</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-xs mb-4">Social Links</h4>
            <div className="flex gap-3 mb-6">
              {["🔗", "🐦", "📘", "📸", "▶️"].map((icon, idx) => (
                <div key={idx} className="size-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs cursor-pointer hover:bg-zomato transition-colors">
                  {icon}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2026 © Zomato™ Ltd. All rights reserved.
            </p>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-gray-400">
          Built with React, Vite, Tailwind CSS, TypeScript & Express. Zomato Clone Full-Stack App.
        </div>
      </div>
    </footer>
  );
}
