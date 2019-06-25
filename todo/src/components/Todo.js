import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

 class Todo extends Component {
    render() {
        return (
            <div>
                <form action="" onSubmit={() => this.props.addTodo}>
                    <input type="text"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapToProps = state => {
    return {
        todos: state.todos,

    }
}

export default connect(mapToProps,{addTodo})(Todo);



