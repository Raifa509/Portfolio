import React from "react";


export default function Footer() {
  return (
    <footer className="bg-gray-950 py-10 px-6 md:px-40 text-gray-300">
      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>
      {/* Bottom Section */}
      <p className="text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Fathimathul Raifa NP. All rights reserved.
      </p>
    </footer>
  );
}
