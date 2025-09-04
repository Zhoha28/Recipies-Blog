import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000); // Redirect after 3 seconds
    }, []);


  return (
    <div className="not-found">
      <div className="error-emoji">🍳🥄</div>
      <h1>404</h1>
      <h2>Looks like this recipe got lost in the kitchen...</h2>
      <p>
        Don’t worry, the best dishes take time.  
        <br /> Head back home and keep cooking up ideas!
      </p>
      <Link href="/" className="home-link">
        🔗 Take me home
      </Link>

      <style jsx>{`
        .not-found {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
          font-family: "Inter", sans-serif;
        }

        .error-emoji {
          font-size: 10rem;
          margin-bottom: 10px;
          animation: float 2s ease-in-out infinite;
        }

        h1 {
          font-size: 6rem;
          font-weight: 800;
          color: #c85c5c;
          margin: 0;
          letter-spacing: -2px;
          animation: pop 0.8s ease;
        }

        h2 {
          font-size: 1.6rem;
          font-weight: 600;
          margin: 10px 0 20px;
          color: #2e2a26;
        }

        p {
          font-size: 1.1rem;
          color: #444;
          margin-bottom: 30px;
        }

        .home-link {
          padding: 12px 24px;
          background: #2e2a26;
          color: #fff;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          font-size: 1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        .home-link:hover {
          background: #c85c5c;
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pop {
          0% {
            transform: scale(0.7);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}