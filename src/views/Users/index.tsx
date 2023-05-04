import { Button, Form, Table } from "antd";
import React, { useEffect, useState } from "react";
import { IFormData, IUser } from "../../models/user.model";
import {
  createUser,
  getUserList,
  removeUser,
  updateUser,
} from "../../services/users.service";
import { useDataStore } from "../../store/useDataStore";
import UserModal from "../../components/UserModal";
import { getColumnsForTable } from "../../utils/getColumnsForTable";
import { getUserFromFormData } from "../../utils/getUserFromFormData";
import { getFormDataFromUser } from "../../utils/getFormDataFromUser";
import { FormattedMessage, useIntl } from "react-intl";

const Users: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const users = useDataStore((state) => state.data);
  const [form] = Form.useForm();
  const intl = useIntl();

  const changeModalVisible = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  const createUserHandler = () => {
    form.validateFields().then((values: IFormData) => {
      form.resetFields();
      const id = users[users.length - 1].id + 1;
      const newUser = getUserFromFormData(values, id);
      createUser(newUser);
      changeModalVisible();
    });
  };

  const updateUserHandler = () => {
    form.validateFields().then((values: IFormData) => {
      form.resetFields();
      const updatedUser = getUserFromFormData(values, selectedUser?.id || 0);
      updateUser(updatedUser.id, updatedUser);
      setSelectedUser(null);
      changeModalVisible();
    });
  };

  const cancelModal = () => {
    form.resetFields();
    setSelectedUser(null);
    changeModalVisible();
  };

  const removeUserHandler = (id: number) => {
    removeUser(id);
  };

  const handleRowDoubleClick = (user: IUser) => {
    setSelectedUser(user);
    changeModalVisible();
  };

  const rowRenderer = (record: IUser) => ({
    onDoubleClick: () => handleRowDoubleClick(record),
  });

  const columns = getColumnsForTable(removeUserHandler, intl);

  useEffect(() => {
    getUserList();
  }, []);

  useEffect(() => {
    if (selectedUser) {
      const formData = getFormDataFromUser(selectedUser);
      form.setFieldsValue(formData);
    }
  }, [selectedUser, form]);

  return (
    <main className="max-w-md mx-auto 2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl">
      <UserModal
        visible={isOpenModal}
        onCreate={createUserHandler}
        onUpdate={updateUserHandler}
        selectedUser={selectedUser}
        onCancel={cancelModal}
        form={form}
      />
      <Table
        className="mt-10"
        scroll={{ x: 670 }}
        dataSource={users}
        columns={columns}
        rowKey={intl.formatMessage({ id: "ROW_KEY_ID" })}
        onRow={rowRenderer}
        title={() => (
          <Button
            className="absolute bottom-0"
            type="default"
            onClick={changeModalVisible}
          >
            <FormattedMessage id="BUTTON.NEW_USER" />
          </Button>
        )}
      />
    </main>
  );
};

export default Users;
