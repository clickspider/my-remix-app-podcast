import { Link } from 'remix';

const Card = ({
    episode: { thumbnail, title, description, guid, enclosure: { link } },
}) => {
    const id = guid.split('/').pop();
    const routerToUrl = `/episode/${id}`;
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link to={routerToUrl}>
                <img className="rounded-t-lg" src={thumbnail} alt={title} />
            </Link>

            <div className="p-5">
                <Link to={routerToUrl}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </Link>

                <p className="mb-3 text-sm text-gray-700 dark:text-gray-400 max-h-36 truncate">
                    {description}
                </p>

                <audio controls src={link} />
            </div>
        </div>
    );
};

export default Card;
