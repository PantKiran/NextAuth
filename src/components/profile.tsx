"use client";

import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();
  console.log(session)
  if (session.data?.user) {
    return <div>From client: user is siged in</div>;
  } else {
    return <div>from client:user is not signed in</div>;
  }
};

export default Profile;
