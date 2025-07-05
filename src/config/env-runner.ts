import { Injectable, OnModuleInit } from "@nestjs/common";
import { envSchema } from "./env.schema";

export interface EnvironmentRunner {
    run: () => Promise<void>;

    stop: () => Promise<void>;
}

@Injectable()
export class EnvironmentRunnerImple implements EnvironmentRunner, OnModuleInit  {
    public async onModuleInit() {
        console.log("ENV INITIALIZATION START");
        await this.run();
        console.log("PASSED ENV VALIDATION");
    }

    public async run(): Promise<void> {
        
        try {
            await this.initializeConfigs();
        } catch (error) {
            console.error(`Env initialization error: ${error}`);
            await this.stop();
        }
    }

    public async stop(): Promise<void> {
        try {

        } catch (error) {
			console.log("[Environment] Cannot stop: ", error)
		} finally {
			process.exit(0)
		}
    }

    private async initializeConfigs() {
        const { error, value } = envSchema.validate(process.env, {
            abortEarly: false,
            allowUnknown: true,
            stripUnknown: true,
        });

        if (error) {
            console.error(`[Environment] Configs initializing error:`, error.message);
            process.exit(0);
        }
    }
}
