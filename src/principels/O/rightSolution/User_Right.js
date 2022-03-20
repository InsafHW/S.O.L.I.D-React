import {User} from './User'
import {Admin} from './admin/Admin'
import {SuperAdmin} from './superAdmin/SuperAdmin'

function User_Right({
    user
}) {
    const userByType = {
        USER: User,
        ADMIN: Admin,
        SUPER_ADMIN: SuperAdmin
    }

    const CurrentUser = userByType[user.type]

    return <CurrentUser user={user}/>
}

export {
    User_Right
}
