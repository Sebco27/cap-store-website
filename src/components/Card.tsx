interface CardProps {
    // Image path for the back of the card
    backImage?: string;
    // Image path for the front of the card
    frontImage?: string;
    // Badge text displayed on the front
    badgeText?: string;
}

const Card: React.FC<CardProps> = ({
                                       backImage,
                                       frontImage,
                                       badgeText,
                                   }) => {
    return (
        <div className="card-cap">
            <div className="card-cap-content">
                <div className="card-cap-back">
                    <div className="card-cap-back-content">
                        <img
                            src={backImage}
                            width="auto"
                            height="100%"
                            alt="Back product"
                        />
                    </div>
                </div>

                <div className="card-cap-front">
                    <div className="img">
                        <img
                            src={frontImage}
                            width="100%"
                            height="auto"
                            alt="Front product"
                        />
                    </div>

                    <div className="card-cap-front-content">
                        <small className="card-cap-badge">{badgeText}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;