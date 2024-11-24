import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({children, open, className}: {children: any, open: boolean, className?: string}) {

    const dialogRef = useRef<any>();

    useEffect(() => {
        if (open) {
            (dialogRef.current as any).showModal();
        } else {
            (dialogRef.current as any).close();
        }
    }, [open]);
    
    return createPortal(
        <dialog ref={dialogRef} className={className}>
            <div className="modal-content">
                {children}
            </div>
        </dialog>, document.getElementById("modal") as HTMLElement
    );
}