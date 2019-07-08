import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '这里是初始值',
            fruit: 'mango',
            isGoing: true,
            numberOfGuests: 2,
        }

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleChange(e) {
        this.setState({
            fruit: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(e)
        // alert('提交的名字是：' + this.state.value);
        alert('你提交的水果是：' + this.state.fruit);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        名字：<input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}></input>
                    </label>
                    <input type="submit" value="提交"></input>
                    <label>
                        <select value={this.state.fruit} onChange={this.handleChange.bind(this)}>
                            <option value="grapefruit">葡萄柚</option>
                            <option value="lime">柠檬</option>
                            <option value="coconut">椰子</option>
                            <option value="mango">芒果</option>
                        </select>
                    </label>
                    <input type='file'></input>
                </form>
                <form>
                    <label>
                        参与:
                    <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange.bind(this)} />
                    </label>
                    <br />
                    <label>
                        来宾人数:
                    <input
                            name="numberOfGuests"
                            type="number"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange.bind(this)} />
                    </label>
                </form>
            </div>
        )
    }
}
