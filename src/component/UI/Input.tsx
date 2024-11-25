export default function Input({label,id, ...props}: {label: string, id: string, [key: string]: any}) {
    return (
        <p className="control">
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} required {...props} />
        </p>
    )
}