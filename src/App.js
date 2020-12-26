import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';


class App extends Component {

  id = 0;
  
  state = {
    information: []
  }
  
  handleCreate = (data) => {
    const { information } = this.state;
    // this.setState({
    //   information: information.concat({
    //     ...data,
    //     id: this.id++
    //   })    //기존의 배열에다가 값을 넣어주자
    // });
    this.setState({
      information: information.concat(Object.assign({}, data, {
        id: this.id++
      }))    //기존의 배열에다가 값을 넣어주자
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        {/* {JSON.stringify(this.state.information)} */} 
        <PhoneInfoList 
          data={this.state.information} 
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;