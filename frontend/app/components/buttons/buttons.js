import Image from "next/image";

export default function Buttons({
	className = "",
	onClick,
	ctaBtn,
	icon,
	alt,
	src,
	children,
}) {
	return (
		<button className={`${className}`} onClick={onClick}>
			{ctaBtn && children}
			{icon && <Image src={src} alt={alt || ""} height={25} width={25} />}
		</button>
	);
}
