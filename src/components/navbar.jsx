import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
//   const { logout } = useAuth0();
  const { logout, user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-center">Loading ...</div>;
  }
  return (
    <div>
        {isAuthenticated && (
            <div className="flex items-center justify-center py-5">
              <div>
                <img src={user.picture} alt={user.name} className="rounded-[50%] w-12 h-12 mr-5" />
              </div>
              <h2 className="laptop:text-xl tablet:text-lg mobile:text-md smallmobile:text-sm font-semibold text-[#102A42]"><span className="font-normal italic">Welcome,</span> {user.name}</h2>
              {/* <p>{user.email}</p> */}
              <button className="laptop:text-lg tablet:text-md mobile:text-sm smallmobile:text-sm bg-[#7ED4D9] text-white font-bold ml-5 py-1 px-2 rounded-md" onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </button>
            </div>
        )}
    </div>
  );
};

export default Navbar;


