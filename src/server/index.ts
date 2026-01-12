import initializeServer from './initializeServer'
import router from './router'

const app = initializeServer(router)

/**
 * The hosting platform (and most PaaS environments) injects PORT/HOST.
 * Default to the original upstream port (5000) for local/dev compatibility.
 */
const port = Number(process.env.PORT) || 5000
const host = process.env.HOST || '0.0.0.0'

app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on http://${host}:${port}`)
})
