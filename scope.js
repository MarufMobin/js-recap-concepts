function media( age, earnig){
    console.log(age);
    console.log(earnig)

    var trueAge = age + 5;

    function canMarry( expance ){
        const remaining = earnig - expance;
        if( remaining > 1000 ){
            return true;
        }
        return false;
    }
    const canMerry = function ( expance ){
        const remaining = earnig - expance;
        if( remaining > 1000 ){
            return true;
        }
        return false;
    }
}

/* 
 => execution context a niye sob parameter and only var k niye jai ar ai execution ar modhe niye rakha k hoisting ble

 **=> var hole hoisting ar somoi jast decliaration ke nei man k nei na
 
 **=> jodi regular funtion hoi taile se function ta ke hoistion krbe kintu jodi var ar sathe likha thake taile ta nibe na jast bam pser ta niye hoisting kre dibe


 **=> jodi const diye know variable define kra hoi ba let diye ta hoistin hoi na sei jaigai rekhe dei tai const/let diye define kra variable tar por tar output show kraite hoi


 ***===> let/const ara akta block scope toiry kre ar var ta block scope toiry kre na var ta hoist hoye jsi akdom upore  
*/