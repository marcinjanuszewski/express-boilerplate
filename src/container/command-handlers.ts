import { AwilixContainer } from "awilix";
import * as awilix from "awilix";
import { asArray } from "@tshio/awilix-resolver";

import LoginHandler from "../app/features/example/handlers/login.handler";
import DeleteUserHandler from "../app/features/example/handlers/delete-user.handler";
// HANDLERS_IMPORTS

export async function registerCommandHandlers(container: AwilixContainer) {
  container.register({
    commandHandlers: asArray<any>([
      awilix.asClass(LoginHandler),
      awilix.asClass(DeleteUserHandler),
      // COMMAND_HANDLERS_SETUP
    ]),
  });

  return container;
}
