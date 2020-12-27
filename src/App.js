import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';


class App extends Component {

  id = 3;
  
  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-0000-0001'
      },
      {
        id: 1,
        name: '고길동',
        phone: '010-0000-0001'
      },
      {
        id: 2,
        name: '김길동',
        phone: '010-0000-0001'
      },
    ],
    keyword: ''
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
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

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if(info.id === id) {
            return {
              id,
              ...data,
            };
          }
          return info;
        }
      )
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <input 
          value={this.state.keyword} 
          onChange={this.handleChange} 
          placeholder="검색..."
        />
        {/* {JSON.stringify(this.state.information)} */} 
        <PhoneInfoList 
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )} //filter를 이용하여 검색
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
