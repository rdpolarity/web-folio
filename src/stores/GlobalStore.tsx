import { analytics } from "@pages/_app";
import { autorun, computed, makeAutoObservable } from "mobx";
import React from "react";

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
  }

  setIsDots(isDots: boolean) {
    if (isDots) {
      this.isDotsFound = true;
      analytics.track("easterEggs", {
        action: "Dots secret Found",
        count: this.getEasterEggCount(),
      });
    }
    this.isDots = isDots;
  }

  setIsMinecraft(isMinecraft: boolean) {
    if (isMinecraft) {
      this.isMinecraftFound = true;

      analytics.track("easterEggs", {
        action: "Minecraft secret found",
        count: this.getEasterEggCount(),
      });
    }
    this.isMinecraft = isMinecraft;
  }

  spyroFound() {
    this.isSpyroFound = true;
    analytics.track("easterEggs", {
      action: "Spyro secret found",
      count: this.getEasterEggCount(),
    });
  }
}

export const globalStore = new GlobalStore();

// Create a store context and provider

export const GlobalStoreContext = React.createContext(globalStore);
export const GlobalStoreProvider = GlobalStoreContext.Provider;

export const useGlobalStore = () => React.useContext(GlobalStoreContext);
