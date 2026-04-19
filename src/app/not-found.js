"use client";
import Link from "next/link";
import React from "react";
import { FiHome, FiAlertCircle, FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6 font-sans">
      <div className="max-w-2xl w-full text-center">
        <div className="relative mb-12">
          <h1 className="text-[150px] md:text-[200px] font-black text-base-content/5 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="bg-error/10 p-6 rounded-full mb-4 animate-pulse">
              <FiAlertCircle className="text-error text-6xl md:text-8xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-base-content">
              Lost in Space?
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-base-content/60 max-w-md mx-auto leading-relaxed">
            Oops! The page you&apos;re looking for has drifted into deep space.
            It might have been moved or never existed in the first place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => window.history.back()}
              className="btn btn-outline btn-lg rounded-2xl gap-2 group px-8"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>

            <Link href="/">
              <button className="btn btn-primary btn-lg rounded-2xl gap-2 px-8 shadow-lg shadow-primary/20">
                <FiHome />
                Return Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
