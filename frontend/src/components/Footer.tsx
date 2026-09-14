import { Utensils, Globe, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
  { icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-12 text-gray-600 text-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="size-10 bg-zomato rounded-xl flex items-center justify-center text-white shadow-soft-md shadow-zomato/20 hover:scale-105 transition-transform duration-300">
              <Utensils className="size-5" />
            </div>
            <span className="text-3xl font-extrabold tracking-tight text-gray-900">
              zomato<span className="text-zomato">.</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-800 text-xs font-medium cursor-pointer hover:border-zomato/40 hover:shadow-soft-sm transition-all duration-200">
              <Globe className="size-4 text-zomato" />
              <span>India</span>
              <span className="text-gray-400 text-[10px]">▼</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-800 text-xs font-medium cursor-pointer hover:border-zomato/40 hover:shadow-soft-sm transition-all duration-200">
              <span>English</span>
              <span className="text-gray-400 text-[10px]">▼</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8 py-12 border-b border-gray-200">
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-xs mb-4">About Zomato</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-zomato hover:pl-1 transition-all duration-200">Who We Are</a></li>
              <li><a href="#" className="hover:text-zomato hover:pl-1 transition-all duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-zomato hover:pl-1 transition-all duration-200">Work With Us</a></li>
              <li><a href="#" className="hover:text-zomato hover:pl-1 transition-all duration-200">Investor Relations</a></li>
              <li><a href="#" className="hover:text-zomato hover:pl-1 transition-all duration-200">Report Fraud</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-xs mb-4">Zomaverse</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-zomato hover:pl-1 transition-all duration-200">Zomato</a></li>
              <li><a href="#" className="hover:text-zomato hover:pl-1 transition-all duration-200">Blinkit</a></li>
              <li><a href="#" className="hover:text-zomato hover:pl-1 transition-all duration-200">Feeding India</a></li>
              <li><a href="#" className="hover:text-zomato hover:pl-1 transition-all duration-200">Hyperpure</a></li>
              <li><a href="#" className="hover:text-zomato hover:pl-1 transition-all duration-200">Zomato Live</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-xs mb-4">For Restaurants</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-zomato hover:pl-1 transition-all duration-200">Partner With Us</a></li>
              <li><a href="#" className="hover:text-zomato hover:pl-1 transition-all duration-200">Apps For You</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-xs mb-4">Learn More</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-zomato hover:pl-1 transition-all duration-200">Privacy</a></li>
              <li><a href="#" className="hover:text-zomato hover:pl-1 transition-all duration-200">Security</a></li>
              <li><a href="#" className="hover:text-zomato hover:pl-1 transition-all duration-200">Terms</a></li>
              <li><a href="#" className="hover:text-zomato hover:pl-1 transition-all duration-200">Sitemap</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-xs mb-4">Social Links</h4>
            <div className="flex gap-2.5 mb-6">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  title={label}
                  className="size-9 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-zomato hover:scale-110 hover:shadow-lg hover:shadow-zomato/30 transition-all duration-300"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
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