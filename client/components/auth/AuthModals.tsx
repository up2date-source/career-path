import { useState } from "react";
import SignInModal from "./SignInModal";
import GetStartedModal from "./GetStartedModal";

type AuthModalType = 'signin' | 'signup' | null;

interface AuthModalsProps {
  activeModal: AuthModalType;
  onClose: () => void;
}

export default function AuthModals({ activeModal, onClose }: AuthModalsProps) {
  const [currentModal, setCurrentModal] = useState<AuthModalType>(activeModal);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setCurrentModal(null);
      onClose();
    }
  };

  const switchToSignIn = () => {
    setCurrentModal('signin');
  };

  const switchToSignUp = () => {
    setCurrentModal('signup');
  };

  // Update current modal when activeModal prop changes
  if (activeModal !== currentModal && activeModal !== null) {
    setCurrentModal(activeModal);
  }

  return (
    <>
      <SignInModal
        open={currentModal === 'signin'}
        onOpenChange={handleOpenChange}
        onSwitchToSignUp={switchToSignUp}
      />
      <GetStartedModal
        open={currentModal === 'signup'}
        onOpenChange={handleOpenChange}
        onSwitchToSignIn={switchToSignIn}
      />
    </>
  );
}

// Hook for using auth modals
export function useAuthModals() {
  const [activeModal, setActiveModal] = useState<AuthModalType>(null);

  const openSignIn = () => setActiveModal('signin');
  const openSignUp = () => setActiveModal('signup');
  const closeModals = () => setActiveModal(null);

  return {
    activeModal,
    openSignIn,
    openSignUp,
    closeModals,
  };
}
