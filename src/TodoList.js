import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'

import './style.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                'learn react',
                'learn english',
                'learn vue'
            ],
            inputValue: ''
        }

        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    // 增加任务
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    // 捕获输入改变
    handleInputChange(ev) {
        this.setState({
            inputValue: ev.target.value
        })
    }
    // 删除任务
    handleDelete(idx) {
        const list = [...this.state.list]
        list.splice(idx, 1)
        this.setState({
            list
        })
    }

    getTodoItems() {
        return (
            this.state.list.map((item, idx)=>{
                return (
                    <TodoItem key={idx} idx={idx} content={item} handleDelete={this.handleDelete} />
                )
            })
        )
    }
    render() {
        return( 
            <Fragment> 
                <div> 
                    <input value={this.state.inputValue} onChange={this.handleInputChange}/>
                    <button className="red-btn" onClick = {this.handleBtnClick}> add</button>
                </div> 
                <ul> 
                    {
                        this.getTodoItems()
                    }
                </ul>
            </Fragment>
        )
    }
}

export default TodoList