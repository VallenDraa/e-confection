import dotenv from "dotenv";

// Gets the env values on development mode. On production this
// process is skipped because it is automatically done by the hosting service.
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

export const PORT = process.env.PORT;
export const ENABLE_LOGGING = process.env.ENABLE_LOGGING === "true";
