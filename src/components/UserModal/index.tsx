import { Modal, Form } from "antd";
import { IFormData } from "../../models/user.model";
import UserForm from "../../views/Users/UserForm";
import { useIntl } from "react-intl";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { createUser, getUser, updateUser } from "../../services/users.service";
import { getUserFromFormData } from "../../utils/getUserFromFormData";
import { getFormDataFromUser } from "../../utils/getFormDataFromUser";

const UserModal: React.FC = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const intl = useIntl();

  useEffect(() => {
    if (id) {
      const user = getUser(id);
      user.then((res) => {
        const formData = getFormDataFromUser(res);
        form.setFieldsValue(formData);
      });
    }
  }, []);

  const okHandler = () => {
    form.validateFields().then((values: IFormData) => {
      const correctData = getUserFromFormData(values);
      if (id) {
        updateUser(id, correctData);
      } else {
        createUser(correctData);
      }
      form.resetFields();
      navigate("/users");
    });
  };

  const cancelHandler = () => {
    form.resetFields();
    navigate(-1);
  };

  return (
    <Modal
      open={Boolean(id) || location.pathname === "/users/new"}
      title={
        id
          ? intl.formatMessage({ id: "MODAL.EDIT_USER" })
          : intl.formatMessage({ id: "MODAL.ADD_USER" })
      }
      onCancel={cancelHandler}
      onOk={okHandler}
      okButtonProps={{
        type: "default",
      }}
    >
      <UserForm form={form} />
    </Modal>
  );
};

export default UserModal;
