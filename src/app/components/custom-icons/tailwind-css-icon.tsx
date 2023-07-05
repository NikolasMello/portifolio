import { CustomIcon } from "@/app/types/customIcon";

const TailwindCssIcon:React.FC<CustomIcon> =({className})=> {
    return (
        <svg id="adobe-xd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>
            <path d="m39.6,18.024c-1.8-.62-3.389-1.735-4.584-3.216-2.67-3.345-6.736-5.268-11.016-5.208-5.891-.417-11.114,3.761-12,9.6,1.727-2.889,5.121-4.334,8.4-3.576,1.797.638,3.383,1.759,4.584,3.24,2.684,3.318,6.749,5.213,11.016,5.136,5.891.417,11.114-3.761,12-9.6-1.697,2.926-5.107,4.397-8.4,3.624Zm-31.2,11.952c1.8.62,3.389,1.735,4.584,3.216,2.67,3.345,6.736,5.268,11.016,5.208,5.891.417,11.114-3.761,12-9.6-1.727,2.889-5.121,4.334-8.4,3.576-1.797-.638-3.383-1.759-4.584-3.24-2.691-3.309-6.751-5.202-11.016-5.136-5.891-.417-11.114,3.761-12,9.6,1.697-2.926,5.107-4.397,8.4-3.624Z" fill="currentColor"/>
        </svg>
    )
}

export default TailwindCssIcon;