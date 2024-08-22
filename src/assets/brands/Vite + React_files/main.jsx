import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/main.jsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("C:/Users/hp/OneDrive/Ishchi stol/Najot Ta'lim/SHOP.CO/src/main.jsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=66d558eb"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import "/src/index.css";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=66d558eb"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const Suspense = __vite__cjsImport3_react["Suspense"]; const lazy = __vite__cjsImport3_react["lazy"];
import { BrowserRouter } from "/node_modules/.vite/deps/react-router-dom.js?v=66d558eb";
import LazyLoading from "/src/components/lazyLoading/LazyLoading.jsx";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=66d558eb";
import __vite__cjsImport7_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=66d558eb"; const createRoot = __vite__cjsImport7_reactDom_client["createRoot"];
import { store } from "/src/context/index.js";
const App = /*#__PURE__*/ lazy(()=>import("/src/App.jsx?t=1724235861182"));
_c = App;
createRoot(document.getElementById("root")).render(// <React.StrictMode>
/*#__PURE__*/ _jsxDEV(Suspense, {
    fallback: /*#__PURE__*/ _jsxDEV(LazyLoading, {}, void 0, false, {
        fileName: "C:/Users/hp/OneDrive/Ishchi stol/Najot Ta'lim/SHOP.CO/src/main.jsx",
        lineNumber: 15,
        columnNumber: 23
    }, void 0),
    children: /*#__PURE__*/ _jsxDEV(BrowserRouter, {
        children: /*#__PURE__*/ _jsxDEV(Provider, {
            store: store,
            children: /*#__PURE__*/ _jsxDEV(App, {}, void 0, false, {
                fileName: "C:/Users/hp/OneDrive/Ishchi stol/Najot Ta'lim/SHOP.CO/src/main.jsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "C:/Users/hp/OneDrive/Ishchi stol/Najot Ta'lim/SHOP.CO/src/main.jsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "C:/Users/hp/OneDrive/Ishchi stol/Najot Ta'lim/SHOP.CO/src/main.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this)
}, void 0, false, {
    fileName: "C:/Users/hp/OneDrive/Ishchi stol/Najot Ta'lim/SHOP.CO/src/main.jsx",
    lineNumber: 15,
    columnNumber: 3
}, this));
var _c;
$RefreshReg$(_c, "App");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("C:/Users/hp/OneDrive/Ishchi stol/Najot Ta'lim/SHOP.CO/src/main.jsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/hp/OneDrive/Ishchi stol/Najot Ta'lim/SHOP.CO/src/main.jsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgbGF6eSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBMYXp5TG9hZGluZyBmcm9tIFwiLi9jb21wb25lbnRzL2xhenlMb2FkaW5nL0xhenlMb2FkaW5nXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuL2NvbnRleHRcIjtcblxuY29uc3QgQXBwID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuL0FwcC5qc3hcIikpO1xuXG5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSkucmVuZGVyKFxuICAvLyA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8TGF6eUxvYWRpbmcgLz59PlxuICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxBcHAgLz5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICA8L1N1c3BlbnNlPlxuICAvLyA8L1JlYWN0LlN0cmljdE1vZGU+XG4pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3VzcGVuc2UiLCJsYXp5IiwiQnJvd3NlclJvdXRlciIsIkxhenlMb2FkaW5nIiwiUHJvdmlkZXIiLCJjcmVhdGVSb290Iiwic3RvcmUiLCJBcHAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiZmFsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sY0FBYztBQUVyQixPQUFPQSxTQUFTQyxRQUFRLEVBQUVDLElBQUksUUFBUSxRQUFRO0FBRTlDLFNBQVNDLGFBQWEsUUFBUSxtQkFBbUI7QUFDakQsT0FBT0MsaUJBQWlCLHVDQUF1QztBQUMvRCxTQUFTQyxRQUFRLFFBQVEsY0FBYztBQUN2QyxTQUFTQyxVQUFVLFFBQVEsbUJBQW1CO0FBQzlDLFNBQVNDLEtBQUssUUFBUSxZQUFZO0FBRWxDLE1BQU1DLG9CQUFNTixLQUFLLElBQU0sTUFBTSxDQUFDO0tBQXhCTTtBQUVORixXQUFXRyxTQUFTQyxjQUFjLENBQUMsU0FBU0MsTUFBTSxDQUNoRCxxQkFBcUI7Y0FDckIsUUFBQ1Y7SUFBU1csd0JBQVUsUUFBQ1I7Ozs7O2NBQ25CLGNBQUEsUUFBQ0Q7a0JBQ0MsY0FBQSxRQUFDRTtZQUFTRSxPQUFPQTtzQkFDZixjQUFBLFFBQUNDIn0=