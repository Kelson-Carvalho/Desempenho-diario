import Image from "next/image";


function DayState({ dia }: {dia: boolean | undefined }){
    let image: [string, string, number?] = ["/images/ball.svg", "balls", 14];
    
    if (dia == true) image =  ["/images/check.svg", "check blue icon", 14];
    if (dia == false) image =  ["/images/delete.svg", "x red icon", 12];

    const [src, alt, size] = image;

    return(
        <div className="flex items-center justify-center h-9">
           <Image
                src={src}
                width={size}
                height={size}
                alt={alt}
           />
        </div>
    )
}

export default DayState;