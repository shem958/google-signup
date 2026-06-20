import React, { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { Skeleton } from "./components/Loader";
import toast, { Toaster } from "react-hot-toast";
import "./styles/global.css";
import "./styles/App.css";

function App() {
  const { user, loading, signInWithGooglePopup, signInWithGoogleRedirect, logout } = useAuth();
  const [method, setMethod] = useState<"popup" | "redirect">("popup");
  const [authLoading, setAuthLoading] = useState(false);

  const handleSignIn = async () => {
    setAuthLoading(true);
    try {
      if (method === "popup") {
        await signInWithGooglePopup();
        toast.success("Signed in successfully!");
      } else {
        await signInWithGoogleRedirect();
        // Redirect navigates away from the page, no direct success toast is needed here
      }
    } catch (error: any) {
      console.error("Sign-in error:", error);
      if (error.code === "auth/popup-closed-by-user") {
        toast.error("Sign-in popup closed before completion.");
      } else if (error.code === "auth/blocked-by-popup-blocker") {
        toast.error("Popup blocked! Try switching to Redirect mode.");
      } else {
        toast.error(error.message || "An error occurred during sign-in.");
      }
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    setAuthLoading(true);
    try {
      await logout();
      toast.success("Signed out successfully.");
    } catch (error: any) {
      console.error("Sign-out error:", error);
      toast.error(error.message || "Failed to sign out.");
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="background-nebula" />
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: "rgba(13, 17, 24, 0.95)",
            color: "#f3f4f6",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            borderRadius: "12px",
            padding: "12px 18px",
          }
        }}
      />
      
      <Card>
        <div className="glow-spot" />
        
        {loading ? (
          <div className="card-content">
            <div className="card-header">
              <div className="card-logo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h2 className="card-title">Securing Session</h2>
              <p className="card-subtitle">Verifying your authentication credentials...</p>
            </div>
            <Skeleton />
          </div>
        ) : user ? (
          <div className="card-content">
            <div className="card-header">
              <div className="profile-avatar-container">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || "User avatar"} className="profile-avatar" />
                ) : (
                  <div className="profile-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--primary)', fontSize: '24px', fontWeight: 'bold' }}>
                    {user.displayName ? user.displayName.charAt(0) : "U"}
                  </div>
                )}
              </div>
              <h2 className="profile-name">Welcome, {user.displayName || "User"}</h2>
              <p className="profile-email">{user.email}</p>
            </div>
            <Button variant="danger" onClick={handleSignOut} loading={authLoading}>
              Sign Out
            </Button>
          </div>
        ) : (
          <div className="card-content">
            <div className="card-header">
              <div className="card-logo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h2 className="card-title">Welcome Back</h2>
              <p className="card-subtitle">Sign in to access your secure developer dashboard.</p>
            </div>

            <div className="auth-method-selector">
              <button 
                className={`auth-method-tab ${method === "popup" ? "active" : ""}`}
                onClick={() => setMethod("popup")}
              >
                Popup Window
              </button>
              <button 
                className={`auth-method-tab ${method === "redirect" ? "active" : ""}`}
                onClick={() => setMethod("redirect")}
              >
                Page Redirect
              </button>
            </div>

            <Button 
              variant="primary" 
              onClick={handleSignIn} 
              loading={authLoading}
              icon={
                <svg viewBox="0 0 24 24" width="18" height="18" style={{ marginRight: '4px' }}>
                  <path
                    fill="#f3f4f6"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#f3f4f6"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#f3f4f6"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#f3f4f6"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              }
            >
              Sign In with Google
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

export default App;
