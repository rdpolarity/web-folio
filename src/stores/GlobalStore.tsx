import { autorun, computed, makeAutoObservable } from "mobx";
import ReactGA from "react-ga4";
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
      ReactGA.event({
        category: "Easter Eggs",
        action: "Dots secret Found",
        value: this.getEasterEggCount(),
      });
    }
    this.isDots = isDots;
  }

  setIsMinecraft(isMinecraft: boolean) {
    if (isMinecraft) {
      this.isMinecraftFound = true;

      ReactGA.event({
        category: "Easter Eggs",
        action: "Minecraft secret found",
        value: this.getEasterEggCount(),
      });
    }
    this.isMinecraft = isMinecraft;
  }

  spyroFound() {
    this.isSpyroFound = true;
    ReactGA.event({
      category: "Easter Eggs",
      action: "Spyro secret found",
      value: this.getEasterEggCount(),
    });
  }
}

export const globalStore = new GlobalStore();

// Create a store context and provider

export const GlobalStoreContext = React.createContext(globalStore);
export const GlobalStoreProvider = GlobalStoreContext.Provider;

export const useGlobalStore = () => React.useContext(GlobalStoreContext);
