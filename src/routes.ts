import { get } from "svelte/store";
import { openPages, selectedPage } from "./stores";
import type { Page, Widget } from "./types";
import { getLastValue } from "./utils";

// pages
export const noOpenPage: Page = { id: "none", type: "none" };
export const welcomePage: Page = { id: "Welcome", type: "home" };
export const connectionsTablePage: Page = { id: "Connections table", type: "connections-table" };
export function connectionConfigPage(data?): Page {
  if (data) {
    return { id: "Configure connection", type: "connection-config", data };
  } else {
    return { id: "Configure connection", type: "connection-config" };
  }
}
export const simulatorsTablePage: Page = { id: "Simulators table", type: "simulators-table" };
export const simulatorConfigPage: Page = { id: "Configure simulator", type: "simulator-config" };
export function simulatorDetailPage(data): Page {
  return { id: "Configure simulator", type: "simulator-config", data };
}

// widgets
export const noOpenWidget: Widget = { type: "none" };
export const simulatorsWidget: Widget = { type: "simulators" };
export const queueManagerWidget: Widget = { type: "queues" };

// navigation options
export function navigate(page: Page) {
  openPages.open(page);
  selectedPage.set(page);
}

export function close(page: Page) {
  let openPagesCurrentVal = get(openPages);
  openPages.close(page);
  if (Object.keys(openPagesCurrentVal).length > 0) {
    selectedPage.set(getLastValue(openPagesCurrentVal));
  } else {
    selectedPage.set(noOpenPage);
  }
}
