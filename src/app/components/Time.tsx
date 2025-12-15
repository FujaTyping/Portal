"use client";

import { useState, useEffect } from "react";
import { Clock, Watch } from 'lucide-react';

function TimeFlex() {
    const [thailandDate, setThailandDate] = useState("Loading");
    const [thailandTime, setThailandTime] = useState("Loading");
    const [visitorDate, setVisitorDate] = useState("Loading");
    const [visitorTime, setVisitorTime] = useState("Loading");

    useEffect(() => {
        const updateTimes = () => {
            setThailandDate(new Date().toLocaleDateString("en-US", { timeZone: "Asia/Bangkok", weekday: "long", year: "numeric", month: "short", day: "numeric" }));
            setThailandTime(new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Bangkok", hour: "2-digit", minute: "2-digit", second: "2-digit" }));

            setVisitorDate(new Date().toLocaleDateString("en-US", { timeZone: "Asia/Bangkok", weekday: "long", year: "numeric", month: "short", day: "numeric" }));
            setVisitorTime(new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Bangkok", hour: "2-digit", minute: "2-digit", second: "2-digit" }));
        };

        const interval = setInterval(updateTimes, 1000);
        updateTimes();

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="flex flex-col max-w-5xl w-full gap-6 text-white">
                <div className="bg-gradient-to-r from-red-600 to-red-700 w-full rounded-lg px-6 py-4 flex items-center place-content-between gap-5">
                    <div><Clock size={38} /></div>
                    <div className="text-left w-full">
                        <h1>My Time {"(Thailand)"}</h1>
                        <h2 className="text-3xl font-bold">{thailandTime}</h2>
                        <h2>{thailandDate}</h2>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-red-600 to-red-700 w-full rounded-lg px-6 py-4 flex items-center place-content-between gap-5">
                    <div><Watch size={38} /></div>
                    <div className="text-left w-full">
                        <h1>Your Time</h1>
                        <h2 className="text-3xl font-bold">{visitorTime}</h2>
                        <h2>{visitorDate}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimeFlex