// import { analytics } from "@pages/_app";
import { autorun, computed, makeAutoObservable } from "mobx";
import React from "react";
import { event } from "nextjs-google-analytics";
import LogRocket from "logrocket";

class GlobalStore {
  isMinecraft = false;
  isMinecraftFound = false;

  isDots = false;
  isDotsFound = false;

  isSpyroFound = false;

  @computed
  getEasterEggs = () => [
    this.isMinecraftFound,
    this.isDotsFound,
    this.isSpyroFound,
  ];

  @computed
  getEasterEggCount = () => this.getEasterEggs().filter((e) => e).length;

  constructor() {
    makeAutoObservable(this);

    autorun(() => {
      if (this.isMinecraft) LogRocket.track("Minecraft secret found");
      if (this.isDots) LogRocket.track("Dots secret found");
      if (this.isSpyroFound) LogRocket.track("Spyro secret found");
    });
  }

  setIsDots(isDots: boolean) {
    if (isDots) this.isDotsFound = true;
    this.isDots = isDots;
  }

  setIsMinecraft(isMinecraft: boolean) {
    if (isMinecraft) this.isMinecraftFound = true;
    this.isMinecraft = isMinecraft;
  }

  spyroFound() {
    this.isSpyroFound = true;
  }
}

export const globalStore = new GlobalStore();

// Create a store context and provider

export const GlobalStoreContext = React.createContext(globalStore);
export const GlobalStoreProvider = GlobalStoreContext.Provider;

export const useGlobalStore = () => React.useContext(GlobalStoreContext);
