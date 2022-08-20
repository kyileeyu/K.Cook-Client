
const MakePrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"~";
}

export default MakePrice;