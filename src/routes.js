import {UserList_Wrong} from './principels/S/wrongSolution/UserList_Wrong'
import {UserList_Right} from './principels/S/rightSolution/UserList_Right'
import {User_Wrong} from './principels/O/wrongSolution/User_Wrong'
import {User_Right} from './principels/O/rightSolution/User_Right'
import {Modal_Wrong} from './principels/L/wrongSolution/Modal_Wrong'
import {User_Wrong_I} from './principels/I/wrongSolution/User_Wrong'
import {User_Right_I} from './principels/I/rightSolution/User_Right'

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
    },
    {
        path: '/ocp/wrong',
        element: <User_Wrong user={{
            type: 'SUPER_ADMIN',
            name: 'Super Admin123',
            email: 'super@mail.com'
        }}/>,
        title: 'Open/Closed Principle. Wrong'
    },
    {
        path: '/ocp/right',
        element: <User_Right user={{
            type: 'SUPER_ADMIN',
            name: 'Super Admin123',
            email: 'super@mail.com'
        }}/>,
        title: 'Open/Closed Principle. Right'
    },
    {
        path: '/lsp/wrong',
        element: <Modal_Wrong/>,
        title: 'Liskov Substitution Principle. Wrong'
    },
    // {
    //     path: '/lsp/right',
    //     element: <Modal_Right/>,
    //     title: 'Liskov Substitution Principle. Right'
    // }
    {
        path: '/isp/wrong',
        element: <User_Wrong_I/>,
        title: 'Interface Segregation Principle. Wrong'
    },
    {
        path: '/isp/right',
        element: <User_Right_I/>,
        title: 'Interface Segregation Principle. Right'
    }
]

export {
    routes
}
