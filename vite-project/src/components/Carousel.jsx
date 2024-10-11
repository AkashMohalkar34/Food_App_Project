export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "object-fit-contain border rounded !important" }}>

                <div className="carousel-inner" id="carousel">

                    <div className="carousel-caption" style={{ zIndex: 1 }}>
                        <form className="d-flex" >
                            <input className="form-control me-2" type="search" placeholder="Search" />
                        </form>
                    </div>
                    <div className="">
                        <img src="https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-…" className="d-block w-100 " style={{ filter: "brightness(80%)", objectFit: "fill", height: "30px" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-…" className="d-block w-100" style={{ filter: "brightness(80%)", objectFit: "fill" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-…" className="d-block w-100" style={{ filter: "brightness(80%)", objectFit: "fill" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}
