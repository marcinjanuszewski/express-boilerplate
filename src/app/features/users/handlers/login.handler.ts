import { CommandHandler } from "../../../../shared/command-bus";
import { LOGIN_COMMAND_TYPE, LoginCommand } from "../commands/login.command";
import { EventDispatcher } from "../../../../shared/event-dispatcher";
import { AppError } from "../../../../errors/app.error";

export interface LoginHandlerDependencies {
  eventDispatcher: EventDispatcher;
}

export default class LoginCommandHandler implements CommandHandler<LoginCommand> {
  public commandType: string = LOGIN_COMMAND_TYPE;

  private eventDispatcher: EventDispatcher;

  constructor({ eventDispatcher }: LoginHandlerDependencies) {
    this.eventDispatcher = eventDispatcher;
  }

  async execute(command: LoginCommand) {
    throw new AppError("123");
    await this.eventDispatcher.dispatch({
      name: "UserLoggedIn",
      payload: command,
    });

    return {
      ...command,
    };
  }
}
