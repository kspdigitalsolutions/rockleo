// pages/coming-soon.js
// import Head from "next/head";
"use client";
import React from "react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-600">
          We&apos;re working on something amazing.
        </p>
      </div>
      <div className="mt-4 text-gray-500 text-sm">
        Site is developing by{" "}
        <a
          href="https://kspdigitalsolutions.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          KSP Digital Solutions
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
