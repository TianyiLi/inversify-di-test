import { DIAbstractRequestClientKey } from "./../shared/interface/request-client";
import { Container, ContainerModule } from "inversify";
import BaseRequestClient from "../shared/request-client";

export const coreContainer = new (class CoreContainer {
  public container = new Container();

  private cachedKeys = new Set<ContainerModule>();

  constructor() {
    this.container.bind(DIAbstractRequestClientKey).to(BaseRequestClient);
  }

  load(...containerModules: ContainerModule[]) {
    const containerModule = containerModules.shift();
    if (!containerModule) return
    if (this.cachedKeys.has(containerModule)) return;
    this.container.load(containerModule);
    this.load(...containerModules);
  }
})();

export const container = coreContainer.container;
