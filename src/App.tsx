import React from "react";
import LayoutContent from "./Layout";
import { Menu } from "./utils/permission";
import { PrivateRoute } from "./config/router.config";

interface Permission {
  initRoute: PrivateRoute[];
  initMenu: Menu[];
  initPermission: string[];
}

const Permission: Permission = {
  initRoute: [],
  initMenu: [],
  initPermission: [],
};

export const PermissinContext = React.createContext(Permission);

const App = () => {
  // const [permission,setPermission] = useState<Permission>(Permission)

  return (
    <PermissinContext.Provider value={Permission}>
      <LayoutContent />
    </PermissinContext.Provider>
  );
};

export default App;
