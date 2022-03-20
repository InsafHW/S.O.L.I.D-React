import {ModalHolder} from './ModalHolder'

function Modal_Wrong() {
    // const modalContent = <div> This is shown inside modal </div>
    const modalContent = {key: ' value'}

    return (
        <div>
            <ModalHolder contentToShow={modalContent}/>
        </div>
    )
}

export {
    Modal_Wrong
}
