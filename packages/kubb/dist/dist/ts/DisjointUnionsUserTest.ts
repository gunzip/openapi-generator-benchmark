import { EnabledUserTest } from "./EnabledUserTest";
import { DisabledUserTest } from "./DisabledUserTest";

 export type DisjointUnionsUserTest = (EnabledUserTest | DisabledUserTest);