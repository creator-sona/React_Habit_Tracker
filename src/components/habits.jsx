import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    handleIncrease = habit => {
        this.props.onIncrease(habit);
    }

    handleDecrease = habit => {
        this.props.onDecrease(habit);
    }

    handleDelete = habit => {
        this.props.onDelete(habit);
    }

    handleAdd = name => {
        this.props.onAdd(name);
    }

    render() {
        return (
            <section>
                <HabitAddForm onAdd={this.handleAdd}/>
                <ul>
                    {this.props.habits.map(habit => (
                        <Habit key={habit.id} 
                            habit={habit} 
                            onIncrease={this.handleIncrease}
                            onDecrease={this.handleDecrease}
                            onDelete={this.handleDelete}
                        />
                    ))}
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </section>
        );
    }
}

export default Habits;