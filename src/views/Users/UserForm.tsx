import { Form, FormInstance, Input } from "antd";
import React from "react";
import { IFormData } from "../../models/user.model";
import { useIntl } from "react-intl";

interface IProps {
  form: FormInstance<IFormData>;
}

const UserForm: React.FC<IProps> = ({ form }) => {
  const intl = useIntl();

  return (
    <Form form={form} layout="vertical" name="form_in_modal">
      <Form.Item
        name={intl.formatMessage({ id: "FORM.NAME_FIELD.NAME" })}
        label={intl.formatMessage({ id: "FORM.NAME_FIELD.LABEL" })}
        rules={[
          {
            required: true,
            message: intl.formatMessage({ id: "FORM.NAME_FIELD.REQUIRED" }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={intl.formatMessage({ id: "FORM.EMAIL_FIELD.NAME" })}
        label={intl.formatMessage({ id: "FORM.EMAIL_FIELD.LABEL" })}
        rules={[
          {
            type: "email",
            message: intl.formatMessage({ id: "FORM.EMAIL_FIELD.TYPE" }),
          },
          {
            required: true,
            message: intl.formatMessage({ id: "FORM.EMAIL_FIELD.REQUIRED" }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={intl.formatMessage({ id: "FORM.GENDER_FIELD.NAME" })}
        label={intl.formatMessage({ id: "FORM.GENDER_FIELD.LABEL" })}
        rules={[
          {
            required: true,
            message: intl.formatMessage({ id: "FORM.GENDER_FIELD.REQUIRED" }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={intl.formatMessage({ id: "FORM.CITY_FIELD.NAME" })}
        label={intl.formatMessage({ id: "FORM.CITY_FIELD.LABEL" })}
        rules={[
          {
            required: true,
            message: intl.formatMessage({ id: "FORM.CITY_FIELD.REQUIRED" }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={intl.formatMessage({ id: "FORM.STREET_FIELD.NAME" })}
        label={intl.formatMessage({ id: "FORM.STREET_FIELD.LABEL" })}
        rules={[
          {
            required: true,
            message: intl.formatMessage({ id: "FORM.STREET_FIELD.REQUIRED" }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={intl.formatMessage({ id: "FORM.PHONE_FIELD.NAME" })}
        label={intl.formatMessage({ id: "FORM.PHONE_FIELD.LABEL" })}
        rules={[
          {
            required: true,
            message: intl.formatMessage({ id: "FORM.PHONE_FIELD.REQUIRED" }),
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default UserForm;
