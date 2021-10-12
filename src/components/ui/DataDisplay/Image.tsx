import './Image.css';

type ImageProps = {
    src: string,
    type?: 'default',
    alt?: string,
    title?: string,
    size?: 'l',
}

const styleImage = {
    'default': "first-image",
}

export const Image: React.FC<ImageProps> = ({ size="l", src, type="default", alt="", title="картинка" }: ImageProps) => {
    const style = `${styleImage[type]} size-${size}`;

    return (
        <div className="image-container">
            <img
                src={src}
                alt={alt}
                title={title}
                className={style}
            />
        </div>
    )
}
