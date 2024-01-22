import GridContainer from "@/components/grid/GridContainer";
import Login from "@/components/login/Login";
import React from "react";

export default function page() {
  return (
    <div className="bg-primary bg-cover bg-center h-screen">
      <GridContainer className="min-h-screen flex items-center justify-center">
        <Login />
      </GridContainer>
    </div>
  );
}
