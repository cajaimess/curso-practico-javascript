// const precioOriginal = 120;
// const descuento = 18;


const calcularPrecioConDescuentos = (precio, descuento) =>{

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

 const priceDiscount = () =>{

    const inputPrice = document.getElementById("InputPrice").value;
    const inputDiscount = document.getElementById("InputDiscount").value;

    const precioConDescuento = calcularPrecioConDescuentos(inputPrice, inputDiscount);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = `El precio con descuento es : $ ${precioConDescuento}`
    return resultP
 }

    const coupons = [
        {
            name: "Camilo18",
            discount: 15
        },
        {
            name: "Sebas18",
            discount: 26
        }
    ];

    const couponValid = () =>{

        const userCoupon = document.getElementById("InputCoupons").value;
        const isCouponValueValid = function (coupon) {
            
            return coupon.name === userCoupon;
        };
        
        const couponsFind = coupons.find(isCouponValueValid);
        if (!couponsFind) {
            alert("El cupón " + userCoupon + " no es válido");
        }else{
            const inputPrice = document.getElementById("InputPrice").value;
            const descuento = couponsFind.discount;
            const precioConDescuento = calcularPrecioConDescuentos(inputPrice,descuento);
            const resultP = document.getElementById("ResultP");
            resultP.innerText = `El precio con descuento es : $ ${precioConDescuento}`
            return resultP
        }
    }


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });