import { makeAutoObservable } from "mobx";
import React from "react";

class GlobalStore {

  isMinecraft = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsMinecraft(isMinecraft: boolean) {
    console.log("setIsMinecraft", isMinecraft);
    this.isMinecraft = isMinecraft;
  }
}

export const globalStore = new GlobalStore();

// Create a store context and provider

export const GlobalStoreContext = React.createContext(globalStore);
export const GlobalStoreProvider = GlobalStoreContext.Provider;

export const useGlobalStore = () => React.useContext(GlobalStoreContext);