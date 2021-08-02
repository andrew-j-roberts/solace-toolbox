import { interpret } from "@xstate/fsm";
import { readable } from "svelte/store";
import type { EventBrokerConnection, Simulator } from "./types";

/**
 * useMachine.js
 * ajr notes: This util takes a state machine object, interprets it,
 * and starts a service that is configured to update a Svelte store on every state change.
 * Be sure to use $state whenever you reference the exposed state property since it's a Svelte store.
 *
 * I'm not the author of this file, source here: https://codesandbox.io/s/yb6lq?file=/useMachine.js:0-465
 **/
export function useMachine(machine): StateMachineService {
  const service = interpret(machine);

  const store = readable(machine.initialState, (set) => {
    service.subscribe((state) => {
      if (state.changed) {
        set(state);
      }
    });

    service.start();

    return () => {
      service.stop();
    };
  });

  return {
    state: store,
    send: service.send,
  };
}
interface StateMachineService {
  state: any;
  send: (event) => void;
}

// file download, https://stackoverflow.com/a/49917066/13414384
export function download(data, fileName, type) {
  let json = JSON.stringify(data);
  let blob = new Blob([json], { type: `application/${type}` });
  let url = URL.createObjectURL(blob);

  let a = document.createElement("a");
  a.download = `${fileName}.${type}`;
  a.href = url;
  a.textContent = `${fileName}.${type}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function getCurrentTimeHHMMSS() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? "pm" : "am";
  let formattedHours = hours % 12;
  let formattedHours12 = formattedHours ? formattedHours : 12; // the hour '0' should be '12'
  let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = `${formattedHours12 + ":" + formattedMinutes + ":" + seconds + " " + ampm}`;
  return strTime;
}

export function getFirstValue(object) {
  return object[Object.keys(object)[0]];
}

export function getLastValue(object) {
  return object[Object.keys(object)[Object.keys(object).length - 1]];
}
