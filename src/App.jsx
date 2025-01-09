import Example from "./components/Example";
import Feature from "./components/Feature";
import { FeatureFlagProvider } from "./context/FeatureFlag";

function App() {
  return (
    <>
      <FeatureFlagProvider>
        <Feature feature="isGooglePayEnabled">
          <Example />
        </Feature>
      </FeatureFlagProvider>
    </>
  );
}

export default App;
