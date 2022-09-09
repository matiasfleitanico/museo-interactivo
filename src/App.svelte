<script>
  import { Router, Link, Route } from "svelte-routing";
  import { afterUpdate } from "svelte";
  import SubApp from "./SubApp.svelte";
  import { route } from "./lib/stores"

  let location = "";
  afterUpdate(() => {
    console.log(location);
  });
</script>

<Router bind:url={location}>
  <Route path="/">
    <SubApp route={0} />
  </Route>
  <Route path="/1">
    <SubApp route={1} />
  </Route>
  <Route path="/2">
    <SubApp route={2} />
  </Route>
  <Route path="/3">
    <SubApp route={3} />
  </Route>
  <Route path="/4">
    <SubApp route={4} />
  </Route>
</Router>
