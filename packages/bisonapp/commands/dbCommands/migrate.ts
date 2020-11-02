import yargslib from "yargs";
import { runCLICommands } from "../../lib/helpers";
import { handler as generatePrismaClient } from "../buildCommands/prisma";

export const command = "migrate";
export const description = "Migrate the database";

export const builder = (yargs: yargslib.Argv<{}>) => {
  yargs.option("dbClient", {
    default: true,
    description: "Generate the Prisma client",
    type: "boolean",
  });
};

export const handler = async ({ dbClient = true }) => {
  const success = await runCLICommands([
    {
      title: "Migrate database up...",
      cmd: "yarn prisma",
      args: ["migrate up", "--experimental"].filter(Boolean),
    },
  ]);

  if (success && dbClient) {
    await generatePrismaClient();
  }
};
