import React from "react";
import Header from "../component/Header";
import Sidebar from "../component/sidebar";
export default function Dashboard() {

    return (
        <>
            <Header />
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <div className="p-4  rounded-lg dark:border-gray-700 mt-14">
                </div>
            </div>
        </>
    )
}