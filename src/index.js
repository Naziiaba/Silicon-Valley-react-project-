import React, { Component } from 'react';
import { render } from 'react-dom';

let mData = {
    total: 50,
    yoga: 30,
    meditation: 25,
    goal: 100
}
class MindfulnessCounter extends Component {
    getPercent = decimal => {
        return decimal * 100 + '%'
    }
    calcGoalProgress = (total, goal) => {
        return this.getPercent(total/goal)
    }
    render() {
        const {total, yoga, meditation, goal} = this.props
        return (
            <section>
                <div>
                    <p>Total Days: {total}</p>
                </div>
                <div>
                    <p>Yoga Days: {yoga}</p>
                </div>
                <div>
                    <p>Meditation Days: {meditation}</p>
                </div>
                <div>
                    <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
                </div>
            </section>
        )
    }
}


render(
    <MindfulnessCounter
        total ={mData.total}
        yoga={mData.yoga}
        meditation ={mData.meditation}
        goal={mData.goal}/>,
    document.getElementById('root'))