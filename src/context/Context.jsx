import React from "react";
import Data1 from "../JSON/table1.json"

const dataContext = React.createContext({ data: Data1 });

export default dataContext;