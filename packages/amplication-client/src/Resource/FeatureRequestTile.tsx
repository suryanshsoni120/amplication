import React, { useCallback } from "react";

import { Button, EnumButtonStyle } from "@amplication/ui/design-system";

import { useTracking } from "../util/analytics";
import OverviewSecondaryTile from "./OverviewSecondaryTile";
import { AnalyticsEventNames } from "../util/analytics-events.types";

function FeatureRequestTile() {
  const { trackEvent } = useTracking();

  const handleClick = useCallback(() => {
    trackEvent({ eventName: AnalyticsEventNames.FeatureRequestTileClick });
  }, [trackEvent]);

  return (
    <OverviewSecondaryTile
      icon="logo"
      title="Submit a Feature Request"
      message="If there’s something you’d like to see in Amplication, open a Feature Request on GitHub and tell us about it."
      footer={
        <a
          href="https://github.com/amplication/amplication/issues/new/choose"
          target="githubfeature"
          rel="noopener"
          onClick={handleClick}
          style={{ minWidth: "140px" }}
        >
          <Button buttonStyle={EnumButtonStyle.Outline} type="button">
            Share Your Idea
          </Button>
        </a>
      }
    />
  );
}

export default FeatureRequestTile;
