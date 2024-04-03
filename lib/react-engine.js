import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export const ViewDataContext = React.createContext();

export function reactJsxEngine(filePath, options, callback) {
  import(filePath)
    .then((m) => m.default)
    .then((Component) => {
      let html = renderToStaticMarkup(
        <ViewDataContext.Provider value={options}>
          <Component />
        </ViewDataContext.Provider>
      );
      if (html.startsWith('<html')) {
        html = `<!DOCTYPE html>${html}`;
      }
      callback(null, html);
    });
}
