<script>
  import { Router, Link, Route } from "svelte-navigator";
  import SubApp from "./SubApp.svelte";
</script>

<Router>
  <Route path="/">
    <SubApp />
  </Route>
  <Route path="/1">
    <SubApp />
  </Route>
  <Route path="/2">
    <SubApp />
  </Route>
  <Route path="/3">
    <SubApp />
  </Route>
  <Route path="/4">
    <SubApp />
  </Route>
  <Route path="/hola">
    <SubApp />
  </Route>
</Router>
