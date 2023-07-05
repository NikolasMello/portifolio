import { CustomIcon } from "@/app/types/customIcon";

const MuiIcon:React.FC<CustomIcon> = ({className})=>{
    return (
        <svg id="adobe-xd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>
            <polygon points="36 25.732 36 4.948 18 15.34 0 4.948 0 25.732 6 29.196 6 15.34 18 22.268 30 15.34 30 22.268 18 29.196 24 32.66 36 25.732" fill="currentColor"/>
            <polygon points="42 8.412 42 15.34 48 11.876 48 4.948 42 8.412" fill="currentColor"/>
            <polygon points="42 29.196 30 36.124 18 29.196 18 36.124 30 43.052 30 43.052 48 32.66 48 18.804 42 22.268 42 29.196" fill="currentColor"/>
        </svg>
    )
}

export default MuiIcon;