import './splitPaneStyles.css';

function Contacts() {
    return <div className="Contacts"><p>Area de contatos</p></div>;
}

function Chat() {
    return <div className="Chat"><p>Area de chat</p></div>;
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

export function AppSplitPane() {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            } />
    );
}