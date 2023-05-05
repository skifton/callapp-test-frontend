import { Modal, Form } from "antd";
import {
  IFormData,
  parseUserJsonBody,
  parseUserToFormData,
} from "../../models/user.model";
import UserForm from "./UserForm";
import { useIntl } from "react-intl";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { createUser, getUser, updateUser } from "../../services/users.service";

const UserModal: React.FC = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const intl = useIntl();

  useEffect(() => {
    if (id) {
      form.resetFields();
      getUser(id)
        .then((res) => {
          if (res.status === 200) {
            const formData = parseUserToFormData(res.data);
            form.setFieldsValue(formData);
          }
        })
        .catch(({ response }) => {
          if (response.status === 404) {
            navigate("/users");
          }
        });
    }
  }, [id, form, navigate]);

  const cancelHandler = () => {
    navigate("/users");
  };

  const submitForm = () => {
    form.validateFields().then((values: IFormData) => {
      const correctData = parseUserJsonBody(values);
      if (id) {
        updateUser(id, correctData).then((res) => {
          if (res.status === 200) {
            cancelHandler();
          }
        });
      } else {
        createUser(correctData).then((res) => {
          if (res.status === 200) {
            cancelHandler();
          }
        });
      }
    });
  };

  return (
    <Modal
      open={true}
      title={
        id
          ? intl.formatMessage({ id: "MODAL.EDIT_USER" })
          : intl.formatMessage({ id: "MODAL.ADD_USER" })
      }
      onCancel={cancelHandler}
      onOk={submitForm}
      okButtonProps={{
        type: "default",
      }}
    >
      <UserForm form={form} />
    </Modal>
  );
};

export default UserModal;
