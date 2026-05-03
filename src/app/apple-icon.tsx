import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 124,
            height: 124,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 30%, #ff8aa8 0%, #ff5c8a 45%, #d63864 100%)",
            boxShadow: "0 0 80px -10px rgba(255,92,138,0.7)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
