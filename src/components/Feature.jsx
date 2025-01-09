import { useContext } from "react";
import { FeatrueFlagContext } from "../context/FeatureFlag";

const Feature = ({ feature, children }) => {
  const { features } = useContext(FeatrueFlagContext);

  return features[feature] ? children : null;
};

export default Feature;
