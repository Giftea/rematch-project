import { init } from "@rematch/core";
import { posts } from "./models"
import loadingPlugin from "@rematch/loading"

const store = init({ 
    models: { posts },
    plugins: [loadingPlugin()],
 });

export default store;