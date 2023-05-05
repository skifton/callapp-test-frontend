import React, { useEffect } from "react";
import { useGetUserList } from "../../services/users.service";
import { Spin } from "antd";
import { useIntl } from "react-intl";

interface IProps {
  children: React.ReactNode;
}

const Loader: React.FC<IProps> = ({ children }) => {
  const { isLoading: isLoadingUserList, getUserList } = useGetUserList();
  const intl = useIntl();

  useEffect(() => {
    getUserList();
  }, [getUserList]);

  if (isLoadingUserList) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spin
          tip={intl.formatMessage({ id: "SPINNER.LOADING" })}
          size="large"
        />
      </div>
    );
  }
  return <>{children}</>;
};

export default Loader;
