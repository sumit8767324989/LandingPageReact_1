const hero = () => {
    return (
        <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVES THE BEST</h1>
            <p>YOUR FEET DESREVES THE BEST ANS WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVES THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="hero-btn">
                <button>Show Now</button>
                <button className="secondary-btn">Category</button>
            </div>

            <div className="shopping">
                <p>Also Available On</p>
            </div>


            <div className="brand-icons">
                <img src="/Images/amazon.png" alt="amazon-logo" />
                <img src="/Images/flipkart.png" alt="flipkart-logo" />
            </div>

        </div>
        <div className="hero-image">
        <img src="/Images/shoe_image.png" alt="shoe_image-logo" />
        </div>
        </main>
    );
}

export default hero;