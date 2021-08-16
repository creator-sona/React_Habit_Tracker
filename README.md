# Habit-Tracker Clone Coding with React
React공부를 하면서 간단한 어플리케이션을 구현하였다. [Link🔍](https://sonayaa.github.io/react_habit_tracker)

## 1. 프로젝트 기능
1. 사용자가 입력한 습관 추가/삭제
2. Count증감

## 2. 개발 환경
- React
- ES6
- VSCode, iTerm2, Github...

## 3. Code
각각의 기능을 처리하는 이벤트 핸들러 함수를 만들어 사용될 자식컴포넌트에 함수를 전달한다.
```javascript
    state = {
        habits: [
            {id: 1, name: 'Coding', count: 0},
            {id: 2, name: 'Reading', count: 0},
            {id: 3, name: 'Running', count: 0},
        ],
    }
   
    handleIncrease = habit => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({habits : habits});
    }

    handleDecrease = habit => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({habits : habits});
    }

    handleDelete = habit => {
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits : habits});
    }

    handleAdd = name => {
        const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }]
        this.setState({habits : habits});
    }

    handelReset = () => {
        const habits = this.state.habits.map(habit => {
            habit.count = 0;
            return habit;
        });
        this.setState({habits : habits});
    }
    
    render() {
        return (
            <>
                <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
                <Habits 
                    habits={this.state.habits}
                    onIncrease={this.handleIncrease}
                    onDecrease={this.handleDecrease}
                    onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                    onReset={this.handelReset}
                />
            </>
            );
    }
```

## 4. 스크린샷
<img width="400px" src="https://user-images.githubusercontent.com/75556110/129526728-a0be7464-40e5-432c-93e8-c2207e8f74d0.png">

