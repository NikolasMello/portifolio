
export default function Logo(){

    return (
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 650">
            <defs>
                <linearGradient id="linear-gradient" x1="236.876" y1="363.755" x2="810.048" y2="302.542" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#7e22ce"/>
                <stop offset="1" stopColor="#2563eb"/>
                </linearGradient>
                <linearGradient id="linear-gradient-2" x1="237.747" y1="371.912" x2="810.92" y2="310.699" href="#linear-gradient"/>
                <linearGradient id="linear-gradient-3" x1="234.731" y1="343.672" x2="807.904" y2="282.459" href="#linear-gradient"/>
            </defs>
            <g>
                <path d="m581.5,206.95c-6.409,1.593-17.089,5.125-27.921,13.425-12.55,9.616-19.064,20.851-22.079,27.019v199.556h50v-240Z" fill="url(#linear-gradient)"/>
                <path d="m776.888,231.252c-29.237-25.304-62.963-24.627-70.367-24.302h-105.02v50h105.02c4.31.064,22.975.821,38.408,15.637,12.826,12.314,15.797,27.021,16.572,31.932v43.654c-.604,4.688-3.209,20.316-16.672,33.246-15.454,14.842-34.137,15.489-38.308,15.531h-105.02v50h105.02c8.04.3,40.23.569,68.716-23.151,34.29-28.553,36.09-69.283,36.264-75.626v-43.654c-.195-6.376-2.024-45.063-34.612-73.267Z" fill="url(#linear-gradient-2)"/>
                <path d="m511.179,307.13c-.02,6.15-.04,12.3-.06,18.45v121.55h-50v-140c-.49-4.73-2.71-20.47-15.91-33.68-16.01-16.02-36.19-16.32-40.09-16.31v-.01h-87v190h-50v-240h137c6.22-.3,46.91-1.57,77.93,30.52,27.05,27.99,28.08,62.04,28.13,69.48Z" fill="url(#linear-gradient-3)"/>
            </g>
            <polyline points="811.53 106.95 931.5 106.95 931.5 547.31 811.53 546.95" fill="none" stroke="#2563eb" strokeLinejoin="round" strokeWidth="40"/>
            <polyline points="268.47 106.95 148.5 106.95 148.5 547.31 268.47 546.95" fill="none" stroke="#7e22ce" strokeLinejoin="round" strokeWidth="40"/>
        </svg>
    )
}