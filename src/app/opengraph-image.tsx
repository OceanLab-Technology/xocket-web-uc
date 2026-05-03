import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Xocket — The Execution Layer for Modern Teams";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -100,
            width: 900,
            height: 900,
            borderRadius: 9999,
            background:
              "radial-gradient(closest-side, rgba(255,92,138,0.30), transparent 70%)",
            filter: "blur(20px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -150,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background:
              "radial-gradient(closest-side, rgba(124,92,255,0.20), transparent 70%)",
            filter: "blur(20px)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 9999,
              background:
                "radial-gradient(circle at 30% 30%, #ff8aa8 0%, #ff5c8a 45%, #d63864 100%)",
              boxShadow: "0 0 60px -10px rgba(255,92,138,0.7)",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: -0.5,
              display: "flex",
            }}
          >
            Xocket
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            The execution layer for modern teams.
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#a3a3a3",
              maxWidth: 950,
              display: "flex",
            }}
          >
            AI-native developers who operate as an execution layer inside your
            team.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            color: "#737373",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex" }}>xocket.sh</div>
          <div style={{ display: "flex" }}>cal.com/xocket/30min</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
