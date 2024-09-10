import './App.css'
import CreateBookmarkPage from "./Pages/CreateBookmark.tsx";
import ViewPage from "./Pages/ViewPage.tsx";




function App() {

    return (
        <>
            <div className={'main-page'}>
                <ViewPage/>
                <CreateBookmarkPage/>
            </div>
        </>
    )
}

export default App
