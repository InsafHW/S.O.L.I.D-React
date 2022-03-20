import {UserList_Wrong} from './principels/S/wrongSolution/UserList_Wrong'
import {UserList_Right} from './principels/S/rightSolution/UserList_Right'

const routes = [
    {
        path: '/srp/wrong',
        element: <UserList_Wrong/>,
        title: 'Single Responsibility Principle. Wrong'
    },
    {
        path: '/srp/right',
        element: <UserList_Right/>,
        title: 'Single Responsibility Principle. Right'
    }
]

export {
    routes
}
