import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Dashboard(): React.ReactNode {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
      </main>
    </div>
  );
}

export default Dashboard;
