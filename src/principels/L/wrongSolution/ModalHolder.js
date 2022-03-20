import {useState} from 'react'
import Modal from 'react-modal'

function ModalHolder({
    contentToShow
}) {
    // PROBLEM: WE CAN ANYTHING AS A CONTENT_TO_SHOW
    const [visibility, setVisibility] = useState(false)

    return (
        <>
            <button onClick={() => setVisibility(true)}> Show Modal</button>

            <Modal isOpen={visibility}>
                <div>{contentToShow}</div>
            </Modal>
        </>
    )
}

export {
    ModalHolder
}
