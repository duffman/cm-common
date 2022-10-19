/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2022-10-13 07:37
 */

import { DLog } from "./logger/d-log";
import { Str }  from "./utils";
import { UrlUtils }   from "./utils";
import { VarUtils }   from "./utils/var.utils";

DLog.info("test", "Array kommer här: ", { kalle: "kula", knyffe: "ballong" }, "och en string");

let testStr = "  ";
console.log(`varType 1 (string) "${testStr}" :`, Str.isEmpty(testStr));

testStr = null;
console.log(`varType 1 (string) "${testStr}" :`, Str.isEmpty(testStr));


console.log(" ");

console.log("varType 1 (string) :", Str.isString("kula"));
console.log("varType 2 (obj) :", Str.isString({kalle: "kula"}));

console.log(" ");

console.log("UrlUtils.ensureTrailingSlash 'kalle':",  UrlUtils.ensureTrailingSlash("kalle"));
console.log("UrlUtils.ensureTrailingSlash 'kalle/':",  UrlUtils.ensureTrailingSlash("kalle"));
console.log(" ");
console.log("UrlUtils.ensureLeadingSlash 'balle':",  UrlUtils.ensureLeadingSlash("balle"));
console.log("UrlUtils.ensureLeadingSlash 'balle/':",  UrlUtils.ensureLeadingSlash("balle"));

console.log(" ");

DLog.info("Info");
DLog.warn("Warn");
DLog.error("Error", new Error("Fail man"));
