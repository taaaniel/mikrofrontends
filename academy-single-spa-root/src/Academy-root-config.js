import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@Academy/academy-single-spa-navbar",
  app: () => System.import("@Academy/academy-single-spa-navbar"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@Academy/academy-single-spa-homepage",
  app: () => System.import("@Academy/academy-single-spa-homepage"),
  activeWhen: [(location) => location.pathname === "/"],
});

registerApplication({
  name: "@Academy/academy-single-spa-about",
  app: () => System.import("@Academy/academy-single-spa-about"),
  activeWhen: ["/about"],
});

start({
  urlRerouteOnly: true,
});
