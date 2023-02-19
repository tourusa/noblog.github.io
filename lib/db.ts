import Keyv from "@keyvhq/core";

import { isRedisEnabled, redisNamespace, redisUrl } from "./config";

let db: Keyv = new Keyv();

export { db };
