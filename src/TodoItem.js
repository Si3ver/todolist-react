import React, {Component} from 'react'

class TodoItem extends Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete(){
        // 调用父组件的handleDelete方法
        this.props.handleDelete(this.props.index)
    }
    render() {
        const {content} = this.props
        return (
            <li onClick={this.handleDelete}>{content}</li>
        )
    }
}

export default TodoItem