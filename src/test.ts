/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-13 07:37
 */

import { CmLogger } from "./logger/cm-logger";
import { UrlUtils } from "./utils";
import { VarUtils } from "./utils/var.utils";

CmLogger.info("test", "Array kommer här: ", { kalle: "kula", knyffe: "ballong" }, "och en string");



console.log("varType 1 (string) :", VarUtils.isStr("kula"));
console.log("varType 2 (obj) :", VarUtils.isStr({kalle: "kula"}));


console.log(" ");
console.log("UrlUtils.ensureTrailingSlash 'kalle':",  UrlUtils.ensureTrailingSlash("kalle"));
console.log("UrlUtils.ensureTrailingSlash 'kalle/':",  UrlUtils.ensureTrailingSlash("kalle"));
console.log(" ");
console.log("UrlUtils.ensureLeadingSlash 'balle':",  UrlUtils.ensureLeadingSlash("balle"));
console.log("UrlUtils.ensureLeadingSlash 'balle/':",  UrlUtils.ensureLeadingSlash("balle"));
