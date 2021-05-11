import React, { useState } from "react";
import LogedEntry from "./Components/LogedEntry/LogedEntry";
import LogRegFormEntry from "./Entries/Log-RegFormEntry/LogRegFormEntry";
function App() {
  const [logged, setLogged] = useState(true);
  return <>{logged ? <LogedEntry /> : <LogRegFormEntry />}</>;
}

export default App;
