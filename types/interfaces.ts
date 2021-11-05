export interface IUser {
  name: string;
  email: string;
  image: string;
}

export interface ILoaderProps {
  loader:
    | "Audio"
    | "BallTriangle"
    | "Bars"
    | "Circles"
    | "Grid"
    | "Hearts"
    | "Oval"
    | "Puff"
    | "Rings"
    | "TailSpin"
    | "ThreeDots"
    | "Watch"
    | "RevolvingDot"
    | "Triangle"
    | "Plane"
    | "MutatingDots"
    | "CradleLoader";
}

export interface IButtonSelectorState {
  name: string;
  active: boolean;
  component: JSX.Element;
}
