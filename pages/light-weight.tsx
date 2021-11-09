import React from "react";
import { Log, ButtonComponent } from "../src/modules/very-heavy-module/components";

export default function LightWeightPage() {
  return <div>
    <ButtonComponent />
    <Log></Log>
  </div>
}