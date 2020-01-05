import React  from 'react';
import { Form, Icon, Input, Button, Checkbox , Card, message } from 'antd';
import Cookies from 'js-cookie';
import styles from './Login.less';
import { doLogin } from '../../services/home';

class NormalLoginForm extends React.Component {
  state = {
    isLogining: false
  }

  handleSubmit = e => {
    e.preventDefault();
    const { isLogining } = this.state;
    if(isLogining) return;
    this.setState({
      isLogining: true
    })
    setTimeout(() => {
      this.setState({
        isLogining: false
      })
    }, 500);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.handleLogin(values);
      }
    });
  };

  handleLogin = async (values) => {
    const { location } = this.props;
    const url = location.query.redirect;
    const res = await doLogin({
      code: values.username,
      pwd: values.password
    })
    const { data, desc, success } = res;
    if(success) {
      // alert(JSON.stringify(res))
      console.log(res, 'erwre');
      Cookies.set('userInfo', JSON.stringify(data[0]), { expires: 365 });
      message.success(desc || '登录成功');
      window.location.href = url || '/';
    } else {
      message.error(desc || '登录失败');
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.content}>
        <Card>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
            </Form.Item>
            <Form.Item>
              <div className={styles.btn}>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;