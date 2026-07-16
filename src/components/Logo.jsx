// BP monogram badge — matches the brand's square blue logo.
export default function Logo({ size = 40 }) {
  return (
    <div
      className="flex items-center justify-center rounded-xl font-black tracking-tight text-white"
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, #2979FF 0%, #1E6FFF 100%)",
        fontSize: size * 0.42,
        boxShadow: "0 6px 20px -6px rgba(41,121,255,0.6)",
      }}
    >
      BP
    </div>
  );
}
