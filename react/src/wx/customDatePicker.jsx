import { Form, DatePicker, Button } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

function CustomDatePicker () {

  const [form] = Form.useForm();
  const onChange = (type) => {
    let date
    switch(type) {
      case 'today': 
        date = moment();
        break;
      case 'weeklast':
        date = moment().add(7, 'days');
        break;
      case 'lastMonth':
        date = moment().add(30, 'days');
        break;
      default: 
        date = moment();
    }
    form.setFieldsValue({ 
      date
    })
  }
  const onFinish = (values) => {
    const date = values['date'].format('YYYY/MM/DD')
    console.log(date);
  };
  return (<>
      <Button type="primary" onClick={ () =>  onChange('today') }>今天</Button>
      <Button type="primary" onClick={ () =>  onChange('weeklast') }>7天后</Button>
      <Button type="primary" onClick={ () =>  onChange('lastMonth') }>下个月</Button>
      <Form {...formItemLayout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item label="日期" name='date' >
          <DatePicker
            format={dateFormat}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </>)
}

export default CustomDatePicker