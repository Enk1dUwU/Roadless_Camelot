function mostrar_equipo()
{
    var img1=document.getElementById("tb_opt_1").value
    var img2=document.getElementById("tb_opt_2").value
    var img3=document.getElementById("tb_opt_3").value
    var img4=document.getElementById("tb_opt_4").value
    var img5=document.getElementById("tb_opt_5").value
    var img6=document.getElementById("tb_opt_6").value

    var stg1=document.getElementById("tb_asc_1").value
    var stg2=document.getElementById("tb_asc_2").value
    var stg3=document.getElementById("tb_asc_3").value
    var stg4=document.getElementById("tb_asc_4").value
    var stg5=document.getElementById("tb_asc_5").value
    var stg6=document.getElementById("tb_asc_6").value

    f1="img/servants/portrait_servant_"+img1+"_"+stg1+".png"
    f2="img/servants/portrait_servant_"+img2+"_"+stg2+".png"
    f3="img/servants/portrait_servant_"+img3+"_"+stg3+".png"
    f4="img/servants/portrait_servant_"+img4+"_"+stg4+".png"
    f5="img/servants/portrait_servant_"+img5+"_"+stg5+".png"
    f6="img/servants/portrait_servant_"+img6+"_"+stg6+".png"

    document.images["tb_port_1"].src=f1;
    document.images["tb_port_2"].src=f2;
    document.images["tb_port_3"].src=f3;
    document.images["tb_port_4"].src=f4;
    document.images["tb_port_5"].src=f5;
    document.images["tb_port_6"].src=f6;

    document.getElementById('textoprueba1').innerHTML=f1;
    document.getElementById('textoprueba2').innerHTML=f2;
    document.getElementById('textoprueba3').innerHTML=f3;
    document.getElementById('textoprueba4').innerHTML=f4;
    document.getElementById('textoprueba5').innerHTML=f5;
    document.getElementById('textoprueba5').innerHTML=f6;
}
function sup(num)
{
    support = document.getElementById("support")
    support.style.left = `${num}px`;
}