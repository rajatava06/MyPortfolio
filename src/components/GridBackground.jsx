// Fixed, GPU-friendly background: static grid layers + glow patches that only
// animate opacity/transform, so scrolling never triggers a repaint.
export const GridBackground = () => {
  return (
    <div className="grid-bg" aria-hidden="true">
      <div className="grid-bg__base" />
      <div className="grid-bg__glow grid-bg__glow--a" />
      <div className="grid-bg__glow grid-bg__glow--b" />
      <div className="grid-bg__glow grid-bg__glow--c" />
      <div className="grid-bg__orb grid-bg__orb--a" />
      <div className="grid-bg__orb grid-bg__orb--b" />
      <div className="grid-bg__vignette" />
    </div>
  );
};
