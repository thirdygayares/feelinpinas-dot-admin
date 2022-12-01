import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextArea = (props) => {
    const inputClass = () => {
        const suffixIc = "rounded-0 rounded-end";
        const affixIc = "rounded-0 rounded-start";
        const bothIc = "rounded-0"
        const noSuffixAffix = "rounded";

        if (props.affixIcon) {
            return affixIc;
        }

        if (props.suffixIcon) {
            return suffixIc;
        }

        if (props.affixIcon && props.suffixIcon) {
            return bothIc;
        }

        return noSuffixAffix;
    }
    return (
        <div className="d-flex flex-row p-2 justify-content-center" style={{width: `${props.width ?? "25%"}`, height: `${props.height ?? "4rem"}`}}>
            {
                props.suffixIcon ? <div className="p-1 col-2 d-flex justify-content-center align-items-center border-0 rounded-start bg-white">
                    <FontAwesomeIcon icon={props.suffixIcon} style={{color: "black"}} />
                </div> : <div />
            }
            <textarea className={`p-1 py-2 px-2 col-8 border ${inputClass()} w-100 ${props.className}`} placeholder={props.placeholder} onChange={props.onChange} />
            {
                props.affixIcon ? <div className="p-1 d-flex justify-content-center align-items-center border-0 rounded-start">
                   <FontAwesomeIcon icon={props.affixIcon} style={{color: "black"}} />
                </div> : <div />
            }
        </div>
    )
}

export default TextArea;