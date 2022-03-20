/*
 в user - name, age и т.д., а в этой компоненте нужны только данные о банке
 */

function BankDetails({
    user
}) {
    return (
        <>
            <div>{user.bankName}</div>
            <div>{user.bankAccountNumber}</div>
        </>
    )
}

export {
    BankDetails
}
