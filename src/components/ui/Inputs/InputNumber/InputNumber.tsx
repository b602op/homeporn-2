import './InputNumber.css';

type InputNumberProps = {
    type?: 'default',
    ownStyles?: string,
    onChange?: (value: number) => void,
    important?: boolean,
    placeholder?: string,
    value?: number | null,
    min?: number,
}

const styleInputNumber = {
    'default': "first-inputnumber",
}

export const InputNumber: React.FC<InputNumberProps> = ({ min, value, ownStyles, placeholder, type='default', onChange, important }: InputNumberProps) => {
    const handleChange = (e: any) => {
        e.preventDefault();

        if (typeof min === 'number' &&  (min > e.target.value)) return;

        if (onChange) onChange(e.target.value || 0);
    }

    return (
        <div className={`container-inputnumber ${ownStyles || ''}`.trim()}>
            <input type="number" value={value || 0} placeholder={placeholder} className={styleInputNumber[type]} onChange={handleChange} />
        </div>
    )
}
