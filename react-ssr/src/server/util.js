import React, { Fragment } from 'react'
import { StaticRouter,Route } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

export const render = (req, store, routes)=> {
  const App = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Fragment>
          { renderRoutes(routes) }
          {/* { routes.map(item => <Route key={item.key} {...item}></Route>)} */}
        </Fragment>
      </StaticRouter>
    </Provider>
  )
  return (
    `<html>
      <head>
        <title>Next</title>
      </head>
      <body>
        <div id="root">${App}</div>    
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
}