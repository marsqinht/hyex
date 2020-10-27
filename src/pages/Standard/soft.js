import React from 'react';
import { getPDF } from '../../services/company';


export default class Soft extends React.Component {
  state = {
    pdf: ''
  };

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async () => {
    const { data, success } = await getPDF();
    console.log(data);
    success &&
      this.setState({
        pdf: data[0].FileRow[0].ServerUrl
      });
  };

  render() {
    const { pdf } = this.state;
    return (
      <iframe width="100%" height="1000" src={pdf} />
    );
  }
}
