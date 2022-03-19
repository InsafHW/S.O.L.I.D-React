import classes from './App.module.css'
import {SidePanel} from './components/sidePanel/SidePanel'
import {useState} from 'react'
import {ExpandButton} from './components/expandButton/ExpandButton'
import {Route, Routes} from 'react-router-dom'
import {UserList_Wrong} from './principels/S/wrongSolution/UserList_Wrong'
import {UserList_Right} from './principels/S/rightSolution/UserList_Right'

function App() {
    const [showSidePanel, setShowSidePanel] = useState(false)

    return (
        <div>
            <ExpandButton
                onClick={() => setShowSidePanel(true)}
                style={{
                    position: 'absolute',
                    right: 0,
                    marginRight: '10px',
                    marginTop: '6px'
                }}
            />
            <SidePanel
                show={showSidePanel}
                close={() => setShowSidePanel(false)}
            />
            <Routes>
                <Route path={'/srp/wrong'} element={<UserList_Wrong/>}/>
                <Route path={'/srp/right'} element={<UserList_Right/>}/>
            </Routes>
        </div>
    )
}

export default App
