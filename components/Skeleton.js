export default function Skeleton() {
  return (
    <div className="skeleton">
      <div className="s-banner"></div>
      <div className="s-header"></div>
      <div className="s-content"></div>
      <div className="s-content"></div>
      <div className="s-content"></div>

      <style jsx>{`
        .skeleton {
          max-width: 1200px;
          margin: 20px auto;
          padding: 0 20px;
        }

        .skeleton > div {
          background: linear-gradient(
            90deg,
            #eee 25%,
            #ddd 37%,
            #eee 63%
          );
          background-size: 400% 100%;
          animation: shimmer 1.4s ease infinite;
          border-radius: 8px;
          margin: 16px 0;
        }

        .s-banner {
          height: 220px;
          border-radius: 12px;
        }

        .s-header {
          height: 28px;
          width: 60%;
        }

        .s-content {
          height: 16px;
          width: 90%;
        }

        .s-content:nth-child(4) {
          width: 80%;
        }

        .s-content:nth-child(5) {
          width: 95%;
        }

        @keyframes shimmer {
          0% {
            background-position: -400px 0;
          }
          100% {
            background-position: 400px 0;
          }
        }
      `}</style>
    </div>
  );
}