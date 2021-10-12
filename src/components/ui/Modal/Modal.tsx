
type ModalPropTypes = {
    onClose: (value: boolean) => void;
}

export const Modal = ({ onClose }: ModalPropTypes) => (
    <div className="modal">
        <div className="popup-window">
            <h1>New build</h1>
            <p>Enter the commit hash which you want to build.</p>
            {/* <input className="ordinary-input" type="text" name="commit-hash" placeholder="Commit hash" required
                value={commitHash}
                onChange={(event) => setCommitHash(event.target.value)} /> */}
            {/* <Link to="/history"><button className="ordinary-button action-button">Run build</button></Link> */}
            <button className="ordinary-button popup-button" onClick={() => onClose(false)}>Cancel</button>
        </div>
    </div>
)