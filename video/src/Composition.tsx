import {
  AbsoluteFill,
  Composition,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type Props = { title: string; subtitle: string };

export const MyComposition = () => {
  return (
    <Composition
      id="Welcome"
      component={MyComponent}
      durationInFrames={150}
      fps={30}
      width={1280}
      height={720}
      defaultProps={{
        title: "VidEditing",
        subtitle: "Your next story starts here.",
      }}
    />
  );
};

export const MyComponent: React.FC<Props> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(ellipse at top right, #243d65, #0b1020 70%)",
        color: "#f5f7fc",
        fontFamily: "Arial, Helvetica, sans-serif",
        justifyContent: "center",
        padding: 100,
      }}
    >
      <Interactive.Div
        name="Title"
        premountFor={fps}
        style={{
          fontSize: 112,
          fontWeight: 700,
          letterSpacing: -5,
          opacity: interpolate(frame, [0, fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [0, fps], ["0px 30px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {title}
      </Interactive.Div>
      <Interactive.Div
        name="Subtitle"
        premountFor={fps}
        style={{
          marginTop: 28,
          fontSize: 48,
          color: "#83decf",
          opacity: interpolate(frame, [0.5 * fps, 1.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {subtitle}
      </Interactive.Div>
    </AbsoluteFill>
  );
};
