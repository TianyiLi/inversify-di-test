import { IServiceAKey } from './../../test-a/entities/index';
import { IServiceBKey } from "../entities";
import { ContainerModule } from "inversify";
import { ServiceB } from "./serviceB";
import { inversifyBind } from "../../shared/inversify-bind";
import ServiceA from '../../test-a/services/serviceA';
export const TestBServiceModule = new ContainerModule(
  inversifyBind([IServiceBKey, ServiceB], [IServiceAKey, ServiceA])
);
