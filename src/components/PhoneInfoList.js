import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: []
    }

    render() {
        const { data, onRemove, onUpdate } = this.props;

        console.log('rendering list');  //업데이트 할때마다 리스트 전체를 새로 그리므로 shouldComponentUpdate를 이용하여 성능 최적화를 해야한다.

        const list = data.map(
            info => (
                <PhoneInfo 
                onRemove={onRemove}
                onUpdate={onUpdate}
                info={info} 
                key={info.id} 
                />
            )
        )
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;