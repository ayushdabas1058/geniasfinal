import { Navigate, useLocation } from "react-router-dom";
import type { User } from "@supabase/supabase-js";

interface ProtectedRouteProps {
  user: User | null;
  children: React.ReactNode;
}

export default function ProtectedRoute({ user, children }: ProtectedRouteProps) {
  const location = useLocation();

  if (!user) {
    return <Navigate to="/auth" state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
}
