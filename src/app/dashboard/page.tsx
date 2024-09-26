import { Button } from "@/components/ui/button";
import React from "react";

const Dashboard = () => {
  return (
    <div className="grid items-center gap-4">
      <div className="flex items-center justify-center px-2">
        <div className="grid items-center gap-2">
          <h1 className="text-4xl font-bold">Your notes ...</h1>
          <p className="text-sm text-muted-foreground">
            Here you can create notes and manage them.
          </p>
          <Button>Add note</Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
