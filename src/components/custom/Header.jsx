import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton,useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-5 px-5 flex justify-between shadow-md">
      <img src="/logo.svg" alt="LOGO" />

      {isSignedIn ? (
        <div className="flex gap-4 items-center">
          <Link to={'/dashboard'}>
          <Button variant="outline">DashBoard</Button>
          </Link>
          <UserButton/>
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button> Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
