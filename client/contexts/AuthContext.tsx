import React, { createContext, useContext, useState } from 'react';

type AuthModalType = 'signin' | 'signup' | null;

interface AuthContextType {
  activeModal: AuthModalType;
  openSignIn: () => void;
  openSignUp: () => void;
  closeModals: () => void;
  isAuthenticated: boolean;
  user: null | { name: string; email: string };
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [activeModal, setActiveModal] = useState<AuthModalType>(null);
  const [isAuthenticated] = useState(false); // This would be managed by your auth system
  const [user] = useState(null); // This would contain user data when authenticated

  const openSignIn = () => setActiveModal('signin');
  const openSignUp = () => setActiveModal('signup');
  const closeModals = () => setActiveModal(null);

  return (
    <AuthContext.Provider
      value={{
        activeModal,
        openSignIn,
        openSignUp,
        closeModals,
        isAuthenticated,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
