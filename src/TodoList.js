import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                'learn react',
                'learn english',
                'learn vue'
            ],
            inputValue: ''
        }
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
    render() {
        return( 
            <div> 
                <div> 
                    <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
                    <button onClick = {this.handleBtnClick.bind(this)}> add</button>
                </div> 
                <ul> 
                    {
                        this.state.list.map((item, idx)=>{
                            return <TodoItem key={idx} idx={idx} content={item} handleDelete={this.handleDelete.bind(this)} />
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;