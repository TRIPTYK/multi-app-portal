import { get_index } from "./handler";

import { generateAppsConfig } from "../apps/utils";
const URI = ""
let getRoutes = async () => {
  let router = [];
  let apps = await generateAppsConfig();
  router.push({
    path: `/${URI}`,
    method: "get",
    config: {
      pre: [
        {
          method: () => {
            return apps;
          },
          assign: "apps"
        }
      ]
    },
    handler: get_index
  });

  return router
}
export { getRoutes };
