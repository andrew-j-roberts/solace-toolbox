import { Writable, writable, readable, get } from "svelte/store";
import type { Page, Widget, EventBrokerConnection, Simulator } from "./types";
import { defaultEventBrokerConnection, defaultSimulator } from "./types";

// ui
export const openWidget: Writable<Widget> = writable({ type: "none" });
export const openPages: PagesStore = createPagesStore();
export const selectedPage: Writable<Page> = writable({ id: "", type: "none" });

interface PagesStore {
  subscribe: Writable<Record<string, Page>>["subscribe"];
  open: (page: Page) => void;
  close: (page: Page) => void;
}
function createPagesStore() {
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    open: (page: Page) =>
      update((pages: Record<string, Page>) => {
        return { ...pages, [page.id]: page };
      }),
    close: (page: Page) =>
      update((pages: Record<string, Page>) => {
        delete pages[page.id];
        return { ...pages };
      }),
  };
}

// event broker connection details
export const connectionOptions: ConnectionOptionsStore = createConnectionOptionsStore();

interface ConnectionOptionsStore {
  subscribe: Writable<Record<string, EventBrokerConnection>>["subscribe"];
  save: (connectionOption: EventBrokerConnection) => void;
  delete: (connectionOption: EventBrokerConnection) => void;
}
function createConnectionOptionsStore(): ConnectionOptionsStore {
  let defaultObj: Record<string, EventBrokerConnection> = {
    [defaultEventBrokerConnection.id]: defaultEventBrokerConnection,
  };
  const { subscribe, set, update } = writable(defaultObj);

  return {
    subscribe,
    save: (config: EventBrokerConnection) =>
      update((connectionOptions: Record<string, EventBrokerConnection>) => {
        return { ...connectionOptions, [config.id]: config };
      }),
    delete: (config: EventBrokerConnection) =>
      update((connectionOptions: Record<string, EventBrokerConnection>) => {
        delete connectionOptions[config.id];
        return { ...connectionOptions };
      }),
  };
}

// simulators
export const simulators: SimulatorsStore = createSimulatorStore();

interface SimulatorsStore {
  subscribe: Writable<Record<string, Simulator>>["subscribe"];
  save: (simulator: Simulator) => void;
  delete: (simulator: Simulator) => void;
  start: (simulator: Simulator) => void;
  stop: (simulator: Simulator) => void;
}
function createSimulatorStore(): SimulatorsStore {
  let defaultObj: Record<string, Simulator> = { [defaultSimulator.id]: defaultSimulator };
  const { subscribe, set, update } = writable(defaultObj);

  return {
    subscribe,
    save: (simulator: Simulator) =>
      update((simulators: Record<string, Simulator>) => {
        return { ...simulators, [simulator.id]: simulator };
      }),
    delete: (simulator: Simulator) =>
      update((simulators: Record<string, Simulator>) => {
        delete simulators[simulator.id];
        return { ...simulators, [simulator.id]: simulator };
      }),
    start: (simulator: Simulator) => {
      console.log("START");
    },
    stop: (simulator: Simulator) => {
      console.log("STOP");
    },
  };
}

// session manager
// const sessions: SessionsStore = createSessionsStore();

// interface SessionsStore {}
// function createSessionsStore(): SessionsStore {}

// // user config
// export function createExport() {
//   return {
//     connectionOptions: [...get(connectionOptions).values()],
//     simulators: [...get(simulators).values()],
//   };
// }
