//The Coupon Code

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
 return Boolean(
         (enteredCode === correctCode) & 
         ( new Date(currentDate) <= new Date(expirationDate)  ) 
                )
}