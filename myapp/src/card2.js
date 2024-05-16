import './index.css'
function Card2(props) {
    return (
        <>
            <div className="card">
                <img src={props.img} height={'200px'} width={'100%'} />
                <div className="card-body">
                    <b><h3>{props.name}</h3></b>
                    <p>{props.info}</p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star "></span>
                </div>
                <div className="card-footer bg-white">
                    <button className="btn btn-outline-success">Buy Now</button>
                    <button className="btn btn-outline-success float-right">Read More</button>
                </div>
            </div>
        </>
    )
}
export default Card2;