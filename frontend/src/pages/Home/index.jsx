import { useState } from "react";
import AuthPage from "../Auth";
import ChatsPage from "../Chat";


function Home() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default Home;