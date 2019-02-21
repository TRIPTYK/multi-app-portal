import { get_index } from "./handler";

import { generateAppsConfig } from "./utils";
// const URI = "app1"
// import configJSON from "../../../apps.json"
// let apps = configJSON.apps
let getRoutes = async () => {
  let router = [];
  let apps = await generateAppsConfig();
  apps.forEach(app => {
    router.push({
      path: `/${app.uri}/{file?}`,
      method: "get",
      config: {
        pre: [
          {
            method: () => {
              return app;
            },
            assign: "app"
          },
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
    router.push({
      path: `/${app.uri}/assets/{file?}`,
      method: "get",
      handler: get_index
    });
    router.push({
      path: `/${app.uri}/assets/{type*2}`,
      method: "get",
      handler: get_index
    });
  });
  return router
}
export { getRoutes };
