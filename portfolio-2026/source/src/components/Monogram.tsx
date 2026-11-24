/** Monogramme ASL : rond bordeaux uni. */
export default function Monogram({ size = 40 }: { size?: number }) {
  return (
    <span className="monogram" style={{ width: size, height: size, fontSize: Math.max(9, size * 0.25) }} aria-hidden>
      ASL
    </span>
  );
}
