import ServiceA from "../services/serviceA";
import { container } from "../../core/container";
import { TYPES } from "../../constant";

container.bind(TYPES.serviceA).to(ServiceA);
container.load