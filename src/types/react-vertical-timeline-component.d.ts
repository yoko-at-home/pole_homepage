declare module "react-vertical-timeline-component" {
  import { Component } from "react";

  export interface VerticalTimelineProps {
    children?: React.ReactNode;
    className?: string;
    layout?: "1-column" | "2-columns";
    animate?: boolean;
  }

  export interface VerticalTimelineElementProps {
    children?: React.ReactNode;
    className?: string;
    contentArrowStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: React.ReactNode;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: React.CSSProperties;
    position?: "left" | "right";
    style?: React.CSSProperties;
  }

  export class VerticalTimeline extends Component<VerticalTimelineProps> {}
  export class VerticalTimelineElement extends Component<VerticalTimelineElementProps> {}
}
