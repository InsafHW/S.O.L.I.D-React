import classes from './SidePanel.module.css'
import {Link} from 'react-router-dom'
import {routes} from '../../routes'

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
                    {routes.map(r => (
                        <Link
                            key={r.path}
                            onClick={close}
                            to={r.path}
                        >{r.title}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export {
    SidePanel
}
