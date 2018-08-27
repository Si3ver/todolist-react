import React from 'react';

class TodoItem extends React.Component {
    handleDelete(){
        // 调用父组件的handleDelete方法
        this.props.handleDelete(this.props.index)
    }
    render() {
        return (
            <li onClick={this.handleDelete.bind(this)}>{this.props.content}</li>
        )
    }
}

export default TodoItem;