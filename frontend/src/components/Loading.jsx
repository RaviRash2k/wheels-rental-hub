import React from "react";
import { dataStore } from "../store/dataStore";

const Loading = ({ text = "Loading..." }) => {

    const {loading} = dataStore();

    if (!loading) return null;
    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4 bg-card px-8 py-6 rounded-2xl shadow-xl">
            
            {/* Spinner */}
            <div className="w-10 h-10 border-4 border-theme border-t-transparent rounded-full animate-spin"></div>

            {/* Text */}
            <p className="text-sm text-text/80">{text}</p>
        </div>
        </div>
    );
};

export default Loading;
