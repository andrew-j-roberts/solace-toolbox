import { Writable, writable, readable, get } from "svelte/store";
import { createMachine, interpret } from "@xstate/fsm";
import { useMachine } from "./utils";

// ui
export interface Page {
  id: string;
  type: PageType;
  data?: any;
}
type PageType =
  | "none"
  | "home"
  | "connections-table"
  | "connection-config"
  | "simulators-table"
  | "simulator-config"
  | "simulator-detail";

export interface Widget {
  type: WidgetType;
}
type WidgetType = "none" | "simulators" | "queues";

// event brokers
export interface EventBrokerConnection {
  id: string;
  userType: UserType;
  hostUrl: string;
  msgVpn: string;
  username: string;
  password: string;
}
export const defaultEventBrokerConnection: EventBrokerConnection = {
  id: "SMF TLS - software defaults",
  userType: "Messaging",
  hostUrl: "localhost:55443",
  msgVpn: "default",
  username: "default",
  password: "",
};
type UserType = "Messaging" | "SEMP";

// simulators
export interface Simulator {
  id: string;
  messagingClientType: MessagingClient;
  simulatorType: SimulatorType;
  connectionDetails: EventBrokerConnection;
  publishRateMs: number;
  status: SimulatorStatus;
  session: Session;
}
export const defaultSimulator: Simulator = {
  id: "order–create - solclientjs",
  messagingClientType: "solclientjs",
  simulatorType: "order-create",
  connectionDetails: defaultEventBrokerConnection,
  publishRateMs: 1000,
  status: "new",
  session: null,
};

type MessagingClient = "solclientjs" | "MQTT.js" | "REST";
type SimulatorType = "order-create" | "order-validate";
type SimulatorStatus = "new" | "starting" | "running" | "stopped" | "completed" | "error";

// sessions
export interface Session {
  state: any; // state machine gets to any it up, too bad
  ref: any; // messaging client
  send?: (payload: any, topic: string) => void;
  subscribe?: (topic: string) => void;
  consume?: (queue: string) => void;
}
export function createSessionMachine() {
  return writable(
    useMachine(
      createMachine({
        id: "sessionMachine",
        initial: "disconnected",
        states: {
          disconnected: {
            on: {
              CONNECT_REQUEST: "connecting",
            },
          },
          connecting: {
            on: {
              DISCONNECTED: "disconnected",
              UP_NOTICE: "connected",
              ERROR: "error",
            },
          },
          connected: {
            on: {
              DISCONNECTED: "disconnected",
            },
          },
          error: {
            on: {
              CONNECT_REQUEST: "connecting",
            },
          },
        },
      })
    )
  );
}
