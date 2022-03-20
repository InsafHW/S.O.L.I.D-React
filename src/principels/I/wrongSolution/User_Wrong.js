import {PersonDetails} from './PersonDetails'
import {BankDetails} from './BankDetails'

const user = {
    name: 'Harry',
    age: 18,
    address: 'new Street',
    bankName: 'Tinkoff',
    bankAccountNumber: '123'
}

function User_Wrong_I() {
    return (
        <>
            <PersonDetails user={user}/>
            <BankDetails user={user}/>
        </>
    )
}

export {
    User_Wrong_I
}
