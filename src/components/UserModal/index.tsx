import { Modal, FormInstance } from "antd";
import { IFormData, IUser } from "../../models/user.model";
import UserForm from "../../views/Users/UserForm";
import { useIntl } from "react-intl";

interface IProps {
  visible: boolean;
  onCreate: () => void;
  onUpdate: () => void;
  onCancel: () => void;
  selectedUser: IUser | null;
  form: FormInstance<IFormData>;
}

const UserModal: React.FC<IProps> = ({
  visible,
  onCreate,
  onUpdate,
  onCancel,
  selectedUser,
  form,
}) => {
  const intl = useIntl();

  return (
    <Modal
      open={visible}
      title={
        selectedUser
          ? intl.formatMessage({ id: "MODAL.EDIT_USER" })
          : intl.formatMessage({ id: "MODAL.ADD_USER" })
      }
      onCancel={onCancel}
      onOk={selectedUser ? onUpdate : onCreate}
      okButtonProps={{
        type: "default",
      }}
    >
      <UserForm form={form} />
    </Modal>
  );
};

export default UserModal;
