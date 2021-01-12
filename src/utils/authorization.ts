export const environments = ["LOCALHOST", "DEV", "TEST", "UAT", "CZ"];

export type Environment = "LOCALHOST" | "DEV" | "TEST" | "UAT" | "CZ";

export function keycloakInit(onAuthenticatedCallback: Function) {
  onAuthenticatedCallback();
}
