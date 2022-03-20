import {PersonDetails} from './PersonDetails'
import {BankDetails} from './BankDetails'

const user = {
    name: 'Harry',
    age: 18,
    address: 'new Street',
    bankName: 'Tinkoff',
    bankAccountNumber: '123'
}

function User_Right_I() {
    return (
        <>
            <PersonDetails name={user.name} age={user.age} address={user.address}/>
            <BankDetails bankName={user.bankName} bankAccountNumber={user.bankAccountNumber}/>
        </>
    )
}

export {
    User_Right_I
}
