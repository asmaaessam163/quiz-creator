import { FC } from "react"

interface AppDialogProps{
    open: boolean;
    onClose: ()=>void
    title: string;
}

const AppDialog: FC<AppDialogProps> = ({open, onClose, title, children}) => {
    //@ts-ignore
    return <div className='app-dialog' 
                style={{display: open? 'flex': 'none'}} 
                // onClick={onClose}
            >
            <div className="dialog-content">
                <div className='dialog-title'>
                    <div>{title}</div>
                    <div className='close-icon' onClick={onClose}>&times;</div>
                </div>
                <div className="dialog-body">
                    {children}
                </div>
            </div>
    </div>
}

export default AppDialog