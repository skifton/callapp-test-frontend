import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { IColumn } from "../models/table.model";
import { IUser } from "../models/user.model";
import { IntlShape } from "react-intl";

export const getColumnsForTable = (removeUserHandler: (id: number) => void, intl: IntlShape) => {
  return [
    {
      title: intl.formatMessage({ id: "TABLE.NAME" }),
      dataIndex: intl.formatMessage({ id: "TABLE.NAME_INDEX" }),
      key: intl.formatMessage({ id: "TABLE.NAME_INDEX" }),
    },
    {
      title: intl.formatMessage({ id: "TABLE.EMAIL" }),
      dataIndex: intl.formatMessage({ id: "TABLE.EMAIL_INDEX" }),
      key: intl.formatMessage({ id: "TABLE.EMAIL_INDEX" }),
    },
    {
      title: intl.formatMessage({ id: "TABLE.GENDER" }),
      dataIndex: intl.formatMessage({ id: "TABLE.GENDER_INDEX" }),
      key: intl.formatMessage({ id: "TABLE.GENDER_INDEX" }),
    },
    {
      title: intl.formatMessage({ id: "TABLE.ADDRESS" }),
      dataIndex: intl.formatMessage({ id: "TABLE.ADDRESS_INDEX" }),
      key: intl.formatMessage({ id: "TABLE.ADDRESS_INDEX" }),
      render: (_text, record) => (
        <p>
          {record.address.city}, {record.address.street}
        </p>
      ),
    },
    {
      title: intl.formatMessage({ id: "TABLE.PHONE" }),
      dataIndex: intl.formatMessage({ id: "TABLE.PHONE_INDEX" }),
      key: intl.formatMessage({ id: "TABLE.PHONE_INDEX" }),
    },
    {
      dataIndex: intl.formatMessage({ id: "TABLE.REMOVE_INDEX" }),
      key: intl.formatMessage({ id: "TABLE.REMOVE_INDEX" }),
      render: (text: string, record: IUser) => (
        <Button
          className="bg-red-500 flex items-center hover:bg-red-300"
          type="default"
          onClick={() => removeUserHandler(record?.id)}
        >
          <DeleteOutlined className="text-white" />
        </Button>
      ),
    },
  ] as IColumn[];
};
