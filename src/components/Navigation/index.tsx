import React from "react";
import NavigationButton from "../NavigationButton";
import { useIntl } from "react-intl";
import { ROUTES } from "../../routes/routes";

const Navigation: React.FC = () => {
  const intl = useIntl();

  return (
    <header className="flex items-center h-20 shadow-md">
      <div className="w-full max-w-md mx-auto 2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl">
        <NavigationButton
          to={ROUTES.users}
          title={intl.formatMessage({ id: "NAVIGATION.USERS_BUTTON_TITLE" })}
        />
        <NavigationButton
          to={ROUTES.statistics}
          title={intl.formatMessage({
            id: "NAVIGATION.STATISTICS_BUTTON_TITLE",
          })}
        />
      </div>
    </header>
  );
};

export default Navigation;
