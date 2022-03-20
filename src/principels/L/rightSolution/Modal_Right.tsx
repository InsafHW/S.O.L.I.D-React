import {ModalHolder} from './ModalHolder'

function Modal_Right() {
    const modalContent = <div> This is shown inside modal </div>

    return (
        <div>
            <ModalHolder contentToShow={modalContent}/>
        </div>
    )
}

export {
    Modal_Right
}
