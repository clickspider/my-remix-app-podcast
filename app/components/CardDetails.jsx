const CardDetails = ({ episode: { thumbnail, title, description, guid, enclosure: { link } } }) => {
    return (
        <div key={guid} className="grid-container">
            <div>
                <img src={thumbnail} alt="yolo" />
            </div>
            <div>
                <div className="mb-3 text-lg text-red-700">
                    {title}
                </div>
                <p className="mb-3 text-sm text-gray-700">
                    {description}
                </p>
                <audio controls src={link} />
            </div>
        </div>
    )
}

export default CardDetails;

