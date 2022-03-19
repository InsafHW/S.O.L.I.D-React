import classes from './SidePanel.module.css'
import {Link} from 'react-router-dom'

function SidePanel({
    show,
    close
}) {
    const backdropClassName = [classes.backdrop, show ? classes.visible : null].join(' ')
    const sidePanelClassName = [classes.sidePanel, show ? classes.visible : null].join(' ')

    return (
        <div
            onClick={close}
            className={backdropClassName}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={sidePanelClassName}
            >
                <div className={classes.header}>
                    <div>Компоненты</div>
                    <button onClick={close}>X</button>
                </div>
                <div className={classes.content}>
                    <Link onClick={close} to={'/srp/wrong'}>Single Responsibility Principle. Wrong</Link>
                    <Link onClick={close} to={'/srp/right'}>Single Responsibility Principle. Right</Link>
                </div>
            </div>
        </div>
    )
}

export {
    SidePanel
}
