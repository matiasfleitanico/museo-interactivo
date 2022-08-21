<script>
  import { Router, Link, Route } from "svelte-routing";
  import SubApp from "./SubApp.svelte";
</script>

<Router>
  <Route path="/">
    <SubApp />
  </Route>
</Router>
