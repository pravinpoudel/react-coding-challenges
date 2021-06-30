import React, { useState, Component } from "react";
import RocketCore from "./RocketCore";

const FunctionalRocket = React.memo(() => {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
});

class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now(),
    };
  }

  shouldComponentUpdate(nexProps, nextState) {
    return false;
  }

  render() {
    console.log("rendered");
    const { initialLaunchTime } = this.state;
    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}

export { FunctionalRocket, ClassRocket };
