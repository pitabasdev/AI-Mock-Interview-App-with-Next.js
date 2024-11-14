import { UserButton } from "@clerk/nextjs";
import React from "react";
import Header from "./_components/Header";
import AddNewInterview from "./_components/AddNewInterview";

function Dashboard() {
  return (
    <div className="p-10">
     <h2 className="fonr-bold text-2xl">Dashboard</h2>
     <h2 className="text-gray-500">Create and Start your Ai Mockup Interview</h2>
     <div className="grid grid-cols-1 md:grid-cols-3 my-5">
      <AddNewInterview/>
     </div>
    </div>
  );
}

export default Dashboard;
