import { Calendar, Badge } from 'antd';
import { Component } from 'react';

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [{ type: 'warning', content: '工程会议' }, { type: 'success', content: '活动' }];
      break;
    case 10:
      listData = [
        { type: 'warning', content: '工程会议' },
        { type: 'success', content: '北京出差' },
        { type: 'error', content: '文艺晚会' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: '工程会议' },
        { type: 'success', content: '工程会议' },
        { type: 'error', content: '工程会议' },
        { type: 'error', content: '工程会议' },
        { type: 'error', content: '工程会议' },
        { type: 'error', content: '工程会议' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

export default class Claende extends Component {
  render() {
    return <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />;
  }
}
