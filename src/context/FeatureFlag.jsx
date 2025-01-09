import { createContext, useState } from "react";

export const FeatrueFlagContext = createContext({});

export const FeatureFlagProvider = ({ children }) => {
  const [features] = useState({
    isGooglePayEnabled: true,
    isApplePayEnabled: false,
  });
  return (
    <FeatrueFlagContext.Provider value={{ features }}>
      {children}
    </FeatrueFlagContext.Provider>
  );
};
