import React, { Suspense } from "react";
import DashboardPage from "./page";
import { BarLoader } from "react-spinners";

const DashboardLayout = () => {
  return (
    <div className="px-5">
      <h1 className="text-6xl font-bold title mb-5">Dashboard</h1>

      {/*Dashboard*/}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#1df58d" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
