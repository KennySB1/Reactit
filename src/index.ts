import { MikroORM } from "@mikro-orm/core"
import {__prod__} from "./constants";
import {Post} from "./entities/Post";

const main = async () => {

}
main()
const orm = async () => {
    MikroORM.init({
        entities: [Post],
        dbName: "reactit",
        debug: __prod__,
        type: "postgresql"
    });
}

