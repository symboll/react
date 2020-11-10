import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'
import { render } from './util'
import { getStore } from '../store'
import routes from '@/routes'
import { BASE_URL } from '@/config'

const app = express()
app.use(express.static('public'))

app.use('/proxy', proxy(BASE_URL, {
  proxyReqPathResolver: function(req) {
    return `${req.url}`
  }
}))

app.get('*',function (req, res) {
  const store = getStore()
  const matchedRoutes = matchRoutes(routes, req.path)

  const promises = []
  matchedRoutes.forEach(item => {
    if(item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })
  Promise.all(promises).then(() => {
    res.send(render(req, store, routes))
  })
})

app.listen(3000)