import { useEffect } from 'react';
import RemoteVueComponent from './RemoteVueComponent';
import RemoteApp from "remoteApp/RemoteApp";
import WcLocalCounter from "remoteApp/WcLocalCounter";


function App() {
  useEffect(() => {
    RemoteApp("#vue-app");
  }, [])

  return (
    <div id='app'>
      <h1>React Module Federation With Vue</h1>
      <hr />
      <h3>Vue Component Shared Via MF</h3>
      <RemoteVueComponent importComponent={() => import("remoteApp/LocalCounter")} />
      <hr />
      <h3>Vue Web Component Shared Via MF</h3>
      <wc-local-counter></wc-local-counter>
      <hr />
      <h3>Vue App Shared Via MF</h3>
      <div id="vue-app" />
    </div>
  )
}

export default App
