import { Button, Table } from "antd";
import React from "react";
import { IUser } from "../../models/user.model";
import { useRemoveUser } from "../../services/users.service";
import { useGetColumnsForTable } from "../../hooks/useGetColumnsForTable";
import { FormattedMessage, useIntl } from "react-intl";
import { DeleteOutlined } from "@ant-design/icons";
import { eventStopPropagation } from "../../utils/eventStopPropagation";
import { Outlet, useNavigate } from "react-router-dom";
import { getUsers, useUserListStore } from "../../store/useUserListStore";

const Users: React.FC = () => {
  const users = useUserListStore(getUsers);
  const { isLoading: isRemoving, removeUser } = useRemoveUser();
  const navigate = useNavigate();
  const intl = useIntl();

  const removeUserHandler =
    (id: string) => (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation();

      if (isRemoving) {
        return;
      }

      removeUser(id);
    };

  const handleRowDoubleClick = (user: IUser) => {
    navigate(`${user?.id}`);
  };

  const rowRenderer = (record: IUser) => ({
    onDoubleClick: () => handleRowDoubleClick(record),
  });

  const columns = useGetColumnsForTable({
    actionColumn: {
      dataIndex: intl.formatMessage({ id: "TABLE.REMOVE_INDEX" }),
      key: intl.formatMessage({ id: "TABLE.REMOVE_INDEX" }),
      fixed: "right",
      render: (text: string, record: IUser) => (
        <Button
          className="bg-red-500 flex items-center hover:bg-red-300"
          type="default"
          onDoubleClick={eventStopPropagation}
          onClick={removeUserHandler(record?.id || "")}
        >
          <DeleteOutlined className="text-white" />
        </Button>
      ),
    },
  });

  return (
    <main className="max-w-md mx-auto 2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl">
      <Table
        className="mt-10"
        scroll={{ x: 670 }}
        dataSource={users}
        columns={columns}
        rowKey={intl.formatMessage({ id: "ROW_KEY_ID" })}
        onRow={rowRenderer}
        title={() => (
          <div className="flex justify-end">
            <Button type="default" onClick={() => navigate("/users/new")}>
              <FormattedMessage id="BUTTON.NEW_USER" />
            </Button>
          </div>
        )}
      />
      <Outlet />
    </main>
  );
};

export default Users;
