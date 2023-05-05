import { IUser } from "../models/user.model";
import { useIntl } from "react-intl";
import { ColumnsType } from "antd/es/table";

export const useGetColumnsForTable = ({
  actionColumn,
}: {
  actionColumn: any;
}): ColumnsType<IUser> => {
  const intl = useIntl();

  return [
    {
      title: intl.formatMessage({ id: "TABLE.NAME" }),
      dataIndex: intl.formatMessage({ id: "TABLE.NAME_INDEX" }),
      key: intl.formatMessage({ id: "TABLE.NAME_INDEX" }),
      fixed: "left",
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
    actionColumn,
  ];
};
