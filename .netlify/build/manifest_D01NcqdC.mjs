import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/shared_ByP7ZIvF.mjs';
import 'es-module-lexer';
import { v as NOOP_MIDDLEWARE_HEADER, w as decodeKey } from './chunks/astro/server_kT4hzO47.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/abiol/OneDrive/Desktop/Abiola%20Web%20Agency/bmeson/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"booster/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/booster","isIndex":false,"type":"page","pattern":"^\\/booster\\/?$","segments":[[{"content":"booster","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/booster.astro","pathname":"/booster","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"executive/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/executive","isIndex":false,"type":"page","pattern":"^\\/executive\\/?$","segments":[[{"content":"executive","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/executive.astro","pathname":"/executive","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"premium/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/premium","isIndex":false,"type":"page","pattern":"^\\/premium\\/?$","segments":[[{"content":"premium","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/premium.astro","pathname":"/premium","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"standard/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/standard","isIndex":false,"type":"page","pattern":"^\\/standard\\/?$","segments":[[{"content":"standard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/standard.astro","pathname":"/standard","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"success/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/success","isIndex":false,"type":"page","pattern":"^\\/success\\/?$","segments":[[{"content":"success","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/success.astro","pathname":"/success","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"thankyou/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/thankyou","isIndex":false,"type":"page","pattern":"^\\/thankyou\\/?$","segments":[[{"content":"thankyou","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thankyou.astro","pathname":"/thankyou","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}}],"site":"https://bmeson.netlify.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/abiol/OneDrive/Desktop/Abiola Web Agency/bmeson/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/abiol/OneDrive/Desktop/Abiola Web Agency/bmeson/src/pages/booster.astro",{"propagation":"none","containsHead":true}],["C:/Users/abiol/OneDrive/Desktop/Abiola Web Agency/bmeson/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/abiol/OneDrive/Desktop/Abiola Web Agency/bmeson/src/pages/executive.astro",{"propagation":"none","containsHead":true}],["C:/Users/abiol/OneDrive/Desktop/Abiola Web Agency/bmeson/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/abiol/OneDrive/Desktop/Abiola Web Agency/bmeson/src/pages/premium.astro",{"propagation":"none","containsHead":true}],["C:/Users/abiol/OneDrive/Desktop/Abiola Web Agency/bmeson/src/pages/services.astro",{"propagation":"none","containsHead":true}],["C:/Users/abiol/OneDrive/Desktop/Abiola Web Agency/bmeson/src/pages/standard.astro",{"propagation":"none","containsHead":true}],["C:/Users/abiol/OneDrive/Desktop/Abiola Web Agency/bmeson/src/pages/success.astro",{"propagation":"none","containsHead":true}],["C:/Users/abiol/OneDrive/Desktop/Abiola Web Agency/bmeson/src/pages/thankyou.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/booster@_@astro":"pages/booster.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/executive@_@astro":"pages/executive.astro.mjs","\u0000@astro-page:src/pages/premium@_@astro":"pages/premium.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/standard@_@astro":"pages/standard.astro.mjs","\u0000@astro-page:src/pages/success@_@astro":"pages/success.astro.mjs","\u0000@astro-page:src/pages/thankyou@_@astro":"pages/thankyou.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_D01NcqdC.mjs","\u0000astro:internal-actions":"chunks/_astro_internal-actions_Dp3KAbl7.mjs","C:/Users/abiol/OneDrive/Desktop/Abiola Web Agency/bmeson/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D5TlsjOm.mjs","C:/Users/abiol/OneDrive/Desktop/Abiola Web Agency/bmeson/src/pages/booster.astro?astro&type=script&index=0&lang.ts":"_astro/booster.astro_astro_type_script_index_0_lang.Dv-yc2OP.js","C:/Users/abiol/OneDrive/Desktop/Abiola Web Agency/bmeson/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.Da7eNPSr.js","C:/Users/abiol/OneDrive/Desktop/Abiola Web Agency/bmeson/src/pages/executive.astro?astro&type=script&index=0&lang.ts":"_astro/executive.astro_astro_type_script_index_0_lang.Bn1-AJZw.js","C:/Users/abiol/OneDrive/Desktop/Abiola Web Agency/bmeson/src/pages/premium.astro?astro&type=script&index=0&lang.ts":"_astro/premium.astro_astro_type_script_index_0_lang.sqZzxN28.js","C:/Users/abiol/OneDrive/Desktop/Abiola Web Agency/bmeson/src/pages/standard.astro?astro&type=script&index=0&lang.ts":"_astro/standard.astro_astro_type_script_index_0_lang.BasLVM_A.js","C:/Users/abiol/OneDrive/Desktop/Abiola Web Agency/bmeson/src/components/NavBar.astro?astro&type=script&index=0&lang.ts":"_astro/NavBar.astro_astro_type_script_index_0_lang.iNBdLbAS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/abiol/OneDrive/Desktop/Abiola Web Agency/bmeson/src/components/NavBar.astro?astro&type=script&index=0&lang.ts","const o=document.querySelector(\".navbar\"),c=o.querySelectorAll(\".link\"),n=window.location.href,t=document.getElementById(\"mobile-menu\"),l=t.querySelectorAll(\".mobile-link\"),i=document.getElementById(\"mobile-menu-btn\");c.forEach(e=>{e.href===n&&e.classList.add(\"active-link\")});l.forEach(e=>{e.href===n&&e.classList.add(\"active-link\")});function s(){t.classList.toggle(\"hidden\")}i.addEventListener(\"click\",s);"]],"assets":["/_astro/chioma.D4v0KJRA.png","/_astro/mayowa.BTC31NPW.png","/_astro/recruiter.D49CMPnz.jpg","/_astro/bg2.Cdwp2PKK.jpg","/_astro/puzzle-pieces.BL_31S9r.jpg","/_astro/silver.D5O74Z65.jpg","/_astro/bronze.BrOwgFBu.jpg","/_astro/nsia-logo.T3xtzVM1.png","/_astro/glasshouse.DAlCuKe7.jpg","/_astro/gold.Cc9c2bDJ.jpg","/_astro/brain-express.DF8aX75Y.webp","/_astro/royalty-christian-centre.De-z2Hqm.jpg","/_astro/ewa-agoyin.DDd-iT70.jpg","/_astro/vip-express.CHkkHR6c.jpg","/_astro/talibricks.BsqPp98C.png","/_astro/office.Bp_Uj3MV.jpg","/_astro/tailbrick.CqE1C7IN.jpg","/_astro/aremu.Dw02xIvV.png","/_astro/ziza-health.D2h2Exlh.png","/_astro/hilltop.QZu9qKWt.png","/_astro/brain-express.BZKFWD1X.png","/_astro/logo-white.CDxjdfP8.png","/_astro/Logo.DO-DBv8V.png","/_astro/facebook.cfuTsy-3.svg","/_astro/whatsapp.BCGRseSn.svg","/_astro/instagram.DcxFEsn4.svg","/_astro/linkedin.BOekWyTw.svg","/_astro/customer-care-bg.Z0OUYrI5.jpg","/_astro/bg.C3gNpKsU.jpg","/_astro/about.CcxobWd-.css","/favicon.ico","/_astro/booster.astro_astro_type_script_index_0_lang.Dv-yc2OP.js","/_astro/contact.astro_astro_type_script_index_0_lang.Da7eNPSr.js","/_astro/executive.astro_astro_type_script_index_0_lang.Bn1-AJZw.js","/_astro/premium.astro_astro_type_script_index_0_lang.sqZzxN28.js","/_astro/router.CfmycK43.js","/_astro/standard.astro_astro_type_script_index_0_lang.BasLVM_A.js","/about/index.html","/booster/index.html","/contact/index.html","/executive/index.html","/premium/index.html","/services/index.html","/standard/index.html","/success/index.html","/thankyou/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"49uVdWsVNS5Wn7o82k6Agig/HwA+fXCnoX0A2CiIews="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
