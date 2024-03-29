import './github-9db56498.js';
import { F as FetchData } from './page-b2d060b0.js';
import { p as public_env } from './shared-server-58a5f352.js';
import fs from 'fs-extra';
import 'axios';
import './tool-153dc604.js';
import 'marked';
import './helpers-0acb6e43.js';

async function load({ params, route, url, parent }) {
  let monitors = JSON.parse(fs.readFileSync(public_env.PUBLIC_KENER_FOLDER + "/monitors.json", "utf8"));
  const parentData = await parent();
  const monitorsActive = [];
  const query = url.searchParams;
  const theme = query.get("theme");
  for (let i = 0; i < monitors.length; i++) {
    if (monitors[i].tag !== params.tag) {
      continue;
    }
    delete monitors[i].api;
    delete monitors[i].defaultStatus;
    monitors[i].embed = true;
    let data = await FetchData(monitors[i], parentData.localTz);
    monitors[i].pageData = data;
    monitorsActive.push(monitors[i]);
  }
  return {
    monitors: monitorsActive,
    theme,
    openIncidents: []
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-8eeb074b.js')).default;
const server_id = "src/routes/embed-[tag]/+page.server.js";
const imports = ["_app/immutable/nodes/5.1c197dbb.js","_app/immutable/chunks/scheduler.8852886c.js","_app/immutable/chunks/index.fb8f3617.js","_app/immutable/chunks/ctx.1e61a5a6.js","_app/immutable/chunks/index.97524e95.js","_app/immutable/chunks/monitor.d2febd27.js","_app/immutable/chunks/axios.baaa6432.js","_app/immutable/chunks/Icon.7b7db889.js","_app/immutable/chunks/index.cd89ef46.js","_app/immutable/chunks/events.b4751e74.js","_app/immutable/chunks/stores.d39ff4d0.js","_app/immutable/chunks/singletons.4b2d8e43.js","_app/immutable/chunks/paths.fdb9a016.js"];
const stylesheets = ["_app/immutable/assets/monitor.13f869bc.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-ac027fc2.js.map
