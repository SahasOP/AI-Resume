import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className=" flex p-3 px-5 flex justify-between shadow-md">
      <img src="vite.svg" height="50px" />

      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to={"/dashboard"}>
            <Button variant="outline">DashBoard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>
            <span>Get Started</span>
          </Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
