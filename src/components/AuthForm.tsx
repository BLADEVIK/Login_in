import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { observer } from "mobx-react-lite";
import { userStore } from "../store/UserStore";

const AuthForm: React.FC = observer(() => {
  const initialValues = { login: "", password: "" };

  const validationSchema = Yup.object({
    login: Yup.string().email("Неверный email").required("Обязательное поле"),
    password: Yup.string().required("Обязательное поле"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    setTimeout(() => {
      userStore.setUser(values.login);
      window.location.href = "/";
    }, 1000);
    
  };
  
  return (
    <div className="auth-form">
      <h1>Авторизация</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="email" name="login" placeholder="Email" />
              <ErrorMessage name="login" component="div" />
            </div>
            <div>
              <Field type="password" name="password" placeholder="Пароль" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Отправка..." : "Войти"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
});

export default AuthForm;
