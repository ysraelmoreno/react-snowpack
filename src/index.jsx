import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));

if (import.meta.hot) {
  // Receive any updates from the dev server, and update accordingly.
  import.meta.hot.accept(({ module }) => {
    try {
      foo = module.foo;
    } catch (err) {
      // If you have trouble accepting an update, mark it as invalid (reload the page).
      import.meta.hot.invalidate();
    }
  });
  // Optionally, clean up any side-effects in the module before loading a new copy.
  import.meta.hot.dispose(() => {
    /* ... */
  });
}
