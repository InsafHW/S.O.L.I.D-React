import classes from './ExpandButton.module.css'

function ExpandButton({
    onClick,
    style
}) {
    function getClassName(className) {
        return [classes.line, className].join(' ')
    }

    return (
        <div
            className={classes.button}
            onClick={onClick}
            style={style}
        >
            <div className={getClassName(classes.firstLine)}></div>
            <div className={getClassName(classes.secondLine)}></div>
            <div className={getClassName(classes.thirdLine)}></div>
        </div>
    )
}

export {
    ExpandButton
}
